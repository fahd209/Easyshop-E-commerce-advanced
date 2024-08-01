package org.yearup.data;

import org.yearup.models.Order;
import org.yearup.models.OrderLineItem;
import org.yearup.models.ShoppingCart;

import java.util.List;

public interface OrderDao {
    Order addOrder(int userId);

    List<OrderLineItem> addOrderLineItem(int orderId, ShoppingCart shoppingCart);

    Order getOrderByUserId(int userId);

    List<Order> getUserOrder(int userId);

    List<OrderLineItem> getOrderLineItems (Order order);

    Order getOrderByOrderId(int orderId);
}
