import { decimal, currency, toggle } from './shared';
import { isCurrent, selectTab } from './grocery-list-tabs';
import { isActive, removeItem, addItem } from './grocery-list-tabs-content';
import removeAllOfItem from './cart';
import emptyCart from './empty-cart-modal';

export default {
  decimal,
  currency,
  toggle,
  isCurrent,
  selectTab,
  isActive,
  removeItem,
  addItem,
  removeAllOfItem,
  emptyCart,
};
