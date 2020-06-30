import React from 'react';
import Layout from '../core/Layout';
// import { API } from '../config';

const Signup = () => {
  return (
    <Layout title='Signup' description='Signup to Node React E-commerce App'>{process.env.REACT_APP_API_URL}</Layout>
  );
};

export default Signup;