Projektile‑Simulation – README
Inhaltsverzeichnis
Überblick
Dateistruktur
Installation & Ausführung
Bedienung
Spiel‑Mechanik im Detail
Anpassungen & Erweiterungen
Lizenz & Hinweis zum Audio‑Clip
Überblick
Dieses kleine Web‑Projekt demonstriert die klassische Projektile‑Simulation mit zusätzlichen Features:

feste linke, rechte und obere Wand (schwarze Ränder)
Projektil bleibt bei Wand‑Kollision 1 s stehen, fällt dann wieder nach unten
nach jedem Treffer wird Abstand und Höhe der Zielscheibe zufällig um 30 – 100 m verschoben
Schuss‑ und Treffer‑Zähler werden angezeigt
nach dem 2. Treffer erscheint kurz die Meldung „Good Shot“, nach dem 4. Treffer „Good aim“
nach 5 Treffern erscheint ein Overlay „YOU WON!!!“ und ein kurzer Ausschnitt von We Are the Champions (Audio‑Datei muss vom Nutzer bereitgestellt werden)
Zurücksetzen‑ und Neustart‑Button setzen das komplette Spiel (Zähler, Slider, Canvas) zurück
Die komplette Anwendung besteht aus einer einzigen HTML‑Datei (index.html).

Dateistruktur
          
projectile-simulation/
│
├─ index.html          ← Hauptdatei (enthält HTML, CSS & JavaScript)
└─ README.md           ← Diese Datei

        
Hinweis:
Das Audio‑Element im HTML verwendet einen Platzhalter‑Link. Ersetze ihn durch eine eigene, rechtlich einwandfreie MP3‑Datei (z. B. we-are-the-champions-snippet.mp3) im gleichen Verzeichnis oder passe den Pfad im <source>‑Tag an.
Installation & Ausführung
Repository / Ordner anlegen

BASH
mkdir projectile-simulation
cd projectile-simulation
# Datei index.html aus dem Repository hier ablegen
Datei öffnen

Doppelklick auf index.html (öffnet im Standard‑Browser) oder
Im Terminal: open index.html (macOS) / start index.html (Windows) / xdg-open index.html (Linux)
Optional – lokaler Web‑Server (für strengere Browser‑Sicherheitsrichtlinien)

BASH
# Python 3 (einfachster Weg)
python -m http.server 8000
# dann im Browser http://localhost:8000 öffnen
Keine Installation von npm‑Paketen oder Build‑Tools nötig.
Bedienung
UI‑Element	Funktion
Abstand‑Slider	Verschiebt die Zielscheibe horizontal (mind. 5 m, max. 300 m).
Höhen‑Slider	Verschiebt die Zielscheibe vertikal (5 – 125 m).
Anfangsgeschwindigkeit	Setzt die Abschuss‑Geschwindigkeit in m/s.
Abschusswinkel	Setzt den Abschuss‑Winkel in Grad (gegen die Horizontale).
Feuern	Startet einen Schuss von der festen Position (0,0).
Zurücksetzen	Setzt alles (Zähler, Slider, Canvas) auf die Ausgangswerte zurück.
Neustart (im „YOU WON!!!“-Overlay)	Gleiche Funktion wie Zurücksetzen, erscheint nur nach dem Gewinn.
Schüsse‑Anzeige	Zeigt, wie oft du bereits geschossen hast.
Treffer‑Anzeige	Zeigt, wie viele Treffer du erzielt hast.
Nachricht „Good Shot“ / „Good aim“	Wird nach dem 2. bzw. 4. Treffer für 1 s eingeblendet.
Spiel‑Mechanik im Detail
Startposition – Das Projektil beginnt immer bei (0,0) (linke untere Ecke).
Physik –
Horizontal: x(t) = v₀·cos(θ)·t
Vertikal: y(t) = v₀·sin(θ)·t – ½·g·t² (g = 9.81 m/s²)
Zeitschritt: Δt = 0.02 s.
Wand‑Kollision – Trifft das Projektil die linke, rechte oder obere Wand, werden vx und vy sofort auf 0 gesetzt und das Projektil bleibt 1 s stehen. Danach wirkt die Schwerkraft wieder und das Projektil fällt nach unten.
Boden‑Reset – Sobald das Projektil den Boden (y ≤ 0) berührt, wird es sofort auf die Ausgangsposition zurückgesetzt (Canvas wird neu gezeichnet).
Treffer‑Logik – Ein Treffer liegt vor, wenn der Abstand zwischen Projektil‑ und Zielscheiben‑Mittelpunkt ≤ Zielscheiben‑Radius (5 m).
Nach jedem Treffer –
Abstand und Höhe der Zielscheibe werden um ±30 – 100 m (zufällig) verändert, jedoch innerhalb ihrer definierten Maximal‑/Minimalwerte.
Der Schuss‑Zähler bleibt erhalten, der Treffer‑Zähler wird erhöht.
Beim 2. Treffer erscheint „Good Shot“, beim 4. Treffer „Good aim“ (je 1 s).
Beim 5. Treffer stoppt die Simulation, das Overlay „YOU WON!!!“ wird sichtbar und das Audio‑Snippet wird abgespielt.
Anpassungen & Erweiterungen
Was du ändern kannst	Wie
Pixel‑Skalierung	const pixelPerMeter = 2.5; im Skript – passe an, wenn du ein größeres oder kleineres Canvas nutzt.
Zielscheiben‑Radius	const targetRadius = 5; (Meter).
Wand‑Abstand	maxXWorld und maxYWorld werden automatisch aus Canvas‑Größe und pixelPerMeter berechnet.
Audio‑Clip	Ersetze <source src="https://example.com/we-are-the-champions-snippet.mp3"> durch den Pfad zu deiner MP3‑Datei.
Nachrichten‑Texte	Im Funktionsaufruf showMessage('Good Shot') bzw. showMessage('Good aim') anpassen.
Gewinn‑Bedingung	Ändere if (hitCount >= 5) zu einer anderen Zahl, falls du mehr oder weniger Treffer zum Sieg möchtest.
Lizenz & Hinweis zum Audio‑Clip
Der Quellcode (HTML, CSS, JavaScript) ist MIT‑lizenzfrei – du darfst ihn frei verwenden, modifizieren und weiterverbreiten.
Audio‑Material ist nicht im Repository enthalten. Bitte stelle sicher, dass du das Recht hast, das von dir eingebundene MP3‑Snippet zu nutzen (z. B. lizenzfreie Version, eigene Aufnahme oder rechtlich geklärte Nutzung).
Viel Spaß beim Ausprobieren und Anpassen! 🚀
