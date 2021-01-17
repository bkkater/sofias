import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from './pages/RegisterSteps';
import SecondStep from './pages/RegisterSteps/SecondStep';
import Course from './pages/Detail/Course';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/register/step" exact component={SecondStep} />
      <Route path="/detail/course" exact component={Course} />
    </BrowserRouter>
  );
}

export default Routes;
