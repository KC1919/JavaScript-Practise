const getAllUsers = async () => {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
        let jsonData=await data.json();
        console.log(jsonData);
    } catch (error) {
        console.log('Failed to fetch users!');
    }
}

getAllUsers();