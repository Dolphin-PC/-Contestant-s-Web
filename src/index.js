import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

// Views
import Index from 'views/Index.js';
import Landing from 'views/pages/Landing.js';
import Login from 'views/pages/Login.js';
import Profile from 'views/pages/Profile.js';
import Register from 'views/pages/Register.js';
import Activity from 'views/pages/Activity.js';
import Curriculum from 'views/pages/Curriculum.js';
import Budget from 'views/pages/Budget.js';
import Rule from 'views/pages/Rule.js';
import Day from 'views/pages/Day.js';
import Idea from 'views/pages/Idea.js';

import Test from './Test';

// Reducer
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={(props) => <Landing {...props} />} />
        <Route
          path='/landing-page'
          exact
          render={(props) => <Landing {...props} />}
        />
        <Route
          path='/login-page'
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path='/profile-page'
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path='/register-page'
          exact
          render={(props) => <Register {...props} />}
        />
        <Route path='/test' exact render={(props) => <Index {...props} />} />
        <Route
          path='/activity'
          exact
          render={(props) => <Activity {...props} />}
        />
        <Route
          path='/curriculum'
          exact
          render={(props) => <Curriculum {...props} />}
        />
        <Route path='/budget' exact render={(props) => <Budget {...props} />} />
        <Route path='/rule' exact render={(props) => <Rule {...props} />} />
        <Route path='/idea' exact render={(props) => <Idea {...props} />} />
        <Route path='/day' exact render={(props) => <Day {...props} />} />
        <Redirect to='/landing-page' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
