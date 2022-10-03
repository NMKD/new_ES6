const title = 'Title';
const isVisible = () => Math.random() > 0.5
const html = `
${isVisible() ? '<p>Visible</p>' : ''}
<h1 id="1" style="color: red">${title}/h1>
`
// console.log(html)

const str = 'Hello';
// методы 
//startsWith - начинается строка с буквы
//endsWith - заканчивается строка с буквы
console.log(str.startsWith('H')) 
console.log(str.startsWith('E'))
console.log(str.endsWith('E'))
console.log(str.endsWith('o'))
// включает в себя исходная строка подстроку
console.log(str.includes('lo'))

console.log(str.repeat(3))
// удалить пробелы с конца и с начала строки
console.log(str.trim())
// console.log(str.trimEnd())
// console.log(str.trimStart())
// добавляет пробелы в начале строки
console.log(str.padStart(10, '12345'))