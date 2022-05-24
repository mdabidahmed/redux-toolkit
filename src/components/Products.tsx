import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import {fetchProducts} from '../store/productSlice';
import {STATUSES} from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state: any) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product: any) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className='productsWrapper'>
      {products.map((product: any) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='' />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className='btn'>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
