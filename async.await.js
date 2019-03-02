async function myAsync() {
    return 1 + 2;
}

myAsync().then((res) => console.log(res));

const myAsync2 = async () => {};

class A {
    async myAsyncMethod() {
        // 
    }
}



async function myAsyncPromis() {
    return new Promise((resolve, reject) => {
        resolve();
    })
}

async function myAsync3() {
    try {
        return a + b
    } catch(e) {
        return e;
    }
}

// myAsync3()

const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        if (response.status === 404) {
            throw 'Not Found';
        }
        return data;
    } catch (err) {
        return err;
    }
}

const renderPosts = async () => {
    const posts = await getPosts();

}

// getPosts()
//     .then((posts) => console.log(posts))
//     .catch((err) => console.log(err));