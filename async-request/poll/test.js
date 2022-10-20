'use strict';
const title = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');
const url = new URL('https://netology-slow-rest.herokuapp.com/poll.php')
let data

const getData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = "json"
    xhr.send()
    
    xhr.onload = () => {
        if (xhr.status === 200) {
            data = xhr.response
            console.log(data)
            title.textContent = data.data.title
            data.data.answers.forEach(element => {
                
            answers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">
            ${element}
             </button>`)
            });
        }
    }
    
    xhr.onprogress = (e) => {
        e.lengthComputable ? console.log(e.loaded, e.total) : console.log("Загрузилось байт:", e.loaded)
    }
    
    xhr.onerror = function () {
        console.log("Запрос не удался");
    };
}

window.addEventListener('onload', getData())

answers.addEventListener('click', (event) => {
    if (event.target.className === 'poll__answer') {
        alert('спасибо, Ваш голос засчитан!');
        answers.innerHTML = ''
        getData()
    }
});
