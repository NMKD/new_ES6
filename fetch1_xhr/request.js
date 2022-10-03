const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequestXhr(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Content-Type", "aplication/json");
        xhr.onload = () => {
            xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    })
}

// sendRequestXhr("GET", requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const body = {
//     name: "Kristina",
//     age: "33",
// };

// sendRequestXhr("POST", requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))