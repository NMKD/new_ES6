class Person {
    //переменные
   type = 'human'

    constructor(name) {
       this.name = name
    }
    greet() {
        console.log(this.name + ' говорит, привет!')
    }
}

const max = new Person('Max')
// max.greet()
// console.log(max)

// наследование 
class Programmer extends Person {
    constructor(name, job) {
        super(name)
        // для использования get&set стваим нижнее подчеркивание
        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if (job.length < 2) {
            throw new Error('Validation failed')
        }
        this._job = job
    }
}

const frontEnd = new Programmer('Liza', 'Front-end')
// console.log(frontEnd.job)
// frontEnd.greet()
frontEnd.job = 'Php'
// console.log(frontEnd.job)

// без static
// class Util {
//     average(...arg) {
//         return arg.reduce((acc, i) => acc += i, 0) / arg.length
//     }
// }

// Добавляем static и можно теперь вызывать метод сразу обращаясь к классу
class Util {
  static average(...arg) {
        return arg.reduce((acc, i) => acc += i, 0) / arg.length
    }
}

const result = Util.average(1, 1, 2, 3, 4, 5, 8, 13)
console.log(result)

const util = new Util()
// console.log(util.average(1, 1, 2, 3, 4, 5, 8, 13))
