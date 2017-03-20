import store from '../modules/store';

/* eslint-disable no-param-reassign */
export default {
  el: '#v-cart',
  data: store,
  filters: {
    currency(amount) {
      return amount;
    },
  },
};
