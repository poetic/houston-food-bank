import { flatten } from 'lodash';
import queryString from 'query-string';

const { budget, totalCalories } = queryString.parse(window.location.search);

const getNumericValue = value => (
  isNaN(value) ? 0 : Number(value)
);

const store = {
  budget: getNumericValue(budget),
  totalCalories: getNumericValue(totalCalories),
  groupedGroceryList: {},
  groupNames: [],
  currentTab: 0,
  activeContent: 0,
  styles: {
    loadingScreen: {},
    loadingFill: {},
    emptyCartModal: {},
    overBudgetModal: {},
  },
  toggle(elementName) {
    const elementStyle = this.styles[elementName] || {};
    const display = elementStyle.display === 'block' ? 'none' : 'block';

    this.styles[elementName] = { display };
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
  nonNutritiousCalories() {
    return this.selectedItems()
      .filter(item => item.nonNutritious)
      .reduce((total, item) => (
        total + (item.calories * item.quantity)
      ), 0);
  },
  adjustedTotalCalories() {
    return this.selectedItems()
      .filter(item => !item.nonNutritious)
      .reduce((total, item) => (
        total + (item.calories * item.quantity)
      ), 0);
  },
  adjustedBudget() {
    return this.budget - this.cartTotalPrice();
  },
};

export default store;
