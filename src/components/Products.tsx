import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);
  // Add to cart button function
  const handleAddProduct = (product: any) => {
    dispatch(add(product));
  };
  return (
    <div className='productsWrapper'>
      {products.map((product: any) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='product-image' />
          <h4>{product.price}</h4>
          <button onClick={() => handleAddProduct(product)} className='btn'>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
