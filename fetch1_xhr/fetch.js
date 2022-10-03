const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequestXhr(method, url, data = null) {
    const headers = {
        "Content-Type": "aplication/json",
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: headers,
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error(error);
            e.data = error;
            throw e;
        })

    })
}


// sendRequestXhr("GET", requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const users = {
    name: "Kristina",
    age: "33",
};

// sendRequestXhr("POST", requestUrl, users)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))