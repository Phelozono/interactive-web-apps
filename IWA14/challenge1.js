const firstName = 'John';
const age = 35;
const hobby = 'Coding';

function logTwice(parameter) {
  console.log(parameter);
  console.log(parameter);
}

function codehobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

codehobby();


