/*
const resp = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp) // Promise {<pending>}
*/

/*
const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp) // Response
*/

/*
async function pedirPosts() { 
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(resp) // Response
}
pedirPosts();
*/

/*
// o bien
const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(resp) // Response
}
pedirPosts();
*/