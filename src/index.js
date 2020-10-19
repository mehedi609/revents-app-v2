import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './app/layout/styles.css';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, rootEl);
}

// if (module.hot) {
//   module.hot.accept('./App', function () {
//     setTimeout(render);
//   });
// }

render();

serviceWorker.unregister();
