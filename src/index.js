import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import index from './app/store';
import ScrollToTop from './app/layout/ScrollToTop';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={index}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>,
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
