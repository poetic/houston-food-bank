import Vue from 'vue';
import $ from 'jquery';

import './startup';

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
        setTimeout(() => {
          this.groupedGroceryList = groupedGroceryList;
          this.groupNames = Object.keys(groupedGroceryList);

          $('.loading-screen').hide();
        }, 1500);
      });
  },
});
