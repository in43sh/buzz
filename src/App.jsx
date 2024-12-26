import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authInit } from './redux/reducer';
import Routes from './routes';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authInit());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
