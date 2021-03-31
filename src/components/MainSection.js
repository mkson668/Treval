import React from 'react';
import { Button } from './Button';
import './MainSection.css';
import '../App.css';
import mainVideo from '../videos/nature_0.mp4';

function MainSection() {
    return (
        <div className="main-container">
            <video src={mainVideo} autoPlay loop muted/>
            <h1>Switch up your routine</h1>
            <p>Adventure awaits</p>
            <div className="main-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get started
                </Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default MainSection;
