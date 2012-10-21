---
layout: post
title: "The Mandelbrot Fractal"
tagline: "Drawn with JavaScript on a &lt;canvas&gt;"
description: "A couple of years ago, in class, I made a javascript function that draws the Mandelbrot Fractal."
category: technology
tags: [javascript, programming, canvas]
js_includes: [mandelbrot]
---
{% include JB/setup %}


<p>The fractal is made by utilizing the numbers in the <a href="http://en.wikipedia.org/wiki/Mandelbrot_set" title="Wikipedia on the Mandelbrot set">Mandelbrot Set</a>, but because I'm lazy and wikipedia is <em>awesome</em> - feel free to read more about it there.</p>

<p>Without further ado:</p>

<div style="border:1px solid #999;display:inline-block;margin:0;" >
    <button onclick="mandelbrot()">Draw Mandelbrot</button>
    <canvas id="mandelbrot_canvas" width="200" height="200">Your browser does no support the &lt;canvas&gt; yet.</canvas>
</div>


<p>And for your pleasure:</p>

<pre>
<code>function mandelbrot() {
    canvas = document.getElementById("mandelbrot_canvas");
    ctx = canvas.getContext("2d");

    // read the width and height of the canvas
    width = parseInt(canvas.getAttribute("width"));
    height = parseInt(canvas.getAttribute("height"));

    // create a new pixel array
    imageData = ctx.createImageData(width, height);

    // draw random dots
    for (xc=0; xc&lt;width; xc++) {
        for (yc=0; yc&lt;height; yc++) {
            //convert screen coords to coords around 0
            var zoom = 1;
            var x0 = (-(width/2) + xc - (width/4))*zoom/(width/2);// co-ordinate of pixel
            var y0 = (-(height/2) + yc)*zoom/(height/2);// co-ordinate of pixel

            var x = 0; //temp coords
            var y = 0;

            var iteration = 0;          //current iteration
            var max_iteration = 1000;   //max iteration
            //calculate the mandelbrot set
            while ( ((x*x) + (y*y) &lt;= (2*2))  &amp;&amp;  (iteration &lt; max_iteration) )
            {
                var xtemp = (x*x) - (y*y) + x0;
                y = (2*x*y) + y0;
                x = xtemp;
                iteration++;
            }
            index = (xc + yc * imageData.width) * 4;
            var val = 255;
            imageData.data[index+3] = 0;
            if ( iteration &gt;= max_iteration ){ val = 0; imageData.data[index+3] = 0xff; }
            imageData.data[index+0] = imageData.data[index+1] = imageData.data[index+2] = val;
        }
    }

    // copy the image data back onto the canvas
    ctx.putImageData(imageData, 0, 0); // at coords 0,0
}
</code>
</pre>

