// создавать уникальные ключи

const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)
// console.log(symbol === other)

const obj = {
    name: 'Elena',
    [symbol]: 'meta'
}
// console.log(obj)
// console.log(obj[symbol])
// console.log(obj[other])

for (let key in obj) {
    console.log(key)
}

console.log(typeof symbol)