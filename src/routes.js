import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from './pages/RegisterSteps';
import SecondStep from './pages/RegisterSteps/SecondStep';
import CourseStep from './pages/RegisterSteps/CourseStep';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/register/step" exact component={SecondStep} />
      <Route path="/register/course" exact component={CourseStep} />
    </BrowserRouter>
  );
}

export default Routes;
