// Physikalische Konstanten
const GRAVITY = 0.5;  // Beschleunigung nach unten
const BOUNCE = 0.8;   // Energieverlust beim Aufprall (80% bleiben)
const AIR_RESISTANCE = 0.99; // Luftwiderstand (sehr gering)

// Array für alle Bälle
let balls = [];

// Canvas-Setup
function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('canvas-container');
    
    // Starte mit ein paar Bällen
    for (let i = 0; i < 3; i++) {
        balls.push(new Ball(random(50, width - 50), random(50, 100)));
    }
}

// Hauptschleife
function draw() {
    background(240);
    
    // Boden zeichnen
    fill(50);
    rect(0, height - 10, width, 10);
    
    // Alle Bälle updaten und zeichnen
    for (let ball of balls) {
        ball.update();
        ball.checkBounds();
        ball.display();
    }
    
    // Anleitung
    fill(0);
    textSize(12);
    text('Klicke um Ball hinzuzufügen | Drücke R zum Reset', 10, 20);
    text(`Anzahl Bälle: ${balls.length}`, 10, 35);
}

// Ball-Klasse
class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);  // Zufällige Anfangsgeschwindigkeit
        this.vy = 0;
        this.radius = random(10, 25);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
    }
    
    // Physik updaten
    update() {
        // Gravitation anwenden
        this.vy += GRAVITY;
        
        // Position updaten
        this.x += this.vx;
        this.y += this.vy;
        
        // Luftwiderstand (vereinfacht: gleicher Koeffizient für beide Richtungen)
        // Hinweis: Realer Luftwiderstand hängt von Geschwindigkeit und Richtung ab
        this.vx *= AIR_RESISTANCE;
        this.vy *= AIR_RESISTANCE;
    }
    
    // Kollision mit Wänden prüfen
    checkBounds() {
        // Boden
        if (this.y + this.radius > height - 10) {
            this.y = height - 10 - this.radius;
            this.vy *= -BOUNCE;
            
            // Ball stoppt wenn zu langsam
            if (abs(this.vy) < 0.5) {
                this.vy = 0;
            }
        }
        
        // Decke
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.vy *= -BOUNCE;
        }
        
        // Linke Wand
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.vx *= -BOUNCE;
        }
        
        // Rechte Wand
        if (this.x + this.radius > width) {
            this.x = width - this.radius;
            this.vx *= -BOUNCE;
        }
    }
    
    // Ball zeichnen
    display() {
        fill(this.color);
        stroke(0);
        strokeWeight(2);
        circle(this.x, this.y, this.radius * 2);
        
        // Geschwindigkeitsvektor zeichnen (optional)
        stroke(255, 0, 0);
        line(this.x, this.y, this.x + this.vx * 5, this.y + this.vy * 5);
    }
}

// Mausklick: Ball hinzufügen
function mousePressed() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        balls.push(new Ball(mouseX, mouseY));
    }
}

// Tastatur: R zum Reset
function keyPressed() {
    if (key === 'r' || key === 'R') {
        balls = [];
        for (let i = 0; i < 3; i++) {
            balls.push(new Ball(random(50, width - 50), random(50, 100)));
        }
    }
}
