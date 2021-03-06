import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

import api from './api';

import store from './store';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      console.log (item.id);
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
  
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();

  const item = store.items[0];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'barbaz' });
  console.log('new name: ' + item.name);
  });

  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
