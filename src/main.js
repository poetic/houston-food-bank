import Vue from 'vue';

import './modules/remove-webflow';
import './modules/filters';

import data from './data';
import methods from './methods';
import fetchGroceryList from './modules/fetchGroceryList';

/* eslint-disable no-new */
new Vue({
  data,
  methods,
  el: '#v-app',
  mounted() {
    fetchGroceryList()
      .then((groupedGroceryList) => {
        this.groupedGroceryList = groupedGroceryList;
        this.groupNames = Object.keys(groupedGroceryList);

        this.styles.loadingScreen = { display: 'none' };
      });
  },
});
