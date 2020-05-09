import React, { Component, useRef, useEffect } from 'react';
import { MDBBtn } from 'mdbreact';

import MdLink from 'react-ionicons/lib/MdLink';

import coverVid1 from '../videos/highway.mp4';

import '../styles/LandingStyles.css';

import { TweenMax, Power3 } from 'gsap';


export default class Landing extends Component {
    
    constructor(props){
        super(props);

        this.titleText = null;
        this.subtitleText = null;
        this.startBtn = null;
        this.app = null;
    }

    componentDidMount(){
        TweenMax.to(this.app, 0, {css: {visibility: 'visible'}});

        TweenMax.staggerFrom([this.titleText, this.subtitleText, this.startBtn], 2, { y: 200, ease: Power3.easeOut }, .8);
    }



    render() {
        
        return (
        <div ref={el => this.app = el} style={{visibility: 'hidden'}}>
        <section className="showcase">
            <div className="video-container">
                <video src={ coverVid1 } autoPlay muted loop></video>
            </div>

            <div className="content">
                <h1 ref = {el => this.titleText = el}><MdLink fontSize="60px" color="white" rotate={true} />Linkups.ca</h1>
                <h3 ref = {el => this.subtitleText = el}>Combine all your links into one</h3>

                <div ref={el => this.startBtn = el}>
                    <MDBBtn href="admin" color="blue-grey">Start Now</MDBBtn>
                </div>
            </div>
        </section>

        <section className="about">
            <h1>How it works</h1>
            <p>
                Fill out the form on the next page and you get your own personal link to share to others.
            </p>
            <h2>Follow me on social media</h2>

            <div className="social">
                <a href="https://github.com/ChrisCosentino/" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                <a href="https://www.instagram.com/chriscosentino_/?hl=en" target="_blank"><i className="fab fa-instagram fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/chriscosentino98/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>

            </div>
        </section>
        </div> 
        )
    }
}
