export default {
  products(state) {
    return state.products;
  },

  cart(state) {
    return state.cart;
  },

  cartTotal(_, getters) {
    return (getters.cart.total + 0.001).toFixed(2);
  }
};
