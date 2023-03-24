//creating 3 arrays with different contents//


let item_names = [`Toque`, `Pants`, `Coat`];
let item_prices = [20, 30, 25];
let in_stock = [true, true, false];

//these commands insert the written content into the array assuming the last position//

item_names.push(`T-Shirt`);
item_prices.push(15);
in_stock.push(false);

//this picks the first items in the item_names and item_prices arrays//

let first_item_name = item_names[0];
let first_item_price = item_prices[0];

//the pop variable removes what was added with the push command//

let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();


