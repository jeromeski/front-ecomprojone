import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';

const AddProduct = () => {
  const {user, token} = isAuthenticated();
  return (
      <Layout
      title='Add a new product'
      description={`G'day ${user.name}, ready to add a new product?`}
      className='container-fluid'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          
          ...
        </div>
      </div>
    </Layout>

  );
};

export default AddProduct;