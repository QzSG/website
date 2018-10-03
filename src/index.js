import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import WebFont from 'webfontloader';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
        families: ['Raleway:400,300,600','Source+Code+Pro:200,300,400','Source+Sans+Pro:200']
    }
});
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
