
// Creating the Promise

const promiseOne = new Promise((resolve, reject) => {
    let data = fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })

    if (data) {
        resolve(data)
    } else {
        reject('Failed to fetch data!')
    }
})

// Consuming the Promise

// promiseOne.then(data => {
//     let myData = data.json();
//     console.log(myData);
//     return myData
// }).catch((err) => {
//     console.log('Error', err);
// })

// Consuming Promise with Callback Chaining

promiseOne
    .then(data => {
        let myData = data.json();
        console.log(myData);
        return myData
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log('Error', err);
    })

/*
Promises are used to deal with asynchronous tasks, example, fetching data from a database
or making an external API request, or any heavy capu based task like cryptography or
reading or writing a file.

-It works like we have to suppose make a request to the Database, so we write the code
for that in a Promise and we return it.

-So Promise takes a callback with resolve and reject parameters.

-So the Promise is either resolved or rejected, so if the request was successful
so we resolve it else we reject it.

-Suppose the data was successfully fetched from the database, this request was being processed
in the background asynchronously, so when the request was complete, according the the
condition we either resolve it or reject it.

-So we consume the promise by chaining it with .then and .catch.

- .then is used to handle resolve state and .catch is used to handle reject state

-we can receive data in .then by passing it in resolve callback.
-we can receive error in .catch by passing it in reject callback.

-An alternate to promises came in picture the concept of async and await with try and catch
block to handle errors.

*/