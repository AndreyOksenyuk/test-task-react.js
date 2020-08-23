import React from 'react';
import './App.scss';
import logo1x from './assets/img/favicon-16x16.png';
import logo2x from './assets/img/favicon-32x32.png';
import manLaptop from './assets/img/man-laptop-v1.svg'
import burgerSvg from './assets/img/menu-icon.svg'

import 'antd/dist/antd.css';
import { Input } from 'antd';
import UploadPhot from './components/UploadPhoto/UploadPhot';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="headerWrapper">
        <div className="container">
          <header className='header'>
            <div className="header__logo">
              <img src={logo1x} srcSet={logo2x} alt='logo' />
              <h1>testtask</h1>
            </div>
            <nav className='nav'>
              <ul className='nav__link'>
                <a href="/"><li>About me</li></a>
                <a href="/"><li>Relationships</li></a>
                <a href="/"><li>Requirements</li></a>
                <a href="/"><li>Users</li></a>
                <a href="/"><li>Sign Up</li></a>
              </ul>
            </nav>

            {/* mobile menu */}
            <img src={burgerSvg} alt="" className="burger_btn" />
          </header>

        </div>
      </div>

      {/* banner */}
      <div className="banner">
        <div className="container">
          <div className="banner__inner">
            <h3 className="banner__inner_title">Test assignment for Frontend
              Developer position</h3>
            <p className="banner__inner_text">We kindly remind you that your test
            assignment should be submitted as a link to github/bitbucket repository.
            Please be patient, we consider and respond to every application that meets
            minimum requirements. We look forward to your submission. Good luck!
              The photo has to scale in the banner area on the different screens</p>
            <p className="banner__inner_text_mobile">We kindly remind you that your test
            assignment should be submitted as a link to github/bitbucket repository.</p>
          </div>
          <button className="btn btn_baner">Sing up now</button>
        </div>
      </div>

      {/*About me */}
      <div className="container">
        <div className="aboutMe">
          <h3 className="aboutMe__title">Let's get acquainted</h3>
          <div className="aboutMe__content">
            <img src={manLaptop} alt='man-laptop' className="aboutMe__content_img" />
            <div className="aboutMe__content_text">
              <h5>I am cool frontend developer</h5>
              <p>We will evaluate how clean your approach to writing CSS and Javascript code is.
              You can use any CSS and Javascript 3rd party libraries without any restriction.</p>

              <p>If &nbsp;3rd&nbsp; party&nbsp;&nbsp; css/javascript &nbsp;&nbsp;libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task runner
              (gulp/webpack) you will get bonus points as well. Slice service
              directory page PSD mockup into HTML5/CSS3.</p>
              <a href="/">Sing up now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Users */}

      <div className="users">
        <div className="container">
          <h3 className="users__title">Our cheerful users</h3>
          <h4 className="users__subTitle">Attention! Sorting users by registration date</h4>
          <div className="users_wrapper">
            <div className="users__container">
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
            </div>
            <button className="btn">Show more</button>
          </div>

        </div>
      </div>

      {/* form */}

      <div className="container">
        <div className="form__wrapper">
          <h3 className="form__wrapper_title">Register to get a work</h3>
          <h4 className="form__wrapper_subTitle">Attention! After successful registration and alert,
        update the list of users in the block from the top</h4>
          <form className="Form">
            <label htmlFor="inputName">Name</label>
            <Input placeholder="Your name" id="inputName" />

            <label htmlFor="inputEmail">Email</label>
            <Input placeholder="Your email" id="inputEmail" />

            <label htmlFor="inputPhone">Phone namber</label>
            <Input placeholder="+380 XX XXX XX XX" id="inputPhone" />


            <h6>Select your positio</h6>
            <div className='checkBox'>
              <input id="r1" type="radio" name="radio" value="1" />
              <label htmlFor="r1">Radio1</label>
            </div>

            <div className="checkBox">
              <input id="r2" type="radio" name="radio" value="1" />
              <label htmlFor="r2">Radio2</label>
            </div>

            <div className="checkBox">
              <input id="r3" type="radio" name="radio" value="1" />
              <label htmlFor="r3">Radio3</label>
            </div>

            <div className="checkBox">
              <input id="r4" type="radio" name="radio" value="1" />
              <label htmlFor="r4">Radio4</label>
            </div>


            <label htmlFor="inputPhoto">Photo</label>
            <Input
              className='inputPhoto'
              placeholder="Upload your photo"
              addonAfter={<UploadPhot />}
              id="inputPhoto"
            />
            <button className="btn btn_formSubmit">Singup now</button>
          </form>
        </div>



      </div>
      <footer>
        <span>&copy; abz.agency specially for the test task</span>
      </footer>
    </div>
  );
}

export default App;
