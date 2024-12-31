import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
import Product from './Product';

function PopularProducts(props) {
  const [products, setProducts] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // console.log('BASE_URL ===> ', BASE_URL);

  const fetchProducts = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`${BASE_URL}/products`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error('Fetch Error:', error));
  }, [BASE_URL]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className={'product-cards-container ' + props.className}>
      <h2 className="heading-primary">Popular Products</h2>
      <div className="product-cards">
        {products.map((product, index) => {
          return (
            // <Link className="product-cart__link-wrapper" to="/product">
            <Product
              key={index}
              img={product.image}
              productTitle={product.productTitle}
              price={product.price}
              unit={product.unit}
              rating={product.rating}
              id={product.id}
            />
            // </Link>
          );
        })}
      </div>
    </section>
  );
}

export default PopularProducts;
