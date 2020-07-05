import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { getCart } from './cartHelpers';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = items => {
    return (
      <div>
        <h2>Your cart has {`${items.length} items`} </h2>
        <hr />
        {items.map((product, i) => (
          <Card key={i} product={product} />
        ))}
        <hr />
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty <br />
      <Link to='/shop'>Continue shopping</Link>
    </h2>
  );

  return (
    <Layout
      title='Shopping'
      descriptipn='Manage your cart items. Add remove checkout or continue shopping'
      className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className='col-6'>
          <p>show checkout options/shipping address/total/update quantity</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
