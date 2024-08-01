package org.yearup.data.mysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.SpringApplicationEvent;
import org.springframework.stereotype.Component;
import org.yearup.data.*;
import org.yearup.models.*;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class MySqlOrderDao extends MySqlDaoBase implements OrderDao {

    ShoppingCartDao shoppingCartDao;
    ProfileDao profileDao;

    @Autowired
    public MySqlOrderDao(DataSource dataSource, ShoppingCartDao shoppingCartDao, ProfileDao profileDao) {
        super(dataSource);
        this.shoppingCartDao = shoppingCartDao;
        this.profileDao = profileDao;
    }

    @Override
    public Order addOrder(int userId) {
        // getting shopping cart by user id
        ShoppingCart shoppingCart = shoppingCartDao.getByUserId(userId);
        // getting user profile by user id from userDao
        Profile profile = profileDao.getProfile(userId);
        // shopping cart and user's info to shoppingCart
        Order order = mapToOrder(profile);

        List<OrderLineItem> lineItems = null;

        // inserting order
        String sql = """
                INSERT INTO orders
                (user_id, date, address, city, state, zip, shipping_amount)
                VALUES
                (?, ?, ?, ?, ?, ?, ?);
                """;
        try(Connection connection = getConnection())
        {
            PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setInt(1,order.getUserid());
            preparedStatement.setString(2, order.getDate());
            preparedStatement.setString(3, order.getAddress());
            preparedStatement.setString(4, order.getCity());
            preparedStatement.setString(5, order.getState());
            preparedStatement.setString(6, order.getZip());
            preparedStatement.setDouble(7, order.getShippingAmount());
            preparedStatement.executeUpdate();

            // getting the generated key
            ResultSet id = preparedStatement.getGeneratedKeys();
            if(id.next())
            {
                int generatedId = id.getInt(1);
                order.setOrderId(generatedId);
            }

            // getting the list of items in the shopping cart and mapping them to line items
            lineItems = addOrderLineItem(order.getOrderId(), shoppingCart);
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }

        // looping through the line item list and adding them to the order
        for (OrderLineItem lineItem : lineItems)
        {
            order.addItem(lineItem);
        }

        return order;
    }

    @Override
    public List<OrderLineItem> addOrderLineItem(int ordeId , ShoppingCart shoppingCart) {

        // getting cartItem from shopping cart and converting it to list of map entry's
        List<Map.Entry<Integer, ShoppingCartItem>> shoppingCartItems = new ArrayList<>(shoppingCart.getItems().entrySet());

        // getting the order info of the current user by the user's id
        Order order = getOrderByOrderId(ordeId);

        String sql = """
                    INSERT INTO order_line_items
                    (order_id, product_id, sales_price, quantity, discount)
                    VALUES
                    (?, ?, ?, ?, ?)
                    """;

        // looping through the entry
        for (Map.Entry<Integer, ShoppingCartItem> entry : shoppingCartItems)
        {
            // getting the product id and cart item
            ShoppingCartItem shoppingCartItem = entry.getValue();
            OrderLineItem lineItem = new OrderLineItem()
            {{
               setOrderId(order.getOrderId());
               setProductId(shoppingCartItem.getProductId());
               setQuantity(shoppingCartItem.getQuantity());
               setSales_price(shoppingCartItem.getLineTotal());
            }};
            order.addItem(lineItem);

            try(Connection connection = getConnection()) {
                PreparedStatement preparedStatement = connection.prepareStatement(sql);
                preparedStatement.setInt(1, order.getOrderId());
                preparedStatement.setInt(2, shoppingCartItem.getProductId());
                preparedStatement.setBigDecimal(3, shoppingCartItem.getLineTotal());
                preparedStatement.setInt(4, shoppingCartItem.getQuantity());
                preparedStatement.setBigDecimal(5, shoppingCartItem.getDiscountPercent());
                preparedStatement.executeUpdate();

            }
            catch (Exception e)
            {
                throw new RuntimeException(e);
            }
        }

        shoppingCartDao.clearCart(order.getUserid());
        return order.getLineItems();
    }

    // getting order by user id
    @Override
    public Order getOrderByUserId(int userId) {
        Order order = null;

        String sql = """
                SELECT order_id
                    ,user_id
                    ,date
                    ,address
                    ,city
                    ,state
                    ,zip
                    ,shipping_amount
                FROM orders
                WHERE user_id = ?;
                """;

        try(Connection connection = getConnection())
        {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, userId);
            ResultSet row = preparedStatement.executeQuery();

            if(row.next())
            {
                // getting all columns for the row
                int orderId = row.getInt("order_id");
                int clientId = row.getInt("user_id");
                String date = row.getString("date");
                String address = row.getString("address");
                String city = row.getString("city");
                String state = row.getString("state");
                String zip = row.getString("zip");
                double shippingAmount = row.getDouble("shipping_amount");

                // making an order object out the columns
                order = new Order(orderId, clientId, date, address, city, state, zip, shippingAmount);
            }
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }
        return order;
    }

    @Override
    public List<Order> getUserOrder(int userId) {
        List<Order> ordersList = new ArrayList<>();

        String sql = """
                SELECT order_id
                    ,user_id
                    ,date
                    ,address
                    ,city
                    ,state
                    ,zip
                    ,shipping_amount
                FROM orders
                WHERE user_id = ?;
                """;

        try(Connection connection = getConnection())
        {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, userId);
            ResultSet row = preparedStatement.executeQuery();

            while (row.next())
            {
                // getting all columns for the row
                int orderId = row.getInt("order_id");
                int clientId = row.getInt("user_id");
                String date = row.getString("date");
                String address = row.getString("address");
                String city = row.getString("city");
                String state = row.getString("state");
                String zip = row.getString("zip");
                double shippingAmount = row.getDouble("shipping_amount");

                // making an order object out the columns
                ordersList.add(new Order(orderId, clientId, date, address, city, state, zip, shippingAmount));
            }
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }

        for(Order order : ordersList)
        {
            order.setLineItems(getOrderLineItems(order));
        }



        return ordersList;
    }


    @Override
    public List<OrderLineItem> getOrderLineItems (Order order)
    {
        List<OrderLineItem> orderLineItems = new ArrayList<>();
        String sql = """
                SELECT order_line_item_id,
                        order_id,
                        product_id,
                        sales_price,
                        quantity,
                        discount
                FROM order_line_items
                WHERE order_id = ?;
                """;
        try(Connection connection = getConnection()){
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1, order.getOrderId());
            ResultSet row = statement.executeQuery();

            while (row.next())
            {
                int orderLineItemId = row.getInt("order_line_item_id");
                int orderId = row.getInt("order_id");
                int productId = row.getInt("product_id");
                BigDecimal salesPrice = row.getBigDecimal("sales_price");
                int quantity = row.getInt("quantity");

                OrderLineItem orderLineItem = new OrderLineItem(){{
                    setOrderLineItemId(orderLineItemId);
                    setOrderId(orderId);
                    setProductId(productId);
                    setSales_price(salesPrice);
                    setQuantity(quantity);
                }};
                orderLineItems.add(orderLineItem);
            }

        }catch (Exception e)
        {
            throw new RuntimeException(e);
        }

        return orderLineItems;
    }

    @Override
    public Order getOrderByOrderId(int orderId) {
        Order order = null;

        String sql = """
                SELECT order_id
                    ,user_id
                    ,date
                    ,address
                    ,city
                    ,state
                    ,zip
                    ,shipping_amount
                FROM orders
                WHERE order_id = ?;
                """;

        try(Connection connection = getConnection())
        {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, orderId);
            ResultSet row = preparedStatement.executeQuery();

            if(row.next())
            {
                // getting all columns for the row
                int order_Id = row.getInt("order_id");
                int clientId = row.getInt("user_id");
                String date = row.getString("date");
                String address = row.getString("address");
                String city = row.getString("city");
                String state = row.getString("state");
                String zip = row.getString("zip");
                double shippingAmount = row.getDouble("shipping_amount");

                // making an order object out the columns
                order = new Order(order_Id, clientId, date, address, city, state, zip, shippingAmount);
            }
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }
        return order;
    }

    // mapping profile info to order
    public Order mapToOrder(Profile profile)
    {
        Order order = new Order()
        {{
            setUserid(profile.getUserId());
            setAddress(profile.getAddress());
            setCity(profile.getCity());
            setState(profile.getState());
            setZip(profile.getZip());
            setShippingAmount(0);
        }};
        return order;
    }
}
