const randomNunber = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

const gsd = (a, b) => {
  if (!b) {
    return a;
  }

  return gsd(b, a % b);
};

const isPrime = (num) => {
  if (num === 1) {
    return true;
  }

  for (let i = 2; i < num / 2; i+=1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export { randomNunber, gsd, isPrime };
