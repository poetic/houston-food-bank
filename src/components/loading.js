import fetchGroceryList from '../modules/fetchGroceryList';
import store from '../modules/store';

export default {
  el: '#v-loading',
  data: store,
  mounted() {
    this.fetchGroceryList();
  },
  methods: {
    fetchGroceryList() {
      fetchGroceryList()
        .then((groupedGroceryList) => {
          this.groupedGroceryList = groupedGroceryList;
          this.groupNames = Object.keys(groupedGroceryList);

          this.styles.loadingScreen = { display: 'none' };
        });
    },
  },
};
