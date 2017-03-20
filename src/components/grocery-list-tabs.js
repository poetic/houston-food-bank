import fetchGroceryList from '../modules/fetchGroceryList';
import store from '../modules/store';

export default {
  el: '#v-grocery-list-tabs',
  data: store,
  created() {
    this.fetchGroceryList();
  },
  methods: {
    fetchGroceryList() {
      fetchGroceryList()
        .then((groupedGroceryList) => {
          this.groupedGroceryList = groupedGroceryList;
          this.groupNames = Object.keys(groupedGroceryList);
        });
    },
    isCurrent(groupIndex) {
      return groupIndex === this.currentTab ? 'w--current' : '';
    },
    selectTab(groupIndex) {
      this.currentTab = groupIndex;
      this.activeContent = groupIndex;
    },
  },
};
