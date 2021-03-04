import React from "react";
import Logo from "../utils.js"
import gsap from "gsap";

function clamp(min, max, val){
    if(val > max){
        return max + ((val - max) / 100);
    }
    else if(val < min){
        return min - ((min - val) / 100) ;
    }
    else{
        return val;
    }
}

function slow(targets, val){
    if (val > targets) {
        return targets + ((val - targets) / 15);
    }
    else if (val < targets) {
        return targets - ((targets - val) / 15);
    }
    else {
        return val;
    }
}

class CubeMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var active = true;

        document.onmousemove = function (ev) {
            if(active){
                var offset = 120;
                var degY = slow(180, 360 * (ev.pageX / window.innerWidth));
                var degX = slow(180, 360 * (ev.pageY / window.innerHeight)) + offset;

                var cube = document.querySelector(".cube");

                cube.style.transform = "translateZ( -100px) rotateY( " + degY + "deg) rotateX(" + degX + "deg) rotateZ(" + 45 + "deg)";
            }
        };  
        

        let timing = 1;
        let timingFast = 0.75;
        let animCompleteFunc = () => { active = true; }

        var face_right = document.querySelector(".face-right");
        face_right.addEventListener("click", function(){
            active = false;
            let tl = gsap.timeline({ onComplete: animCompleteFunc});
            
            tl.set(".face-right", {color: "black"});
            tl.set(".face-right", {backgroundColor: "white"});
            tl.to(".cube", { rotateX: "0deg", rotateY: "-90deg", rotateZ: "270deg", duration: timing, autoRound: true });
            tl.to(".face-right .word", { autoAlpha: 0, duration: timing }, "<");
            tl.set("#ScreenWipe", { autoAlpha: 1 });
            tl.to("#ScreenWipe", { height: "100vh", width: "100vw", border: 0, duration: timingFast });
            tl.set("#works", {autoAlpha: 1, display: "block"});
            tl.set("#top", {autoAlpha: 0, display: "none"});
            tl.set(".cube", {clearProps: "all"});
            tl.set("#ScreenWipe", {clearProps: "all"});
            tl.set(".face-right .word", {clearProps: "all"});
            tl.set(".face-right", {clearProps: "all"});
        });

        var face_bottom = document.querySelector(".face-bottom");
        face_bottom.addEventListener("click", function () {
            active = false;
            let tl = gsap.timeline({ onComplete: animCompleteFunc});

            tl.set(".face-bottom", {color: "black"});
            tl.set(".face-bottom", {backgroundColor: "white"});
            tl.to(".cube", { rotateX: "90deg", rotateY: "0deg", rotateZ: "180deg", duration: timing, autoRound: true });
            tl.to(".face-bottom .word", { autoAlpha: 0, duration: timing }, "<");
            tl.set("#ScreenWipe", { autoAlpha: 1 });
            tl.to("#ScreenWipe", { height: "100vh", width: "100vw", border: 0, duration: timingFast });
            tl.set("#contact", {autoAlpha: 1, display: "block"});
            tl.set("#top", {autoAlpha: 0, display: "none"});
            tl.set(".cube", {clearProps: "all"});
            tl.set("#ScreenWipe", {clearProps: "all"});
            tl.set(".face-bottom .word", {clearProps: "all"});
            tl.set(".face-bottom", {clearProps: "all"});
        });

        var face_back = document.querySelector(".face-back");
        face_back.addEventListener("click", function () {
            active = false;
            let tl = gsap.timeline({ onComplete: animCompleteFunc});

            tl.set(".face-back", {color: "black"});
            tl.set(".face-back", {backgroundColor: "white"});
            tl.to(".cube", { rotateX: "180deg", rotateY: "0deg", rotateZ: "180deg", duration: timing, autoRound: true });
            tl.to(".face-back .word", {autoAlpha: 0, rotateZ: "0deg", duration: timing}, "<");
            tl.set("#ScreenWipe", { autoAlpha: 1 });
            tl.to("#ScreenWipe", { height: "100vh", width: "100vw", border: 0, duration: timingFast });
            tl.set("#about", {autoAlpha: 1, display: "block"});
            tl.set("#top", {autoAlpha: 0, display: "none"});
            tl.set(".cube", {clearProps: "all"});
            tl.set("#ScreenWipe", {clearProps: "all"});
            tl.set(".face-back .word", {clearProps: "all"});
            tl.set(".face-back", {clearProps: "all"});
        });
    }

    render() {
        return (
            <div className="menu-cube">
                <div className="cube">
                    <div className="face face-front">
                        <Logo>Front</Logo>
                    </div>
                    <div className="face face-back">
                        <Logo>About</Logo>
                    </div>
                    <div className="face face-right">
                        <Logo>Works</Logo>
                    </div>
                    <div className="face face-left">
                        <Logo>Left</Logo>
                    </div>
                    <div className="face face-top">
                        <Logo>Top</Logo>
                    </div>
                    <div className="face face-bottom">
                        <Logo>Contact</Logo>
                    </div>
                </div>
            </div>
        );
    }
}

export default CubeMenu;