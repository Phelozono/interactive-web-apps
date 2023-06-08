const firstName = 'John';
const age = 35;
const hobby = 'Coding';

function logtwice(parameter) {
    console.log(parameter);
    console.log(parameter);
}

 function codeHobby(){logtwice
   (`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

codeHobby();


