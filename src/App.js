import React from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutMy from './components/AboutMy';
import Users from './components/Users';
import FormModule from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <Banner />

      <AboutMy />

      <Users />

      <FormModule />

      <Footer />

    </div>
  );
}

export default App;
