import { flatten } from 'lodash';
import queryString from 'query-string';

import convertToNumber from '../modules/convertToNumber';

const { budget, totalCalories } = queryString.parse(window.location.search);

const data = {
  budget: convertToNumber(budget),
  totalCalories: convertToNumber(totalCalories),
  groupedGroceryList: {},
  groupNames: [],
  currentTab: 0,
  activeContent: 0,
  styles: {
    emptyCartModal: {},
    overBudgetModal: {},
  },
  selectedItems() {
    const groupedSelectedItems = this.groupNames.map(groupName => (
      this.groupedGroceryList[groupName].filter(item => item.quantity > 0)
    ));

    return flatten(groupedSelectedItems);
  },
  cartTotalPrice() {
    return this.selectedItems().reduce((total, item) => (
      total + (item.price * item.quantity)
    ), 0);
  },
  cartIsEmpty() {
    return this.selectedItems().length === 0;
  },
  nutritiousCalories() {
    return this.selectedItems()
      .filter(item => !item.nonNutritious)
      .reduce((total, item) => (
        total + (item.calories * item.quantity)
      ), 0);
  },
  nonNutritiousCalories() {
    return this.selectedItems()
      .filter(item => item.nonNutritious)
      .reduce((total, item) => (
        total + (item.calories * item.quantity)
      ), 0);
  },
  adjustedTotalCalories() {
    return this.nutritiousCalories() + this.nonNutritiousCalories();
  },
  adjustedBudget() {
    return this.budget - this.cartTotalPrice();
  },
};

export default data;
