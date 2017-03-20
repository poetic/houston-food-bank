import Vue from 'vue';

/* eslint-disable no-new */
const instantiate = (vues) => {
  vues.forEach((vue) => {
    new Vue(vue);
  });
};

export default instantiate;
