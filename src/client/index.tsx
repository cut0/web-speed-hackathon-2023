// import './polyfill/install';

import { render } from 'preact';
import { StrictMode } from 'react';

import { App } from './components/application/App';
import { injectGlobalStyle } from './global.styles';

injectGlobalStyle();

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') as HTMLElement,
);
