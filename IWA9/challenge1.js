const salary = 4000;
const lodging = 'apartment';
const size = 'large';

// Only change the syntax below (not the values or key names)
const expenses = {
  food: 51.7501,
  transport: 10.2,
  [lodging + size]: rent[lodging + '-' + size],
};

const tax = {
  734: '3%',
  234: '20%',
  913: '12%',
  415: '38%',
  502: '42%',
};

const rent = {
    none: 0,
    smallRoom: 200,
    largeRoom: 300,
    smallApartment: 400,
    largeApartment: 800,
    smallHouse: 1200,
    largeHouse: 2400,
};

const taxAsDecimal = tax[913].slice(0, -1) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal);
const taxableAmount = startingAfterTax - expenses[lodging + size];
const balance = expenses.transport - expenses.food - expenses[lodging + size];

console.log(balance.toFixed(2));