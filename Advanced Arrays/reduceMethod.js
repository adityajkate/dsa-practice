let numbers = [88, 50, 25, 10];

let sub = numbers.reduce(geeks);

function geeks(total, num) {
    return total - num;
}
