

const makeRequest = (method, url, data) => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.onload = () => {
        let data = xhr.response;
        console.log(xhr.status)
        console.log(JSON.parse(data))
    }

     xhr.onerror = () => {
        console.log('error is here');
     }

    xhr.send(JSON.stringify(data));
    });
}



const getData = () => {
   makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
   .then((res) => console.log(res))
}

getData();

const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title : 'foo',
        body : 'bar',
        userId : 1,
    });
 }

 sendData();

 const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id : 1,
        title : 'fooMA',
        body : 'barMA',
        userId : 1,
    });
 }

 updateData();

 const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title : 'This is changed',
    });
 }

 updateSingleData();

 const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts', {
        
    });
 }

deleteData();
