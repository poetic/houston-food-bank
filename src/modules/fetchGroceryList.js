import $ from 'jquery';

import formatGroceryList from './formatGroceryList';

const GROCERY_LIST_URL = 'https://spreadsheets.google.com/feeds/list/1A4PjmL_R3Zn9T85feCy3YnGyQ5rLGxzmsDeKUc-IsPk/od6/public/values?alt=json';

const fetchGroceryList = () => (
  $.getJSON(GROCERY_LIST_URL)
    .then(formatGroceryList)
);

export default fetchGroceryList;
