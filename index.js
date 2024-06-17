let numbers = [0, 10, 5, 27, 3, 10, 12]

numbers.sort();
console.log(numbers);

let products = [
    {name:"shoe", price:15},
    {name:"shirt", price:3},
    {name:"pants", price:10},
    {name:"bag", price:6}
]

products.sort((a,b) => {
    if(a.price > b.price) {
        return 1;
    } else if (a.price < b.price) {
        return -1;
    } else {
        return 0;
    }
});

console.log(products);