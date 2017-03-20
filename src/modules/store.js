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
  webflow: false,
  modifyTotalCalories(calories) {
    this.totalCalories += calories;
  },
  modifyBudget(price) {
    this.budget += price;
  },
};

export default store;
