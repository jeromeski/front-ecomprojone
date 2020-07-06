import React from 'react';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

const Checkout = ({ products }) => {

  const showCheckout = () => isAuthenticated() ? (
    <button className='btn btn-success'>Checkout</button>
  ) : (
    <Link to='/signin'>
      <button className='btn btn-primary'>Sign in to checkout</button>
    </Link>
  )

  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  return (
    <div>
      <h2>Total: ${getTotal()}</h2>
      {showCheckout()}
    </div>
  );
};

export default Checkout;
