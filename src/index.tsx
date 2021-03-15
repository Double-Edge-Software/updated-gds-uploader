import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Home, VitalInfo, TaxInfo, FileUpload, Results } from './components';

import 'firebase/app';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseconfig';

import { Provider } from 'react-redux';
import { store } from './store';

/* Imports for Router */
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/vitals' component={VitalInfo}/>
          <Route path='/tax' component={TaxInfo}/>
          <Route path='/upload' component={FileUpload}/>
          <Route path='/results' component={Results}/>
        </Switch>
      </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
