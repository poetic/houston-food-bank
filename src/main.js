import './modules/remove-webflow';
import './modules/filters';

import loading from './components/loading';
import emptyCartModal from './components/empty-cart-modal';
import overBudgetModal from './components/over-budget-modal';
import tracker from './components/tracker';
import groceryListTabs from './components/grocery-list-tabs';
import groceryListTabsContent from './components/grocery-list-tabs-content';
import cart from './components/cart';
import instantiate from './modules/instantiate';

instantiate([
  tracker,
  groceryListTabs,
  groceryListTabsContent,
  cart,
  emptyCartModal,
  overBudgetModal,
  loading,
]);
