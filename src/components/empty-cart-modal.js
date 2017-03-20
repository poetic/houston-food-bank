import store from '../modules/store';

/* eslint-disable no-param-reassign */
export default {
  el: '#v-empty-cart-modal',
  data: store,
  methods: {
    emptyCart() {
      this.selectedItems().forEach((item) => {
        item.quantity = 0;
      });
    },
  },
};
