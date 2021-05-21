export default {
  login(state) {
    state.authenticated = true;
  },
  logout(state) {
    state.authenticated = false;
  }
};
