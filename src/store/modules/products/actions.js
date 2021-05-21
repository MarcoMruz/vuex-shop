export default {
  addProductToCart(context, payload) {
    const productInCartIndex = context.getters.cart.items.findIndex(
      ci => ci.productId === payload.id
    );

    if (productInCartIndex >= 0) {
      context.commit('addItemQty', { id: productInCartIndex });
    } else {
      const newItem = {
        productId: payload.id,
        title: payload.title,
        image: payload.image,
        price: payload.price,
        qty: 1
      };

      context.commit('addItemToCart', newItem);
    }

    context.commit('addQty');
    context.commit('addTotal', { value: payload.price });
  },

  removeProductFromCart(state, id) {
    const productInCartIndex = state.getters.cart.items.findIndex(
      cartItem => cartItem.productId === id
    );

    const prodData = state.getters.cart.items[productInCartIndex];

    if (state.getters.cart.items[productInCartIndex].qty - 1 === 0)
      state.commit('removeItemFromCart', productInCartIndex);
    else state.commit('decreaseItemQty', productInCartIndex);

    state.commit('decreaseQty');
    state.commit('decreaseTotal', { value: prodData.price });
  }
};
