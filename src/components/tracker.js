import store from '../modules/store';

export default {
  el: '#v-tracker',
  data: store,
  filters: {
    currency(amount) {
      return amount;
    },
  },
};
