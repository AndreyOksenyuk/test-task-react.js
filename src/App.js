import React from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutMy from './components/AboutMy';
import RegisterToGetWork from './components/RegisterToGetWork/RegisterToGetWorkContainer';
import Footer from './components/Footer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <div className="App">

      <Header />

      <Banner />

      <AboutMy />

      <UsersContainer />

      <RegisterToGetWork />

      <Footer />

    </div>
  );
}

export default App;
