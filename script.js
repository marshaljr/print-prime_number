let myFunction = (check) => {
  if (check <= 1) {
    return false;
  }

  for (let i = 2; i <= check / 2; i++) {
    if (check % i == 0) {
      return false;
    }
  }
  return true;
};

let primes = [];
for (i = 1; i <= 100; i++) {
  if (myFunction(i)) {
    primes.push(i);
  }
}
console.log(primes);
