class Animal {

    static type = `Animal` // использовать можем только обратившись к классу

    constructor(options) {
       this.name = options.name
       this.age = options.age
       this.hasTail = options.hasTail
    }

    voice() {
        console.log('myau')
    }
}

const animal = new Animal({
    name: `Cat`,
    age: 6,
    hasTail: true
})
// 
// animal.voice()

class Cat extends Animal {
   constructor(options) {
    super(options) // чтобы дополнять дочерний элемент родительского класса, 
    // вызываем конструктор род.класса Animal
    this.color = options.color
   }

   voice() {
    super.voice()
    // console.log('MAUUUuuuu')
   }

   get ageInfo() {
    return this.age * 3
   }
   
   set ageInfo(newAge) {
     this.age = newAge
   }
}

const cat = new Cat({
    name: `Vasya`,
    age: 3,
    hasTail: true,
    color: "white"
})

// cat.voice()
// console.log(cat.ageInfo)
// animal.voice()
// cat.ageInfo = 7
// console.log(cat.ageInfo)

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide () {
       this.$el.style.display = 'none'
    }

    show() {
       this.$el.style.display = 'none'
    }
}

class Box extends Component {
    constructor(options) {
       super(options.lala)
       this.$el.style.width = this.$el.style.height = options.size + 'px'
       this.$el.style.background = options.color
    }
}

const box1 = new Box({
    lala: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    lala: '#box2',
    size: 100,
    color: 'blue'
})