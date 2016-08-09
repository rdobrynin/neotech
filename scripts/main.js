//Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var cw = 10;
var widthInELEMENTs = width / cw;
var heightInELEMENTs = height / cw;
var score = 0;
var speed = 1;

var drawBorder = function () {
    ctx.fillStyle = "Black";
    ctx.fillRect(0, 0, width, cw);
    ctx.fillRect(0, height - cw, width, cw);
    ctx.fillRect(0, 0, cw, height);
    ctx.fillRect(width - cw, 0, cw, height);
};

var setScore = function () {

};


var gameOver = function () {

};


var ELEMENT = function (col, row) {
    this.col = col;
    this.row = row;
};

ELEMENT.prototype.drawSquare = function(color) {
    var x = this.col * cw;
    var y = this.row * cw;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cw, cw);
};

ELEMENT.prototype.drawSnake = function(color, border) {
    var x = this.col * cw;
    var y = this.row * cw;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cw, cw);
    ctx.strokeStyle = border;
    ctx.strokeRect(x, y, cw, cw)
};


ELEMENT.prototype.equal = function(otherELEMENT) {
    return this.col === otherELEMENT.col && this.row === otherELEMENT.row;
};

var Snake = function () {
    this.segments = [
        new ELEMENT(7, 5),
        new ELEMENT(6, 5),
        new ELEMENT(5, 5),
        new ELEMENT(4, 5),
        new ELEMENT(3, 5)
    ];
    this.direction = "right";
    this.nextDirection = "right";
};


Snake.prototype.draw = function() {

    for(var i = 0; i < this.segments.length; i++){
        this.segments[i].drawSnake("black", "white");

    }
};

Snake.prototype.speed = function() {

};

Snake.prototype.move = function() {

};

Snake.prototype.checkConflict = function(head) {

};

Snake.prototype.setDirection = function(newDirection) {

};

var Food = function () {

};

Food.prototype.draw = function() {

};

Food.prototype.move = function() {

};

var snake = new Snake();
var food = new Food();





document.addEventListener('keydown', function(event) {


    if(event.keyCode == 32){
        // todo

    }
}, false);

