
import './styles/index.scss';
import main from './main.html';
import './components';

const App = document.createElement('div');
App.innerHTML = main;
document.body.appendChild(App);