import React from 'react';
import { API } from '../config';

const ShowImg = ({ item, url }) => (
  <div className='product-img'>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='mb-3'
      style={{ naxHeight: '100%', maxWidth: '100%' }}
    />
  </div>
);

export default ShowImg;
