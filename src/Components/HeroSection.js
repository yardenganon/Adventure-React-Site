import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-11.mp4' autoPlay loop muted />
      <h1>Ran Ganon Paintings</h1>
      <p style={{ margin: '100px', fontSize: '22px' }}>
        Where Experience and Art Come First {<br />} As an Architect, Interior
        Designer and a Painter, my arts were born from a passion to build, fix,
        improve and create. My Site is proud to provide customers with the
        highest quality paintings, supplies and support throughout their demands
        to upgrade their house with amazing paintings to convert spaces into
        completeness. ​ I am committed to helping you conquer your home or
        garden improvement project. Check out my paintings to see what I have to
        offer for your house spaces. If you have any questions, don’t hesitate
        to reach out.
      </p>
      <div className='hero-btns'>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My Paintings
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
