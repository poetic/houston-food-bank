export const isCurrent = function (groupIndex) {
  return groupIndex === this.currentTab ? 'w--current' : '';
};

export const selectTab = function (groupIndex) {
  this.currentTab = groupIndex;
  this.activeContent = groupIndex;
};
