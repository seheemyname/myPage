import React from 'react';
import './App.css';
import Back1 from './img/Back1.png';
import Back2 from './img/Back2.png';
import Footer from './Footer';
import Second from './Second';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import {FullPage, Slide} from 'react-full-page';
import GoTop from './GoTop';

function App() {
  return (
    
      <div className='main-body'>
        <GoTop/>
        <script src="https://kit.fontawesome.com/71b0a15889.js" crossorigin="anonymous"></script>
        <div className='back-img'>
          <img className='Back1' alt='Back1' src={Back1}/>
        </div>
        <div className='back-text'>
          <p> <strong> My name is Dicer </strong> </p>
          <p> Front-end Web Developer </p> <br/>
          <a href='https://github.com/seheemyname'>
            <FontAwesomeIcon icon={faGithub}/>
          </a> <br/> <br/> <br/> <br/> <br/>
            <FontAwesomeIcon icon={faAnglesDown}/>
        </div>
        <img className='Back2' alt='Back2' src={Back2}/>
        <Second/>
        <Footer/>
      </div>
      
  );
}

export default App;
