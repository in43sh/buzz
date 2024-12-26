import React from 'react';
import toolkit from '../../img/toolkit.png';

function Orders() {
  return (
    <div className="account__tab-container">
      {/* <h2 className="account__heading-primary heading-primary">My Orders</h2> */}
      <div className="account__orders-container">
        <div className="account__order">
          <div className="order__status-container">
            <p className="order__status">Status: Shipped</p>
            <p className="order__order-number">ORDER NUMBER: 235129352</p>
          </div>
          <div className="order__order-wizard">
            <div className="order-wizard__connecting-line"></div>
            <div className="order-wizard__step-container">
              <p className="order-wizard__step-circle"></p>
              <p className="order-wizard__step-circle"></p>
              <p className="order-wizard__step-circle"></p>
            </div>
          </div>
          <div className="order-wizard__dates-container">
            <div>
              <p>Order confirmed</p>
              <p>Feb 22, 2021</p>
            </div>
            <div className="text-center">
              <p>Shipped with FedEx</p>
              <a className="link" href="./account">
                <p>Tracking Number</p>
              </a>
              <p>Feb 24, 2021</p>
            </div>
            <div className="text-right">
              <p>Est. Delivery</p>
              <p>Feb 27, 2021</p>
            </div>
          </div>
          <div className="order__order-column-names">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <ul className="order__product-list">
            <li className="order__product-item">
              <div className="product-item__img-and-name">
                <div>
                  <img className="img-fluid" src={toolkit} alt="toolkit" />
                </div>
                <p className="product-item__name">
                  10 INCH SPRING AND GEL MEMORY FOAM HYBRID MATTRESS
                </p>
              </div>
              <div className="product-item__price-container">
                <div className="product-item__price-inner-container">
                  <p className="product-item__dollar-amount">$49</p>
                  <p className="product-item__price-unit">&nbsp;/ piece</p>
                </div>
              </div>
              <div className="product-item__quantity-container">
                <p className="product-item__quantity">2</p>
              </div>
            </li>
            <li className="order__product-item">
              <div className="product-item__img-and-name">
                <div>
                  <img className="img-fluid" src={toolkit} alt="toolkit" />
                </div>
                <p className="product-item__name">
                  10 INCH SPRING AND GEL MEMORY FOAM HYBRID MATTRESS
                </p>
              </div>
              <div className="product-item__price-container">
                <div className="product-item__price-inner-container">
                  <p className="product-item__dollar-amount">$49</p>
                  <p className="product-item__price-unit">&nbsp;/ piece</p>
                </div>
              </div>
              <div className="product-item__quantity-container">
                <p className="product-item__quantity">2</p>
              </div>
            </li>
          </ul>
          <div className="order__total-container order__total-container--tax">
            <p className="order__total-dollar-text">$17.02</p>
            <p className="order__total-text">&nbsp;EST. TAX</p>
          </div>
          <div className="order__total-container order__total-container--shipping">
            <p className="order__total-dollar-text">$17.02</p>
            <p className="order__total-text">&nbsp;SHIPPING</p>
          </div>
          <div className="order__total-container">
            <p className="order__total-dollar-text">$187.25</p>
            <p className="order__total-text">&nbsp;TOTAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
