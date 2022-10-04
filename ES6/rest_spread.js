// REST

function average() {
    return Array.from(arguments).reduce((sum, prev) => {
        return (sum + prev) / arguments.length
    })
}

// console.log(average(10,20,30,40)) 
// если мы вводим через запятую переменные, то получаем псевдо массив arguments

function averageNew(arr) {
    return arr.reduce((sum, prev) => {
        return (sum + prev) / arr.length
    })
}

// console.log(averageNew([10,20,30,10]))

//если мы не значем сколько параметров нам поступить в функцию, то вводим три точки "..."

function averageNewRest(a = 100, b = 200, ...args) {
    return args.reduce((sum, prev) => {
        return (sum + prev) / args.length
    })
}

// console.log(averageNewRest(10, 20, 30, 10, 20, 100))

//Spread 
// const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.min(...array));

// клонирование массива
// const fib = [...array]
// console.log(fib)

// Destructuring
// const [a, b, ...c] = array
// console.log(c)

// Object
const adress = {
    country: 'Russia',
    city: 'Moscow',
    street: 'Lenina',
    concat: function () {
        return `${this.country}, city:${this.city}, street:${this.street}`
    }
}

// const { city, country, street, concat } = adress
// console.log(`${country}, city:${city}, street:${street}`);
// console.log(street)
// console.log(concat.call(adress))

// const {city, ...rest} = adress
// console.log(city)
// console.log(rest)

// const adress2 = [{
//     country: 'Russia',
//     city: 'Moscow',
//     street: 'Lenina',
//     concat: function () {
//         return `${this.country}, city:${this.city}, street:${this.street}`
//     },
// },
// {
//     country: 'Russia',
//     city: 'Pushkino',
//     street: 'Lenina',
//     concat: function () {
//         return `${this.country}, city:${this.city}, street:${this.street}`
//     },
// }
// ]
// const {...rest} = adress2
// const { city, country, street, concat } = adress2[1]
// console.log(rest)

// делаю копию объекта и меняю свойства
const newAddress = {...adress, street: 'Tverskaya', indexCode: '123456'}
console.log(newAddress)

