const store = {
  budget: 101,
  totalCalories: 0,
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
