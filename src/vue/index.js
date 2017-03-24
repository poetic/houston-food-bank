import $ from 'jquery';
import Vue from 'vue';

import data from './data';
import computed from './computed';
import methods from './methods';
import fetchGroceryList from '../modules/fetchGroceryList';

const IDEAL_LOADING_TIME = 2000;

/* eslint-disable no-new */
new Vue({
  data,
  computed,
  methods,
  el: '#v-app',
  mounted() {
    const startFetch = new Date();

    fetchGroceryList()
      .then((groupedGroceryList = {}) => {
        const endFetch = new Date();
        const timeElapsed = (endFetch.getTime() - startFetch.getTime());

        const loadingTimeLeft = IDEAL_LOADING_TIME - timeElapsed;

        setTimeout(() => {
          this.groupedGroceryList = groupedGroceryList;
          this.groupNames = Object.keys(groupedGroceryList);

          $('.loading-screen').hide();
        }, loadingTimeLeft);
      });
  },
});
