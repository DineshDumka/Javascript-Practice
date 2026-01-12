// async function main() {
//   //  const x = await f();
//   console.log(555555555);
// }

// console.log(main());

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function printLate(time) {
//   await wait(time);
//   console.log("hello");
//   console.log("after");
// }

// printLate(10000);

// 1. Promise that resolves after 1 sec with "done"

const resolve_after_one_sec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`\ndone\n`);
      resolve();
    }, 1000);
  });
};

// 2. async function awaiting it
async function f() {
  await resolve_after_one_sec();
  console.log(`async function was waiting for 1 sec\n`);
}

f();
// 3. Promise that rejects → handle with try/catch

// 4. Two async functions running sequentially

// 5. Same two functions in parallel

// 6. Simulate DB call returning object

// 7. Simulate API call returning array

// 8. Chain async functions

// 9. Return value from async function

// 10. Understand output order (print logs before & after await)
