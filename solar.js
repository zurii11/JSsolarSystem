let dist = 60;
let a = random(TWO_PI);

function setup() {
    canvas = createCanvas(1000, 800)
    sun = new Sun();
    planets = [];

    for (let i = 0; i < 8; i++) {
        planets[i] = new p1();
    }

    for (let i = 1; i < planets.length; i++) {
        planets[i].dist = planets[i-1].dist + 30;
    }
}

function draw() {
    background(10, 22, 20);
    translate(width/2, height/2);

    sun.show();
    for (let i = 0; i < planets.length; i++) {
        planets[i].show();
        planets[i].orbit();
    }
}

function Sun() {
    this.x = 0;
    this.y = 0;

    this.show = function() {
        fill(185, 247, 29)
        ellipse(this.x, this.y, 50)
    }
}

function p1() {
    this.x = sun.x;
    this.y = sun.y;
    this.angle = random(TWO_PI);
    this.speed = random(.02, 0.07);
    this.dist = dist;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.show = function() {
        push();
        fill(this.r, this.g, this.b);
        rotate(this.angle);
        translate(this.dist, 0);
        ellipse(this.x, this.y, 30);
        pop();
    }

    this.orbit = function() {
        this.angle += this.speed;
    }
}