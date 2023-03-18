let item_names = [`Toque`, `Pants`, `Coat`];
let item_prices = [20, 30, 25];
let in_stock = [true, true, false];


item_names.push(`T-Shirt`);
item_prices.push(15);
in_stock.push(false);


let first_item_name = item_names[0];
let first_item_price = item_prices[0];

let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();


