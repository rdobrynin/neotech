'use strict';


console.info("@author: Roman Dobrynin");

// canvas element

var canvas = document.getElementById("wrapper");
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#99cc99";
ctx.fillRect(0, 0, canvas.width, canvas.height);