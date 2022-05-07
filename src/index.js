import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import WebFont from 'webfontloader';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
        families: ['Raleway:400,300,600','Source+Code+Pro:200,300,400','Source+Sans+Pro:200&display=swap']
    }
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
serviceWorker.register();
