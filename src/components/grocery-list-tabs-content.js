import store from '../modules/store';

/* eslint-disable no-param-reassign */
export default {
  el: '#v-grocery-list-tabs-content',
  data: store,
  methods: {
    isActive(groupIndex) {
      return groupIndex === this.activeContent ? 'w--tab-active' : '';
    },
    removeItem(item) {
      if (item.quantity !== 0) {
        item.quantity -= 1;
      }
    },
    addItem(item) {
      if (this.adjustedBudget() >= item.price) {
        item.quantity += 1;
      }
    },
  },
};
