import './modules/filters';

import tracker from './components/tracker';
import groceryListTabs from './components/grocery-list-tabs';
import groceryListTabsContent from './components/grocery-list-tabs-content';
import cart from './components/cart';
import emptyCartModal from './components/empty-cart-modal';
import instantiate from './modules/instantiate';

instantiate([
  tracker,
  groceryListTabs,
  groceryListTabsContent,
  cart,
  emptyCartModal,
]);
