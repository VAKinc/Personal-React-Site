import React from "react";
import Top from "./Top.js";
import About from "./About.js"
import Contact from "./Contact.js"
import Works from "./Works.js"

class Page extends React.Component {

    render() {
        return (
            <div className="content-area">
                <Top />
                <About />
                <Contact />
                <Works />
            </div>
        );
    }
}

export default Page;