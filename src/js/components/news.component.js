import { NewsService } from '../services/news.service';
import { AuthService } from '../services/auth.service';

export class NewsComponent {
    constructor() {
        this._newsServise =  new NewsService();
        this._authService = new AuthService();
        
        
        this._news;
    }

    async beforeRender() {
        this._news = await this._newsServise.getNews(this._authService.token);
    }

    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style()}
            </style>
            <div class="news__item p-4 d-flex align-items-center">
                <div class="col-4">
                    <div class="news__content d-flex flex-column justify-content-center align-items-center">
                        <div class="news__title">
                            <div class="news__user">
                                <img src="${this._news[0].owner.avatar}" alt="avatar">
                            </div>
                            <h5 class="card-title">${this._news[0].owner.full_name}</h5>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <p class="card-text">Uploaded ${this._news[0].pictures.length} photos</p>
                            <p>${this._calcDay(this._news[0].date)}</p>
                            <button href="#" class="btn btn-bg-light align-self-center btn-border-gradient" style="color: #fff;
                            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%)">Follow</button>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <img src="${this._news[0].pictures[0].url}" class="" alt="Uploaded image">
                </div>
            </div>
        `;
    }

    style() {
        return `
            .card-body {
                text-aling: center;
            }
            .card-text:after {
                display: block;
                content: '';
                width: 5px;
                height: 5px;
                background-color: red;
                border-radius: 50%;
                text-align: center;
                margin: 10px auto;
            }
            img {
                width: 100%;
                height: auto;
            }
            .news__item {
                max-width: 930px;
                margin: 0 auto;
                background-color: grey;
                height: 368px;
            }
            .col-4 {
                padding: 0;
            }
            .news__user {
                border-radius: 50%;
                overflow: hidden;
                width: 120px;
                heirht: 120px;
                display: inline-block;
            }
            .news__title {
                text-align: center;
            }
        `;
    }

    afterRender() {

    }

    _calcDay(date) {
        let start = new Date();
        let end = new Date(date);

        let dayAgo = Math.floor((start - end) / (1000 * 60 * 60 * 24))

        return dayAgo > 0 ? `a ${dayAgo} day ago` : 'today';
    }


}