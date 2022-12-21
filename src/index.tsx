import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "./context/ThemeContext";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {PaginationProvider} from "./context/PaginationContext";
import {ScreenWidthProvider} from "./context/ScreenWidthContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ScreenWidthProvider>
              <ThemeProvider>
                  <PaginationProvider>
                      <Router>
                          <App />
                      </Router>
                  </PaginationProvider>
              </ThemeProvider>
          </ScreenWidthProvider>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
