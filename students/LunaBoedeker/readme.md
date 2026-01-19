\# Auto-Simulation mit T-S-Diagramm



\## Übersicht



Diese Simulation zeigt zwei Autos (ein blaues und ein rotes Auto), die auf einer Straße fahren. Das blaue Auto hat eine Geschwindigkeit von 0,6 und das rote Auto eine Geschwindigkeit von 0,2. Die Autos interagieren miteinander, indem das blaue Auto versucht, das rote Auto zu überholen. Während der Simulation werden die Positionen der Autos über die Zeit in T-S-Diagrammen dargestellt.



\## Schritte der Entwicklung



\### 1. Grundstruktur der HTML-Datei

\- Erstellen der grundlegenden HTML-Struktur mit einem `<head>` und `<body>`.

\- Hinzufügen von CSS zur Gestaltung der Simulation.



\### 2. Darstellung der Autos

\- Erstellen von zwei Autos (blau und rot) als `<div>`-Elemente.

\- Festlegen der Positionen und Farben der Autos.



\### 3. Steuerungselemente

\- Hinzufügen von Steuerungselementen (Schieberegler und Buttons) zur Anpassung der Geschwindigkeiten der Autos und zum Zurücksetzen der Simulation.



\### 4. Animation der Autos

\- Implementierung einer Funktion zur Aktualisierung der Positionen der Autos basierend auf der Geschwindigkeit.

\- Verwendung von `requestAnimationFrame`, um die Animation flüssig zu gestalten.



\### 5. Interaktion zwischen den Autos

\- Implementierung einer Logik, die es dem blauen Auto ermöglicht, die Spur zu wechseln, wenn es in die Nähe des roten Autos kommt.

\- Festlegung von Bedingungen, unter denen das blaue Auto die Spur wieder zurückwechselt.



\### 6. T-S-Diagramme

\- Hinzufügen von zwei `<canvas>`-Elementen zur Darstellung der Positionen der Autos über die Zeit.

\- Implementierung der Logik zur Speicherung der Positionen der Autos in Arrays.

\- Zeichnen der T-S-Diagramme mit beschrifteten Achsen.



\### 7. Reset-Funktionalität

\- Implementierung einer Reset-Funktion, die die Positionen der Autos und die Zeit zurücksetzt und die Diagramme löscht.



\## Verwendung



1\. Öffne die HTML-Datei in einem Webbrowser.

2\. Stelle die Geschwindigkeiten der Autos mit den Schiebereglern ein.

3\. Klicke auf "Zurücksetzen", um die Simulation zu starten.

4\. Beobachte die Autos, wie sie sich bewegen und interagieren.

5\. Sieh dir die T-S-Diagramme an, um die Positionen der Autos über die Zeit zu verfolgen.



\## Fazit



Diese Simulation bietet eine einfache Möglichkeit, die Interaktion zwischen zwei Autos auf einer Straße zu beobachten, während gleichzeitig die Positionen der Autos visuell in T-S-Diagrammen dargestellt werden. Sie kann weiter verbessert werden, um zusätzliche Funktionen und Interaktionen hinzuzufügen.





