import React, { useState } from 'react';
import NavBar from './NavBar';
import FitnessPic from "../assets/FitnessPic.jpeg";
import './Workout.css';
import ChildComponent from './ChildComponent';
import { AppContext } from './AppContext';


const HomePage = () => {

  const [quality, setQuality] = useState(1)

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };


  return (
    <AppContext.Provider value={{quality, setQuality}}>
    <div className="relative">
      <NavBar />
      
      <div>
        <h1>Did you workout today?</h1>
        <h2>how many worked out today: {count}</h2>
        <ChildComponent onIncrement={handleCount} />
      </div>

      <body className="headLinePic">
        <img src={FitnessPic} height="800px" width="1500px" alt=""/>
      </body>
      
      <div className='helloWorld'>
      It's free for a reason, lets run it.
        </div>
      <footer className="footer"> 
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        </ul>
        <p>&copy;2024 David Le | All Rights Reserved</p>
      </footer>
    </div>
    </AppContext.Provider>
  );
};

export default HomePage;
