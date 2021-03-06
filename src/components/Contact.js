import React, {useState}  from 'react';
import gsap from 'gsap';

let timing = 0.5;
let timingFast = 0.25;
var animComplete = false;

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // animComplete: false, Example
        };
    }

    componentDidMount() {
        var section_contact = document.querySelector('#contact');
        section_contact.addEventListener("click", function () {
            let tl = gsap.timeline();

            tl.set("#contact", {autoAlpha: 0, display: 'none'});
            tl.set("#top", {autoAlpha: 1, display: 'block'});
        });
    }

    render() {
        return (
            <section id="contact">
                <h1>Contact</h1>
            </section>
        );
    }
}

export default Contact;