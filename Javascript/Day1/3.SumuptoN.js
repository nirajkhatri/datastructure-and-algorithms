//Sum up to N

function sumupton(n) {
  //Initializing the sum to 0
  let sum = 0;

  //looping from 0 upto n
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  //returning the sum
  return sum;
}

// let t1 = performance.now();
// console.log(sumupton(1));
// let t2 = performance.now();

// console.log(`Estimated time : ${t2 - t1}/1000 seconds`);

//optimized code
function optimizedAddton(n) {
  return n * n + 1 / 2;
}

// let t3 = performance.now();
// console.log(optimizedAddton(1));
// let t4 = performance.now();

// console.log(`Estimated time : ${t4 - t3}/1000 seconds`);
