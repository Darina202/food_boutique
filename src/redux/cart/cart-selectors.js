export const selectCartProducts = store => store.cart;
export const isCartNotEmpty = store => store.cart.cartItems?.length;
