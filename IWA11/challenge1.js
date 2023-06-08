// script.js

const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 =document.querySelector('.biscuits .count');
const donuts1 = document.querySelector('.donuts .count');
const pancakes1 = document.querySelector('.pancakes .count');
const status1 = document.querySelector('.status dd');


donuts1.textContent  = order1.getAttribute('data-donuts');
pancakes1.textContent = order1.getAttribute('data-pancakes');
status1.textContent =  order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const order2 = document.querySelector('[data-key= "order2"]');
const biscuits2 = document.querySelector('.biscuits .count');
const donuts2 = document.querySelector('.donuts .count');
const pancakes2 = document.querySelector('.pancakes .count');
const status2 = document.querySelector('.status dd')


biscuits2.textContent = order2.getAttribute('data-biscuits');
donuts2.textContent = order2.getAttribute('data-donuts');
pancakes2.textContent =order2.getAttribute('data-pancakes');
status2.textContent = order2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const order3 = document.querySelector('[data-key= "order3"]');
const biscuits3 = document.querySelector('.biscuits .count');
const donuts3 = document.querySelector('.donuts .count');
const pancakes3 = document.querySelector('.pancakes .count');
const status3 = document.querySelector('.status dd');

biscuits3.textContent = order3.getAttribute('data-biscuits');
donuts3.textContent = order3.getAttribute('data-donuts');
pancakes3.textContent = order3.getAttribute('data-pancakes');
status3.textContent = order3.getAttribute('data-delivered') === 'false' ? 'Delivered' : 'Pending';