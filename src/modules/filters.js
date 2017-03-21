import Vue from 'vue';
import numeral from 'numeral';

Vue.filter('decimal', number => numeral(number).format('0,0[.]00'));
Vue.filter('currency', number => numeral(number).format('$0,0[.]00'));
