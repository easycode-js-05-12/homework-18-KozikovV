import { Http } from '../core/http.service';
import { ENV } from '../config/env';

export class NewsService {
    getNews(token) {
        
        const http = new Http();
        return new Promise((resolve, reject) => {
            http.getNews(`${ENV.apiUrl}/public/news`, token)
            .then((response) => resolve(response.news))
            .catch((error) => reject(error));
        });
    }
}