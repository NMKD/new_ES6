//лямда функция
const sum = (a,b) => a + b;
const cube = a => a**3;

const arr = () => {
    return  [1,2,3,4,5].reduce((prev, next) => {
        return  prev + next;
    })
} 

// console.log(arr())
// console.log(cube(4))
// console.log(sum(1,2))

// setTimeout(() => console.log('hi') , 1000);

//context
function log() {
    return console.log(this);
 }

const arrowLog = () => console.log(this);

const person = {
    name: 'Lena',
    age : 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        setTimeout(() => {
            console.log(this.name + ' ' + this.age)
        }, 500)
    }
}
// person.log()
// person.arrowLog()
// person.delayLog()

