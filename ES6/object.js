const cityField = 'city'
const job = 'Front-end'

const person = {
    age: 26,
    name: 'Lacky',
    job,
    [cityField]: 'Sankt-Piterburg',
    'country-live': 'Russia',
    printNow: () => 'Rus',
    toString() {
        return Object.keys(this)
        .filter(key => key !== 'toString')
        .map(key => this[key])
        .join(' ')
    }
}

// console.log(person.toString())

// Перезаписывает
// const first = {a: 1}
// const second = {a: 2}

// console.log(Object.assign(first, second))
// console.log(first)

// Объединяет
const first = {a: 1}
const second = {b: 2}

console.log(Object.assign(first, second))
console.log(first)
console.log(second)