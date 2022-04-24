import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App name="Clinical Skills"/>);

serviceWorker.register();
//reportWebVitals();

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(<App name="Clinical Skills"/>);
*/


/*
import React from 'react';
import  ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(<App />, document.getElementById('root'));
*/


