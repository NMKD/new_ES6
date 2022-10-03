console.log('Request data...');

// setTimeout(() => {
//     console.log('Request data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status_: 'working',
//     }

//     setTimeout(() => {
//         backendData.modified = true,
//             console.log('Data received', backendData);
//     }, 2000)

// }, 2000)

const s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status_: 'working',
        }
        resolve(backendData);
    }, 2000)
});

s.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000)
    })
})
    .then(clientData => {
        console.log('Data received', clientData);
        return clientData.fromPromise = true;
    })
    .catch(err => console.log('Error: ', err))