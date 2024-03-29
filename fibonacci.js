function fib(n) {
    if (n == 0||n == 1) {
      return BigInt(n);
    } else if (n >= 2 && n % 2 == 0) {
      let k = n / 2;
      let fk = fib(k);
      return (2n * fib(k-1) + fk) * fk;
    } else if (n >= 2) {
      let k = (n + 1) / 2;
      let fk1 = fib(k - 1);
      let fk2 = fib(k);
      return fk2*fk2 + fk1*fk1;
    } else {
      a = 0n;
      b = 1n;
      for (let i = 0; i > n; i--) {
        [a, b] = [b - a, a];
      }
      return a;
    }
}

let start = 1000000;
let how_many = 1;
for (let i = start; i < start + how_many ; i++) {
    console.log(fib(i));
}

var assert = require('assert');
assert.equal( fib(0), 0n );
assert.equal( fib(1), 1n );
assert.equal( fib(2), 1n );
assert.equal( fib(3), 2n );
assert.equal( fib(4), 3n );
assert.equal( fib(5), 5n );
assert.equal( fib(-6), -8n );
