/* eslint-disable no-param-reassign */

const emptyCart = function () {
  this.selectedItems().forEach((item) => {
    item.quantity = 0;
  });

  this.toggle('emptyCartModal');
};

export default emptyCart;
