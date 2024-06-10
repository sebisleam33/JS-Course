// let element = document.querySelector('b#this_is_id')
// let element = document.querySelector('div').querySelector('.para')
let elements = document.querySelectorAll('p')

console.log('element: ', elements)

elements.forEach(element => {
    console.log(element)
})