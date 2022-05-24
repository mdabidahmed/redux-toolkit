import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {remove} from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);
  const handleRemoveProduct = (productId: any) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className='cardWrapper'>
        {products.map((product: any) => (
          <div className='cartCard'>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className='btn'
              onClick={() => handleRemoveProduct(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
