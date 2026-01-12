# p5.js Template - Physik Simulation

## 📖 Beschreibung
Ein Template für interaktive physikalische Simulationen mit p5.js.

## 🎯 Beispiel
Dieses Template demonstriert:
- Mehrere Bälle mit Gravitation
- Kollisionserkennung mit Wänden
- Energieverlust beim Aufprall
- Interaktive Steuerung (Mausklick, Tastatur)
- Visualisierung von Geschwindigkeitsvektoren

## 🛠️ Verwendung
1. Kopiere diesen Ordner nach `students/dein-name/dein-projekt/`
2. Passe `sketch.js` an für deine Simulation
3. Ändere Physik-Parameter, Grafik und Interaktion

## 📝 Code-Struktur

### index.html
- Lädt p5.js von CDN
- Styling für die Seite
- Container für Canvas

### sketch.js
- **setup()**: Initialisierung (läuft einmal)
- **draw()**: Hauptschleife (läuft 60x pro Sekunde)
- **Ball-Klasse**: Objektorientierte Programmierung
  - `update()`: Physik-Berechnungen
  - `checkBounds()`: Kollisionserkennung
  - `display()`: Zeichnen
- **Event Handler**: Maus- und Tastatur-Eingaben

## 🎨 p5.js Grundlagen

### Wichtige Funktionen
- `createCanvas(width, height)`: Canvas erstellen
- `background(color)`: Hintergrund zeichnen
- `circle(x, y, diameter)`: Kreis zeichnen
- `rect(x, y, width, height)`: Rechteck zeichnen
- `line(x1, y1, x2, y2)`: Linie zeichnen

### Farben und Stil
- `fill(r, g, b)`: Füllfarbe setzen
- `stroke(r, g, b)`: Randfarbe setzen
- `strokeWeight(thickness)`: Randdicke setzen

### Interaktion
- `mousePressed()`: Bei Mausklick
- `keyPressed()`: Bei Tastendruck
- `mouseX, mouseY`: Mausposition

## 💡 Ideen für Erweiterungen
- Pendel-Simulation
- Planetenbahnen
- Federsystem
- Flüssigkeitssimulation
- Kollision zwischen Bällen
- Unterschiedliche Massen
- Wind-Effekte
- Anziehungskräfte

## 🔗 Ressourcen
- [p5.js Referenz](https://p5js.org/reference/)
- [p5.js Beispiele](https://p5js.org/examples/)
- [p5.js Tutorial](https://p5js.org/learn/)
