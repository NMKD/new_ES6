const array = [10, 20, 30, 40]
const str = 'string'

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

const iter = array[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

const iterStr = str[Symbol.iterator]()
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())

// for (let item of str) {
//    console.log(item)
// }

// for (let item of array) {
//     console.log(item)
//  }

const country = {
    values: ['ru', 'kz', 'ua', 'by'],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const value = this.values[i]
                i++
                return {
                    done: i > this.values.length,
                    value
                }
            }
        }
    }
}

for (let item of country) {
        console.log(item)
 }

     console.log(country[Symbol.iterator]().next())