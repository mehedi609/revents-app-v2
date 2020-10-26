import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl,
  );
}

// if (module.hot) {
//   module.hot.accept('./App', function () {
//     setTimeout(render);
//   });
// }

render();

serviceWorker.unregister();
