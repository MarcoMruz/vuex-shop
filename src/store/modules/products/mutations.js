export default {
  addQty(state) {
    state.cart.qty++;
  },

  addTotal(state, { value }) {
    state.cart.total += value;
  },

  decreaseQty(state) {
    state.cart.qty--;
  },

  decreaseItemQty(state, index) {
    state.cart.items[index].qty--;
  },

  decreaseTotal(state, { value }) {
    state.cart.total -= value;
  },

  addItemToCart(state, payload) {
    state.cart.items.push(payload);
  },

  addItemQty(state, { id }) {
    state.cart.items[id].qty++;
  },

  removeItemFromCart(state, index) {
    state.cart.items.splice(index, 1);
  }
};
