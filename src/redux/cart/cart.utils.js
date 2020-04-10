export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  // Quantity is automatically added this way. 
  return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}