/**
 * Write a program that draws the following shapes on a canvas:
 * https://eloquentjavascript.net/17_canvas.html#i_sZheOHQF5N
 */
let cx = document.querySelector("canvas").getContext("2d");
// trapezoid
cx.beginPath();
cx.moveTo(15, 0);
cx.lineTo(75,0);
cx.lineTo(90, 50);
cx.lineTo(0,50);
cx.closePath();
cx.stroke();

// diamond
cx.rotate(0.25*Math.PI);
cx.fillStyle = 'red';
cx.fillRect(100,5,30,30);
cx.resetTransform();

// zigzag
let x = 200;
let y = 0;
cx.moveTo(x,y)
for (var i = 0; i <= 11; i++) {
	x = 300;
	y += 10;
	if (i%2) {
		x = 200;
	}
	cx.lineTo(x,y);
	cx.stroke();
}