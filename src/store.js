const items = [];
let hideCheckeditems = false;

//const callError = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

function addItem(item) {
  this.items.push(item)
};

/*const findAndToggleChecked = function (id) {
  const currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
};

const findAndUpdateName = function (id, name) {
  try {
    item.validateName(name);
    const currentItem = this.findById(id);
    currentItem.name = name;
  } catch (e) {
    console.log('Cannot update name: ' + e.message);
  }
};
*/

function findAndUpdate(id, newData) {
  let currentItem = this.findById(id);
  Object.assign(currentItem, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};



export default {
  items,
  hideCheckeditems,
  //callError,
  findById,
  addItem,
  //findAndToggleChecked,
  //findAndUpdateName,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};