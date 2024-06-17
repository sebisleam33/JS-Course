// let elements = [0, 20, 15, 35, 23, 66, 44]

// let even_numbers = elements.filter(number => {
//     return number % 2 == 0;
// });

let numbers = [
    {numbers: 12, type: "even"},
    {numbers: 6, type: "even"},
    {numbers: 0, type: "even"},
    {numbers: 2, type: "even"},
    {numbers: 5, type: "odd"},
    {numbers: 27, type: "odd"},
    {numbers: 59, type: "odd"}
]

let even_numbers = numbers.filter(number => number.type == "even");

console.log(elements);