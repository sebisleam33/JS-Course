let numbers = [0, 10, 5, 27, 3, 10, 12]

let sq_numbers = numbers.map(number => number * number);

// console.log(sq_numbers, numbers);

let numbers_pair = [
    {number: 12, type: "square"},
    {number: 0, type: "cube"},
    {number: 6, type: "square"},
    {number: 22, type: "square"},
    {number: 59, type: "cube"}
]

let processed_numbers = numbers_pair.map(number => {
    if(number.type == "square") {
        return number.number * number.number;
    } else {
        return number.number * number.number *number.number;
    }
});

console.log(processed_numbers, numbers_pair);
