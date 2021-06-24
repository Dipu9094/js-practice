console.log("Learning promise");

const promise1 = new Promise((resolve, reject) => {
  let completePromise = false;
  if (completePromise) {
    resolve("Promise one is completed.");
  } else {
    reject("Promise one is rejected");
  }
});

promise1
  .then((r) => {
    console.log(r);
  })

  .catch((c) => {
    console.log(c);
  });

console.log("Learning promise end");

/////////////******************************************** */

//ank gula promise thakle

const promise4 = new Promise((resolve, reject) => {
  let completePromise = false;
  if (completePromise) {
    resolve("Promise one is completed.");
  } else {
    reject("Promise four is rejected");
  }
});
const promise2 = new Promise((resolve, reject) => {
  let completePromise = true;
  if (completePromise) {
    resolve("Promise two is completed.");
  } else {
    reject("Promise two is rejected");
  }
});
const promise3 = new Promise((resolve, reject) => {
  let completePromise = true;
  if (completePromise) {
    resolve("Promise three is completed.");
  } else {
    reject("Promise three is rejected");
  }
});

Promise.all([promise4, promise2, promise3])
  .then((res) => console.log(res))

  .catch((err) => {
    console.log(err);
  });
