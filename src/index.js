const randomNunber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

const gsd = (a, b) => {
    if (!b) {
        return a;
    }

    return gsd(b, a % b);
}

export { randomNunber, gsd };