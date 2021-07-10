import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HomeProvider } from './components/pages/Home/home.context';
import './fonts/pokemon/Pokemon-Solid.ttf';

ReactDOM.render(
<HomeProvider> <App /> </HomeProvider>,
document.getElementById('root'));