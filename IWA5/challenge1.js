
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 0;
let batteries = 35 * 2;
let pens = 5 * 0;

let subtotal = shoes + toys + shirts + batteries + pens;
let shippingCost = null;
let currency = 'R';

if (subtotal > 1000) {
    if (location === 'NAM' && customers < 2) {
        if (location === 'RSA') {
            shippingCost = 600 || calcShipping;
        }
    }
    if (shippingCost === 400 && customers !== 1) {
        console.log(FREE_WARNING);
    }
} else {
    if (location === 'NAM') {
        shippingCost = 600;
    } else {
        shippingCost = 800;
    }
}

if (location === 'NK' ){ console.log(BANNED_WARNING); 
 }

let totalCost = subtotal + shippingCost;

console.log('Total cost: ' + currency + totalCost);