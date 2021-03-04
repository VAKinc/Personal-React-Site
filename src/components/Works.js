import React, {useState}  from 'react';
import gsap from 'gsap';

let timing = 0.5;
let timingFast = 0.25;
var animComplete = false;

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // animComplete: false, Example
        };
    }

    componentDidMount() {
        var section_works = document.querySelector('#works');
        section_works.addEventListener("click", function () {
            let tl = gsap.timeline();

            tl.set("#works", {autoAlpha: 0, display: 'none'});
            tl.set("#top", {autoAlpha: 1, display: 'block'});
        });
    }

    render() {
        return (
            <section id="works">
                <h1>Works</h1>
            </section>
        );
    }
}

export default Works;