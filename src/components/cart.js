import store from '../modules/store';

export default {
  el: '#v-cart',
  data: store,
  filters: {
    currency(amount) {
      return amount;
    },
  },
};
