const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const name = prompt('enter a name of an item, we will try and find it', 'enter item here')

const found = items.find(item => item.name === name);
if(found){
  console.log('we found it');
  console.log(found);
}
else {
  console.log('we could not find an item with the name ${name}');
}

const getItemNames = (arr)=> {
  const names = [];
  arr.forEach((item)=> {
    names.push(item.name);
  });
  return names;
};

const getItemPrices = (arr)=> {
  const prices = [];
  arr.forEach((item)=> {
    prices.push(item.price);
  });
  return prices;
};

const findItemById = prompt('choose a category id and we will display the prices for that id', 'id');

const mappedValues = items.map(item => item[findItemById]);


/*const search = prompt('enter a string, we will see the items which have that string in their name', 'b a');

const foundItems = items.filter(item => item.name.indexOf(search) !== -1);
console.log(foundItems);*/




  //write the following functions and test them
  
  console.log(getItemNames(items));//returns an array of the names of the items
  console.log(getItemPrices(items));//returns an array of prices
  console.log(findItemById(2, items));//returns an item by it's id
  //console.log(mostExpensiveItem(items));//returns the most expensive item 
  //console.log(leastExpensiveItem(items));//returns the least expensive item 
  //console.log(calculateInventory(items));//returns the total value of the inventory 