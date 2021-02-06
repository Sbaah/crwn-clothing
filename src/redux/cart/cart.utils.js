/**
 * This file will allows us to keep our file clean
 * and organized functions that we may need in multiples files
 * in one location
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

// export const removeItemToCart = (cartItems, cartItemToRemove) => {
// const existingCartItem = cartItems.find(
// (cartItem) => cartItem.id === cartItemToRemove.id
// );
//
// if (existingCartItem === 1) {
// return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// }
// return cartItems.map((cartItem) =>
// cartItem.id === cartItemToRemove.id
// ? { ...cartItemToRemove, quantity: cartItem.quantity - 1 }
// : cartItem
// );

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
