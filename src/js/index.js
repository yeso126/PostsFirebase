import React from 'react';
import {render} from 'react-dom';
import '../css/index.css';
import App from './components/app.js'

render(<App/>, document.getElementById('appContainer'))

// if (module.hot) {
//     module.hot.accept('./components/app.js');
// }