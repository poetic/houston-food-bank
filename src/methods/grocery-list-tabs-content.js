/* eslint-disable no-param-reassign */

export const isActive = function (groupIndex) {
  return groupIndex === this.activeContent ? 'w--tab-active' : '';
};

export const removeItem = function (item) {
  if (item.quantity !== 0) {
    item.quantity -= 1;
  }
};

export const addItem = function (item) {
  if (this.adjustedBudget >= item.price) {
    item.quantity += 1;
  } else {
    this.toggle('overBudgetModal');
  }
};
