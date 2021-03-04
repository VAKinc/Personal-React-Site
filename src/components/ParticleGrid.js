import React from "react";

class ParticleGrid extends React.Component {
    componentDidMount() {

        let dpi = window.devicePixelRatio;
        var c = document.getElementById("particle-grid");
        var ctx = c.getContext("2d");
        fix_dpi(c);
        
        var n = 50; // 3x3 grid of dots
        
        for (var i=0; i<n; i++) {
          for (var j=0; j<n; j++) {
            var gridXSideLength = window.innerWidth/n;
            var gridYSideLength = window.innerHeight/n;
            var x = (gridXSideLength/2) * (i+1);
            var y = (gridYSideLength/2) * (j+1);

        
            ctx.beginPath();
            ctx.fillRect(x, y, 10, 10);
            ctx.closePath();
            ctx.stroke();
          }
        }

        function fix_dpi(canvas) {
            let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
            let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
            canvas.setAttribute("height", style_height * dpi);
            canvas.setAttribute("width", style_width * dpi);
        }
    }

    
    render(){
        return(
            <canvas id="particle-grid"></canvas>
        );
    }
}

export default ParticleGrid;