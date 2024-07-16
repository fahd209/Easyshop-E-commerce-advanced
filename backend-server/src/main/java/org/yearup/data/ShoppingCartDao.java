package org.yearup.data;

import org.yearup.models.ShoppingCart;
import org.yearup.models.ShoppingCartItem;

public interface ShoppingCartDao
{
    ShoppingCart getByUserId(int userId);
    // add additional method signatures here

    ShoppingCart addItem(int userId, int productId);

    Boolean isInShoppingCart(int userId, int productId);

    ShoppingCart updateShoppingCartItem(int itemId, ShoppingCartItem shoppingCartItem, int userId);

    ShoppingCart clearCart(int userId);
}
