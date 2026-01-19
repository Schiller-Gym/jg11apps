README.md für das Fuchs-Hasen-Simulationsprojekt
Fuchs-Hasen-Simulation
Dieses Projekt ist eine Simulation des Prädator-Beute-Modells, das die Dynamik zwischen Füchsen und Hasen darstellt. Die Simulation basiert auf den Lotka-Volterra-Gleichungen und bietet eine visuelle Darstellung der Populationen sowie mathematische Analysen der Gleichgewichte.

Inhaltsverzeichnis
Projektübersicht
Funktionen
Installation
Benutzung
Mathematische Vorschau
Export-Funktion
Technologien
Lizenz
Projektübersicht
Die Fuchs-Hasen-Simulation visualisiert die Interaktionen zwischen Füchsen (Prädatoren) und Hasen (Beute) in einem Ökosystem. Die Benutzer können Parameter wie Wachstumsraten, Tragfähigkeit und Sterberaten anpassen, um zu sehen, wie sich die Populationen im Laufe der Zeit verändern.

Funktionen
Visuelle Darstellung: Zeigt die Populationen von Füchsen und Hasen in einem grünen Hintergrund.
Mathematische Analyse: Berechnet und zeigt Gleichgewichte, Stabilität und Sensitivitäten der Populationen.
Echtzeit-Updates: Aktualisiert die mathematische Vorschau sofort, wenn Parameter verändert werden.
Export-Funktion: Exportiert die aktuellen Werte und Berechnungen als JSON- oder CSV-Datei.
Installation
Klone das Repository:

BASH
git clone <repository-url>
cd <repository-directory>
Öffne die index.html-Datei in einem Webbrowser.
Benutzung
Parameter anpassen:

Stelle die Anfangswerte für Hasen und Füchse ein.
Ändere die Wachstumsraten (alpha, beta, gamma, delta) und die Tragfähigkeit (K).
Passe die Sekunden pro Jahr an.
Simulation starten:

Klicke auf „Start“, um die Simulation zu starten.
Die Populationen werden in Echtzeit aktualisiert und in einem Diagramm angezeigt.
Pause und Zurücksetzen:

Klicke auf „Pausieren“, um die Simulation anzuhalten.
Klicke auf „Zurücksetzen“, um die Simulation auf die Anfangswerte zurückzusetzen.
Mathematische Vorschau
Die mathematische Vorschau zeigt:

Gleichgewichte: Berechnungen für die Gleichgewichte R* (Hasen) und F* (Füchse).
Existenzbedingungen: Bedingungen für die Koexistenz von Füchsen und Hasen.
Stabilitätsanalyse: Spur und Determinante der Jacobi-Matrix, Eigenwerte und Stabilitätsklassifikation.
Sensitivitäten: Elastizitäten der Gleichgewichte gegenüber den Parametern.
Export-Funktion
JSON und CSV: Klicke auf die entsprechenden Buttons, um die aktuellen Werte und Berechnungen als JSON- oder CSV-Datei herunterzuladen.
Technologien
HTML5
CSS3
JavaScript
Chart.js (für Diagramme)
Lizenz
Dieses Projekt ist lizenziert unter der MIT-Lizenz. Weitere Informationen findest du in der LICENSE-Datei.