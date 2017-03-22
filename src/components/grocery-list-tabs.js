import store from '../modules/store';

export default {
  el: '#v-grocery-list-tabs',
  data: store,
  methods: {
    isCurrent(groupIndex) {
      return groupIndex === this.currentTab ? 'w--current' : '';
    },
    selectTab(groupIndex) {
      this.currentTab = groupIndex;
      this.activeContent = groupIndex;
    },
  },
};
