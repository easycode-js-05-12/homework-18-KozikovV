export class Http {

    post(url, data, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }

    get(url, options) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }

    getNews(url, token) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: {
                    'x-access-token': `${token}`
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        })
    }

}
