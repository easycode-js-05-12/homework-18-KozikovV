import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { UserComponent } from './components/user.component';
import { ActiveRoute } from './core/active.route.service';
import { NewsComponent } from './components/news.component';


const routes = {
    '/home': new HomeComponent(),
    '/login': new LoginComponent(),
    '/users/:id': new UserComponent(),
    '/news': new NewsComponent(),
    '**': new NotFoundComponent()
};

const activeRoute = new ActiveRoute();

const router = async () => {
    const container = document.querySelector('app-container');
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');

    const component = routes[url] || routes['**']; 
    
    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);



