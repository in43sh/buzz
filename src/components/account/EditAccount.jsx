import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EditAccount() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        authorization: token
      }
    };

    axios
      .get('https://aw-store.herokuapp.com/auth/users', options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="account__tab-container">
      <h2 className="account__heading-primary heading-primary">Edit My Account</h2>
      <p>in43sh@gmail.com</p>
      <div className="account__change-email-container">
        <div className="account__input-container input-container">
          <label htmlFor="email" className="label">
            E-MAIL
          </label>
          <input id="email" className="input" />
        </div>
        <div className="account__change-container">
          <Link className="account__change-link">
            <span className="account__change-text">Change</span>
          </Link>
        </div>
        <div className="account__password-container account__input-container input-container">
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input id="password" className="input" />
        </div>
      </div>
      <h2 className="account__heading-primary heading-primary">Shipping Address</h2>
      <div className="account__account-info">
        <div className="account__input-container input-container">
          <label htmlFor="name" className="label">
            NAME
          </label>
          <input id="name" className="input" />
        </div>
        <div className="account__street-input-container account__input-container input-container">
          <label htmlFor="street" className="label">
            STREET
          </label>
          <input id="street" className="input" />
        </div>
        <div className="account__input-container input-container">
          <label htmlFor="city" className="label">
            CITY
          </label>
          <input id="city" className="input" />
        </div>
        <div className="account__input-container input-container">
          <label htmlFor="state" className="label">
            STATE
          </label>
          <input id="state" className="input" />
        </div>
        <div className="account__input-container input-container">
          <label htmlFor="zip" className="label">
            ZIP CODE
          </label>
          <input id="zip" className="input" />
        </div>
        <div className="account__input-container input-container">
          <label htmlFor="country" className="label">
            COUNTRY
          </label>
          <input id="country" className="input" />
        </div>
      </div>
      <div className="account__btn-group">
        <div className="btn btn--small btn--small-screen">
          <p>Cancel</p>
        </div>
        <div className="btn btn--small btn--small-screen btn--yellow">
          <p>Save</p>
        </div>
      </div>
    </div>
  );
}

export default EditAccount;
