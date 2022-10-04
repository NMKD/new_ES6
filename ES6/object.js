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
const first = {a: 1}
const second = {a: 2}

// Сравнение на эквивалентость
// console.log(Object.is('20', '20'))

// Объединяет
// console.log(Object.assign(first, second))
// console.log(Object.assign({}, first, second))
// console.log(Object.assign({}, first, {
//     c: 2,
//     d: 3
// }))
// console.log(first)
// console.log(second)

// ассоциативные массивы
const obj = Object.assign({}, first, {
        c: 2,
        d: 3
    })
console.log(Object.entries(obj)) // двухмерный массив 
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(`Ключи объекта obj: ${Object.keys(obj)}, Значения: ${Object.values(obj)}`)