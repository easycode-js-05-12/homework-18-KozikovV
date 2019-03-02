import { HomeService } from '../services/home.service';

export class HomeComponent {
    constructor() {
        this._homeService = new HomeService();

        this._homeData;
    }
    async beforeRender() {
        this._homeData = await this._homeService.getHomeData();
    }

    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style()}
            </style>
            <div class="banner">
                <div class="banner__text d-flex flex-column justify-content-center align-items-center">
                    <p>${this._homeData.innerText}</p>
                </div>
            </div>
            <div class="info d-flex flex-column justify-content-center align-items-center">
                <div class="info__statistic">
                    <span>${this._homeData.cities} Cities</span>
                    <span>${this._homeData.countries} Countries</span>
                    <span>In ${this._homeData.regions} Regions In The World</span>
                </div>
                <p class="info__commertial">You can be one of the winners and we will introduce you to the world</p>
            </div>
        `;
    }

    style() {
        return `
            .banner {
                min-height: 698px;
                background-image: url(https://s3-us-west-1.amazonaws.com/mostlikedpersonstore/home-images/coverImg-1548345013745.jpg);
                background-position: center center;
                background-size: cover;
                padding: 0 86px;
                position: relative;
            }
            .banner__text{
                height: 100%;
                background-color: rgba(0,0,0,.65);
                color: #fff;
                position: absolute;
                top: 0;
                bottom: 0;
                max-width: 498px;
                padding: 0 25px;
            }
            .info {
                background-color: #212121;
                padding: 25px 0;
                color: #fff;
            }
            .info__statistic span:nth-child(2) {
                margin: 0 5px;
            }
            .info__statistic span:nth-child(2):before {
                content: '';
                width: 4px;
                height: 4px;
                margin-right: 5px;
                background-color: #fff;
                display: inline-block;
                border-radius: 50%;
                vertical-align: middle;
            }
            .info__statistic span:nth-child(2):after {
                content: '';
                width: 4px;
                height: 4px;
                margin-left: 5px;
                background-color: #fff;
                display: inline-block;
                border-radius: 50%;
                vertical-align: middle;
            }
        `;
    }
    afterRender() {
        
    }

} 
