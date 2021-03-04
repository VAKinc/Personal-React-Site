import React, {useState}  from 'react';
import gsap from 'gsap';

import ParticleField from './ParticleField.js';
import ParticleGrid from './ParticleGrid.js';
import CubeMenu from './CubeMenu.js'
import Logo from '../utils.js'

let timing = 0.5;
let timingFast = 0.25;
var animComplete = false;

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // animComplete: false, Example
        };
    }

    componentDidMount() {
        let animCompleteFunc = () => { animComplete = true; console.log("Anim complete function called") }

        let tl = gsap.timeline({ onComplete: animCompleteFunc});
        tl.to(".logo-wrapper .letter", {
            scale: 1, rotateX: "0deg", color: 'black', duration: timing, autoRound: false,
            stagger: {
                amount: 2,
                from: 0,
            } 
        });
        tl.set("#top", { background: "white"});
        tl.to(".logo-wrapper", { background: "transparent", duration: timing });
        tl.to(".logo-wrapper .letter", { opacity: 0, duration: timing }, "<");
        tl.to(".logo-wrapper .letter", { scale: 0.8, duration: timing }, "<");
    }

    render() {
        return (
            <section id="top">
                <div className="logo-wrapper">
                    {/* <div id="ne-border"></div> */}
                    <h1><Logo>NOLAN&nbsp;JOSEPH</Logo></h1>
                    {/* <div id="sw-border"></div> */}
                </div>
                <div className="bganim"></div>
                <ParticleField />
                {/* <ParticleGrid /> */}
                <CubeMenu />
                <div id="ScreenWipe"></div>
            </section>
        );
    }
}

export default Top;