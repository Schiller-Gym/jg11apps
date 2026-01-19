### Übersicht  
Dieses Repository enthält eine **physikalisch korrekte 2‑D‑Simulation** von zwei Würfeln, die in einem rechteckigen Raum mit einstellbarer Reibung und einem festen linken Wandkörper agieren.  
Zusätzlich werden **Live‑Diagramme** für Geschwindigkeit, kinetische Energie und Impuls beider Würfel angezeigt.  
Ein **Pause/Weiter‑Button** ermöglicht das Anhalten der Simulation, und ein dezentes Wasserzeichen kennzeichnet das Werk.

---

### Funktionen  

| Feature | Beschreibung |
|---------|--------------|
| **Zwei Würfel** | Roter Würfel (links) und blauer Würfel (rechts). Der blaue Würfel fährt mit konstanter Anfangsgeschwindigkeit nach links. |
| **Wand** | Unbewegliche linke Wand (x = 0). |
| **Reibungsprofile** | Keine, Erde (µ≈0.6) oder Mond (µ≈0.1). |
| **Zeit‑Skalierung** | Slider von 0.1× – 3× zur Beschleunigung bzw. Verlangsamung der Simulation. |
| **Live‑Diagramme** | Chart.js‑Plots für: <br>• Geschwindigkeit (m/s) <br>• Kinetische Energie (J) <br>• Impuls (kg·m/s) |
| **Pause/Weiter** | Button stoppt die Berechnung, ein zweiter Klick setzt sie fort. |
| **Kollisionszählung** | Anzeige der gesamten Anzahl an Wand‑ und Würfel‑Kollisionen. |
| **Wasserzeichen** | „made by eljas diekmann“ in der rechten unteren Ecke. |
| **Kein Build‑Tool** | Läuft komplett im Browser – keine Installation nötig. |

---

### Voraussetzungen  

| Voraussetzung | Hinweis |
|---------------|---------|
| **Webbrowser** | Aktueller Chrome, Firefox, Edge oder Safari (unterstützt `requestAnimationFrame` und Canvas). |
| **Internet** | Für das Laden von Chart.js über das CDN (`https://cdn.jsdelivr.net/npm/chart.js`). |
| **Optional** | Lokaler HTTP‑Server (z. B. `python -m http.server`) für bessere Dateizugriffs‑Sicherheit. |

---

### Installation & Ausführung  

1. **Repository klonen oder herunterladen**  
   ```bash
   git clone https://github.com/DEIN-USERNAME/wuerfel-simulation.git
   cd wuerfel-simulation
   ```

2. **Datei öffnen**  
   - Doppelklick auf `index.html` **oder**  
   - Starte einen lokalen Server (empfohlen, um CORS‑Probleme zu vermeiden):  
     ```bash
     # Python 3.x
     python -m http.server 8000
     # dann im Browser http://localhost:8000 öffnen
     ```

3. **Simulation starten**  
   - Trage gewünschte Massen, Anfangsgeschwindigkeit und Reibungsprofil ein.  
   - Klicke **„Start“**.  
   - Beobachte die Bewegung im Canvas und die Diagramme darunter.

4. **Steuerung**  
   - **Zeit‑Skala:** Schiebe den Slider, um die Simulation zu beschleunigen oder zu verlangsamen.  
   - **Pause/Weiter:** Klick auf den **„Pause“**‑Button, um die Berechnung anzuhalten; der Button wechselt zu **„Weiter“**.  
   - **Neustart:** Ändere Eingabewerte und drücke erneut **„Start“**.

---

### Anpassungen & Erweiterungen  

| Anpassung | Wie |
|-----------|-----|
| **Andere Größen** | Ändere `CUBE_SIZE`, `LEFT_CUBE_X0` oder `GAP_BETWEEN_CUBES` im JavaScript‑Abschnitt „Konstanten“. |
| **Elastizität** | Setze `ELASTIC_COEFF` (0 = vollständig inelastisch, 1 = perfekt elastisch). |
| **Weitere Diagramme** | Kopiere das Chart‑Setup und füge neue Datensätze hinzu (z. B. Position vs. Zeit). |
| **Offline‑Chart.js** | Lade die Bibliothek herunter und ersetze die CDN‑Zeile durch `<script src="chart.min.js"></script>`. |
| **Mehr Würfel** | Implementiere zusätzliche Objekte, indem du weitere Positions‑/Geschwindigkeits‑Variablen und Kollisionslogik hinzufügst. |

---

### Bekannte Einschränkungen  

- **1‑D‑Physik:** Die Simulation behandelt nur die x‑Richtung (keine Rotation, kein Y‑Bewegung).  
- **Perfekte Elastizität:** Standardmäßig ist `ELASTIC_COEFF = 1`. Für reale Materialien muss ein kleinerer Wert gewählt werden.  
- **Performance:** Bei sehr hoher Zeit‑Skala kann das Zeichnen der Diagramme die Bildrate leicht reduzieren; das Intervall kann über `if (timeData.length % 5 === 0)` angepasst werden.  

---

### Lizenz & Hinweis  

Der Code ist **frei verfügbar** und darf für private, akademische oder kommerzielle Projekte verwendet werden, solange der Urheber (Eljas Diekmann) genannt wird.  

---

### Beispiel‑HTML (zur Referenz)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Würfel‑Kollisions‑Simulator</title>
  <style>
    /* (siehe vollständigen Code im Repository) */
  </style>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
<body>
  <!-- UI, Canvas, Diagramme und Wasserzeichen wie im vollständigen Code -->
  <script>
    // JavaScript‑Logik (Konstanten, UI‑Handler, Simulation, Rendering)
  </script>
</body>
</html>
```

--- 

Viel Spaß beim Experimentieren und Weiterentwickeln! 🚀