# Beiträge zu JG11 Apps

## 🎯 So lädst du deine Simulation hoch

### Schritt 1: Repository forken
1. Klicke auf "Fork" oben rechts auf der GitHub-Seite
2. Dadurch wird eine Kopie des Repositories in deinem GitHub-Account erstellt

### Schritt 2: Dein Projekt-Ordner erstellen
1. Erstelle einen neuen Ordner unter `students/` mit deinem Namen (z.B. `students/max-mustermann/`)
2. Benenne dein Projekt aussagekräftig (z.B. `students/max-mustermann/freier-fall/`)

### Schritt 3: Dateien hochladen
Lade deine Dateien in deinen Projekt-Ordner hoch:
- `index.html` - Hauptdatei deiner Simulation
- `sketch.js` - (optional) für p5.js-Projekte
- `style.css` - (optional) für eigenes Styling
- Weitere JavaScript-Dateien nach Bedarf

### Schritt 4: README erstellen
Erstelle eine `README.md` in deinem Projekt-Ordner mit:
```markdown
# [Projekt-Name]

## Beschreibung
[Kurze Beschreibung der Simulation]

## Physikalische Konzepte
- [Konzept 1]
- [Konzept 2]

## Autor
[Dein Name]
```

### Schritt 5: Pull Request erstellen
1. Committe deine Änderungen
2. Pushe zu deinem Fork
3. Erstelle einen Pull Request zum Haupt-Repository
4. Beschreibe kurz, was deine Simulation macht

## 📋 Richtlinien

### Dateistruktur
```
students/
└── dein-name/
    └── projekt-name/
        ├── index.html
        ├── sketch.js (optional)
        ├── style.css (optional)
        └── README.md
```

### Code-Richtlinien
- ✅ Verwende aussagekräftige Variablennamen
- ✅ Kommentiere deinen Code
- ✅ Teste deine Simulation lokal, bevor du sie hochlädst
- ✅ Stelle sicher, dass alle Pfade relativ sind
- ❌ Keine absoluten Pfade verwenden
- ❌ Keine großen Dateien (>5MB) hochladen

### Inhaltliche Anforderungen
- Die Simulation muss ein physikalisches Konzept demonstrieren
- Die Simulation sollte interaktiv sein (wenn möglich)
- Der Code sollte sauber und verständlich sein

## 🛠️ Templates verwenden

Du kannst eines der bereitgestellten Templates als Startpunkt nutzen:

### HTML Template
Kopiere den Inhalt von `templates/html-template/` für eine einfache Canvas-basierte Simulation.

### p5.js Template
Kopiere den Inhalt von `templates/p5js-template/` für eine p5.js-basierte Simulation.

## ❓ Hilfe

Bei Fragen oder Problemen:
1. Schaue dir die Templates an
2. Frage deine Mitschüler
3. Frage deinen Lehrer
4. Erstelle ein Issue auf GitHub

## 📝 Beispiel Pull Request Titel

- "Freier Fall Simulation - Max Mustermann hinzugefügt"
- "Pendel Simulation - Anna Schmidt"
- "Schräger Wurf - Tom Weber"

Viel Erfolg mit deinen Simulationen! 🚀
