/* eslint-disable no-param-reassign */

import numeral from 'numeral';

export default {
  decimal(number) {
    return numeral(number).format('0,0[.]00');
  },

  currency(number) {
    return numeral(number).format('$0,0[.]00');
  },

  toggle(elementName) {
    const elementStyle = this.styles[elementName] || {};
    const display = !elementStyle.display || elementStyle.display === 'none'
      ? 'block'
      : 'none';

    this.styles[elementName] = { display };
  },

  isCurrent(groupIndex) {
    return groupIndex === this.currentTab ? 'w--current' : '';
  },

  selectTab(groupIndex) {
    this.currentTab = groupIndex;
    this.activeContent = groupIndex;
  },

  isActive(groupIndex) {
    return groupIndex === this.activeContent ? 'w--tab-active' : '';
  },

  removeItem(item) {
    if (item.quantity !== 0) {
      item.quantity -= 1;
    }
  },

  addItem(item) {
    if (this.adjustedBudget >= item.price) {
      item.quantity += 1;
    } else {
      this.toggle('overBudgetModal');
    }
  },

  removeAllOfItem(item) {
    item.quantity = 0;
  },

  emptyCart() {
    this.selectedItems.forEach((item) => {
      item.quantity = 0;
    });

    this.toggle('emptyCartModal');
  },
};
