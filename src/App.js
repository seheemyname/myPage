import React from 'react';
import './App.css';
import Back1 from './img/Back1.png';
import Back2 from './img/Back2.png';
import Footer from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    
    <div className='main-body'>
      <script src="https://kit.fontawesome.com/71b0a15889.js" crossorigin="anonymous"></script>
      <div className='back-img'>
        <img className='Back1' alt='Back1' src={Back1}/>
      </div>
      <div className='back-text'>
        <p> My name is Dicer </p>
        <p> Front-end Web Developer </p>
        <a href='https://github.com/seheemyname'>
          <FontAwesomeIcon icon={faGithub}/>
        </a> <br/> <br/>
          <FontAwesomeIcon icon={faAnglesDown}/>
      </div>
      <img className='Back2' alt='Back2' src={Back2}/>
      <Footer/>
    </div>
      
  );
}

export default App;
