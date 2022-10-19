'use strict';
const container = document.querySelector('#tasks__list');
const input = document.querySelector('#task__input');
const form = document.querySelector('#tasks__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //match(/^[ ]+$/) метод проверяет, если в тексте одни пробелы
    if (!input.value || input.value.match(/^[ ]+$/)) {
        return false;
    } 

    const div = document.createElement('div')
    div.innerHTML = renderTemplateToDo(input.value)
    container.append(div)
    input.value = ' '
})

container.addEventListener('click', (e) => {
    if (e.target.className === 'task__remove') {
        e.target.closest('div.task').parentElement.remove();
    }
})

function renderTemplateToDo(data) {
    return `<div class="task">
   <div class="task__title">
     ${data}
   </div>
   <a href="#" class="task__remove">&times;</a> </div>`
}