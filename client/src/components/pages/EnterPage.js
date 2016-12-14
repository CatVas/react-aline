import React from 'react';

import Signin from '../forms/Signin';
import Signup from '../forms/Signup';


const EnterPage = props => {
  return (
    <section className="homepage page">
      <h1>Sign {`${props.route.path === 'signin' ? 'in' : 'up'}`}</h1>
      {props.route.path === 'signin' ? <Signin /> : <Signup />}
    </section>
  );
};

export default EnterPage;
