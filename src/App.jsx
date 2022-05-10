import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import { Provider } from 'react-redux';
import store from './store';
import Loading from './hoc/Loading';
import Patientehr from './pages/Patientehr';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Provider store={store}>
      <Loading>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/doctor" element={<Dashboard />} />
          <Route exact path="/patient/:inn" element={<Patientehr/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route exact path="/password/reset/:uid/:token" element={<ResetPassword />} />
          <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
        </Routes>
      </Loading>
    </Provider>
  );
}

export default App;
