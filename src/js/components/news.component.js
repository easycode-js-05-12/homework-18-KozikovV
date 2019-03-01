import { NewsService } from '../services/news.service';
import { AuthService } from '../services/auth.service';

export class NewsComponent {
    constructor() {
        this._newsServise =  new NewsService();
        this._authService = new AuthService();
        
        this._newsView
        this._news;
    }

    async beforeRender() {
        this._news = await this._newsServise.getNews(this._authService.token);
        this._newsView = this._news.map((news) => this._createNewsView(news));
    }

    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style()}
            </style>
            ${this._newsView.join('')}
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
                overflow: hidden;

            }
            .main-image {
                overflow: hidden;
            }
            .col-4 {
                padding: 0;
            }

            .col-8 {
                padding: 25px;
                overflow: hidden;
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

    _createNewsView(news) {
        return `
        <div class="news__item p-4 d-flex align-items-center mb-3">
                <div class="col-4">
                    <div class="news__content d-flex flex-column justify-content-center align-items-center">
                        <div class="news__title">
                            <div class="news__user">
                                <img src="${news.owner.avatar}" alt="avatar">
                            </div>
                            <h5 class="card-title">${news.owner.full_name}</h5>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <p class="card-text">Uploaded ${news.pictures.length} photos</p>
                            <p>${this._calcDay(news.date)}</p>
                            <button href="#" class="btn btn-bg-light align-self-center btn-border-gradient" style="color: #fff;
                            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%)">Follow</button>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="main-image">
                        <img src="${news.pictures[0].url}" alt="Uploaded image">
                    </div>
                </div>
            </div>
        `;
    }

}