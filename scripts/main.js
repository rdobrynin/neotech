//Canvas
var canvas = new Object();
canvas.element = document.getElementById('canvas');
canvas.context = canvas.element.getContext('2d');
canvas.width = canvas.element.getAttribute('width');
canvas.height = canvas.element.getAttribute('height');
canvas.cellWidth = 10;

var ctx = canvas.context;
var width = canvas.width;
var height = canvas.height;

var cw = canvas.cellWidth;
var widthInELEMENTs = width / cw;
var heightInELEMENTs = height / cw;

canvas.redraw = function(){
    this.draw(0, 0, '#99cc99', 'black', this.width, this.height);
};

canvas.draw = function(x, y, fillCol, strokeColour, width, height) {
    this.context.fillStyle = fillCol;
    this.context.fillRect(x*canvas.cellWidth, y*canvas.cellWidth, width, height);
    this.context.strokeStyle = strokeColour;
    this.context.strokeRect(x*canvas.cellWidth, y*canvas.cellWidth, width, height);
    this.context.fillStyle = "Black";
    this.context.fillRect(0, 0, width, canvas.cellWidth);
    this.context.fillRect(0, height - canvas.cellWidth, width, canvas.cellWidth);
    this.context.fillRect(0, 0, canvas.cellWidth, height);
    this.context.fillRect(width - canvas.cellWidth, 0, canvas.cellWidth, height);
};


var game = new Object();
game.score = 0;
game.speed = 1;
game.frequency = 20;
game.level = "worm";
game.setScore = function() {
    document.getElementById('score').innerHTML = this.score;
};
game.updateLevel = function() {
    if(game.speed == 3) {
        game.level = "Speed Worm";
    }
    else if(game.speed > 3) {
        game.level = "Mega Worm";
    }
    document.getElementById('level').innerHTML = this.level;
};

canvas.drawBorder = function () {
    canvas.context.fillStyle = "Black";
    canvas.context.fillRect(0, 0, width, cw);
    canvas.context.fillRect(0, height - cw, width, cw);
    canvas.context.fillRect(0, 0, cw, height);
    canvas.context.fillRect(width - cw, 0, cw, height);
};


var ELEMENT = function (col, row) {
    this.col = col;
    this.row = row;
};

ELEMENT.prototype.drawSquare = function(color, border) {
    var x = this.col * cw;
    var y = this.row * cw;
    canvas.context.fillStyle = color;
    canvas.context.fillRect(x, y, cw, cw);
    canvas.context.strokeStyle = border;
    canvas.context.strokeRect(x, y, cw, cw)
};

ELEMENT.prototype.equal = function(otherELEMENT) {
    return this.col === otherELEMENT.col && this.row === otherELEMENT.row;
};

var Snake = function () {
    // draw snake
    this.segments = [
        new ELEMENT(7, 5),
        new ELEMENT(6, 5),
        new ELEMENT(5, 5),
        new ELEMENT(4, 5),
        new ELEMENT(3, 5)
    ];
    this.direction = "right";
    this.nextDirection = "down";
};


Snake.prototype.draw = function() {
    for(var i = 0; i < this.segments.length; i++){
        this.segments[i].drawSquare("black", "#99cc99");
    }
};




// todo

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

