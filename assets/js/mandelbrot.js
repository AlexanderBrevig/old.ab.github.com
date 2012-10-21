function mandelbrot() {
    canvas = document.getElementById("mandelbrot_canvas"), 
    ctx = canvas.getContext("2d"), 
    width = parseInt(canvas.getAttribute("width")), 
    height = parseInt(canvas.getAttribute("height")), 
    imageData = ctx.createImageData(width, height);

    for (xc = 0; xc < width; xc++)
        for (yc = 0; yc < height; yc++) {
            var a = 1, 
            	b = (-(width / 2) + xc - width / 4) * a / (width / 2), 
            	c = (-(height / 2) + yc) * a / (height / 2), 
            	d = 0, 
            	e = 0, 
            	f = 0, 
            	g = 1e3;
            while (d * d + e * e <= 4 && f < g) {
                var h = d * d - e * e + b;
                e = 2 * d * e + c, d = h, f++
            }
            index = (xc + yc * imageData.width) * 4;
            var i = 255;
            imageData.data[index + 3] = 0, f >= g && (i = 0, imageData.data[index + 3] = 255), imageData.data[index + 0] = imageData.data[index + 1] = imageData.data[index + 2] = i
        }
    ctx.putImageData(imageData, 0, 0)
}