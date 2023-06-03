const nickname= "Timmy";
const firstname = "Timothy";

if (nickname && firstname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (nickname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning, ${firstname}!`);
} else {
  console.log("Good Morning!");
}

