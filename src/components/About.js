import React, {useState}  from 'react';
import gsap from 'gsap';

let timing = 0.5;
let timingFast = 0.25;
var animComplete = false;

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // animComplete: false, Example
        };
    }

    componentDidMount() {
        var section_about = document.querySelector('#about');
        section_about.addEventListener("click", function () {
            let tl = gsap.timeline();

            tl.set("#about", {autoAlpha: 0, display: 'none'});
            tl.set("#top", {autoAlpha: 1, display: 'block'});
        });
    }

    render() {
        return (
            <section id="about">
                <h1>About</h1>
            </section>
        );
    }
}

export default About;