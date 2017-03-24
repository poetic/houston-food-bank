import queryString from 'query-string';

import convertToNumber from '../modules/convertToNumber';

const { budget, totalCalories } = queryString.parse(window.location.search);

export default {
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
};
