Inhalt
Überblick
Voraussetzungen
Installation und Start
Bedienung
Parameterbeschreibung
Anzeige und Zustände
Optionaler globaler Reset
Tipps zur Exploration
Technische Hinweise
Lizenzhinweis (Platzhalter)
Überblick
Diese Simulation stellt ein vereinfachtes Infektionsgeschehen als bewegte Punkte auf einer Zeichenfläche (Canvas) dar. Punkte repräsentieren Individuen und wechseln abhängig von Nähe und Zeit zwischen den Zuständen gesund, infiziert, immun und tot. Infektionen entstehen durch räumliche Nähe. Nach Ablauf der Infektionsdauer werden Punkte entweder immun oder sterben mit einer kleinen, konfigurierbaren Wahrscheinlichkeit. Alle relevanten Kennzahlen werden fortlaufend angezeigt.

Es liegen zwei HTML-Dateien vor:

Simulation ohne Sterblichkeit (SIR mit Immunität)
Simulation mit Sterblichkeit (SIR + D)
Beide Dateien sind jeweils eigenständig lauffähig.

Voraussetzungen
Ein moderner Webbrowser (z. B. Chrome, Firefox, Edge, Safari)
Keine zusätzlichen Bibliotheken erforderlich
Optional: Ein lokaler Webserver zur konsistenten Darstellung, ist aber nicht zwingend nötig
Installation und Start
Die gewünschte HTML-Datei lokal speichern:
Ohne Sterblichkeit: z. B. simulation.html
Mit Sterblichkeit: z. B. simulation_mit_tot.html
Datei per Doppelklick im Browser öffnen oder über das Kontextmenü „Öffnen mit …“ auswählen.
Die Simulation startet automatisch. Über die Steuerung lassen sich Parameter zur Laufzeit anpassen.
Bedienung
Start/Pause: Simulation anhalten oder fortsetzen.
Zurücksetzen: Simulation mit aktuellen Parametern neu initialisieren.
Regler und Eingabefelder: Parameter während des Betriebs ändern. Änderungen wirken je nach Parameter sofort oder bei neuen Infektionen (siehe unten).
Parameterbeschreibung
Anzahl Punkte:

Gesamtzahl der simulierten Individuen (Standard: 120; Bereich: 5–600).
Anfänglich infiziert (%):

Anteil der Startpopulation, der zu Beginn infiziert ist (Standard: 6 %). Bei 0 % wird mindestens ein Punkt infiziert, um die Dynamik zu gewährleisten.
Geschwindigkeit:

Skaliert die Bewegungsgeschwindigkeit aller lebenden Punkte. Wirkt unmittelbar.
Infektionsradius:

Nähe-Schwelle (in Pixeln), innerhalb derer ein infizierter Punkt gesunde Punkte ansteckt. Wirkt unmittelbar. Infizierte zeigen den Radius als transparente Halo.
Infektionsdauer (Sek.):

Zeitspanne, die ein Punkt nach Infektion im Zustand „infiziert“ verbleibt. Nach Ablauf erfolgt der Übergang:
Ohne Sterblichkeit: zu „immun“.
Mit Sterblichkeit: zu „immun“ oder „tot“.
Wirkt für neu eintretende Infektionen; laufende Infektionen behalten die bei ihrer Entstehung gesetzte Endzeit.
Sterblichkeitsrate (%; nur in der Datei mit Sterblichkeit):

Wahrscheinlichkeit, mit der ein infizierter Punkt am Ende der Infektion stirbt (Standard: 6 %, begrenzt auf niedrige Werte). Wirkt beim Übergang von „infiziert“ zu „immun/tot“ und kann daher den Ausgang aktueller Infektionen beeinflussen.
Reset-Optionen:

Globaler Reset aktivieren:
Wenn alle lebenden Punkte mindestens einmal infiziert waren, startet ein Countdown.
Reset-Verzögerung (Sek.):
Zeit bis zur Ausführung des Resets.
Nach Reset neu infizieren:
Optional wird nach dem Reset ein lebender Punkt erneut infiziert, um die Dynamik fortzusetzen.
Anzeige und Zustände
Zustände und Farben:

Gesund: grün
Infiziert: rot
Immun: blau
Tot (nur in der Datei mit Sterblichkeit): grau, unbeweglich
Kennzahlen:

Gesund, Krank (infiziert), Immun, Gestorben (nur mit Sterblichkeit), Jemals infiziert
„Jemals infiziert“ erhöht sich, sobald ein Punkt erstmals infiziert wird, und bleibt bestehen, unabhängig vom späteren Zustand.

Optionaler globaler Reset
Bedingung:
Alle lebenden Punkte wurden irgendwann einmal infiziert.
Ablauf:
Ein Countdown informiert über die verbleibenden Sekunden.
Nach Ablauf werden alle lebenden Punkte wieder gesund gesetzt und ihre „jemals infiziert“-Markierung entfernt.
Tote bleiben unverändert (grau und unbeweglich).
Optional wird ein Punkt direkt wieder infiziert, um die Ausbreitung neu zu starten.
Tipps zur Exploration
Größerer Infektionsradius und längere Infektionsdauer erhöhen die Kontakt- und Infektionshäufigkeit.
Eine kleine Sterblichkeitsrate (z. B. 2–8 %) hält die Anzahl der Todesfälle gering, macht den Effekt aber sichtbar.
Höhere Geschwindigkeit führt zu häufigeren Begegnungen und beschleunigt die Dynamik.
Über den globalen Reset lässt sich ein wiederkehrender Zyklus aus Ausbreitung, Immunität und Neuansteckung beobachten.
Technische Hinweise
Die Simulation nutzt HTML Canvas und JavaScript ohne externe Abhängigkeiten.
Distanzprüfungen erfolgen paarweise (O(n²)); bei sehr großen Punktzahlen können die Frameraten sinken.
Die Canvas-Größe passt sich bei Fensteränderungen an; die Darstellung berücksichtigt die Gerätepixeldichte (HiDPI).
Überschneidungen von Punkten werden durch eine leichte Abstoßung reduziert, um dauerhaftes „Kleben“ zu vermeiden.
Tote Punkte bleiben unbeweglich; zur Vermeidung geometrischer Überschneidungen können sie minimal verschoben werden, behalten aber Geschwindigkeit 0.
