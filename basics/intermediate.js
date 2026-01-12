//1. Loop through array of objects and print property

// const users = [
//   { name: "aa", age: 1 },
//   { name: "bb", age: 2 },
// ];
// for (const user of users) {
//   console.log(`${user.name} , ${user.age}\n`);
// }

//2. Function returning object

// function user(name, age) {
//   return { name: name, age: age };
// }
// const ans = user("dinesh", 22);
// console.log(ans);

//3. Arrow function checking eligibility

// const check = (age) => age > 18;
// console.log(check(50));

//4. If user exists → print else error

// const users = ["dinesh", "xyz"];
// const check = (name) => {
//   let found = false;
//   for (const user of users) {
//     if (user == name) {
//       found = true;
//       break;
//     }
//   }
//   if (found) {
//     console.log(name);
//   } else console.log("error");
// };
// check("dinesh1");

//5. Add element to array using function

// let arr = [];

// const addToArray = (val) => {
//   arr.push(val);
//   console.log(arr);
// };
// addToArray(5);

//6. Nested object access

// const users = {
//   address: {
//     country: {
//       state: "uttrakhand",
//     },
//   },
// };
// console.log(users.address.country.state);

//7. Simple async function with setTimeout

// async function printLate(time) {
//   await setTimeout(() => {
//     console.log("hello");
//   }, time);
//   console.log("after");
// }
// printLate(2000);
// console.log("\nend");
