import Vue from 'vue';
import numeral from 'numeral';

/* eslint-disable prefer-arrow-callback */
Vue.filter('currency', amount => numeral(amount).format('$0,0[.]00'));
