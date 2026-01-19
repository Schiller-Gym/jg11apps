# Kaffee-Abkühlung Simulation 2026

Diese interaktive Web-Applikation simuliert den physikalischen Prozess der Wärmeübertragung einer Kaffeetasse an ihre Umgebung. 
Die Anwendung kombiniert wissenschaftliche Berechnung mit dynamischer visueller Rückmeldun
## 📖 Zusammenfassung & Anleitung

### 1. Die physikalische Grundlage
Das Herzstück der Simulation ist das **Newtonsche Abkühlgesetz**. Es beschreibt, dass die Abkühlgeschwindigkeit proportional 
zur Differenz zwischen Kaffee- und Raumtemperatur ist. Das bedeutet: Je heißer der Kaffee im Vergleich zum Zimmer ist, desto 
schneller verliert er an Temperatur.

### 2. Bedienung der Simulation
Bevor Sie die Simulation starten, können Sie über die Schieberegler verschiedene Parameter festlegen:
*   **Kaffeemenge (ml):** Bestimmt die thermische Masse. Mehr Flüssigkeit speichert Wärme länger.
*   **Anfangstemperatur (°C):** Der Startpunkt Ihres Kaffees.
*   **Raumtemperatur (°C):** Das Ziel der Abkühlung. Der Kaffee wird nie kälter als dieser Wert.
*   **Isolation:** Simuliert das Material der Tasse. Ein hoher Wert steht für eine bessere Isolierung (z.B. eine Thermotasse).
*   **Zeitfaktor:** Hiermit steuern Sie die Geschwindigkeit der Simulation (Zeitraffer-Effekt).

### 3. Was während der Simulation passiert
Sobald Sie auf **"Simulation starten"** klicken, greifen alle Elemente zeitsynchron ineinander:

*   **Die Tasse:** Der Füllstand passt sich der Menge an. Die Dicke des Tassenrandes verändert sich dynamisch je nach gewählter Isolation – ein dickerer Rand visualisiert eine stärkere Dämmung.
*   **Das Thermostat:** Das Thermometer zeigt die aktuelle Temperatur in Echtzeit an. Dabei verändert sich die Farbe der Säule fließend von **Rot (heiß)** über Violett nach **Blau (kalt)**.
*   **Die Stoppuhr:** Die virtuelle Zeit läuft oben mit und ist exakt auf das Diagramm und die Tabelle abgestimmt.
*   **Das Diagramm:** Hier entsteht eine rote Kurve, die den exponentiellen Temperaturabfall zeigt. Sie können live beobachten, wie die Kurve flacher wird, je mehr sich der Kaffee der Raumtemperatur annähert.
*   **Die Tabelle:** Auf der rechten Seite werden alle Daten pro Minute protokolliert, sodass Sie die exakten Werte jederzeit ablesen können.

### 4. Ziel der Anwendung
Die Simulation verdeutlicht im Jahr 2026 auf anschauliche Weise, wie Variablen wie Volumen und Isolation die thermische Trägheit 
beeinflussen. Sie macht die unsichtbare Physik der Thermodynamik durch das Zusammenspiel von Steuerungselementen und Grafiken direkt begreifbar.

---
**Technische Details:** 
Entwickelt mit HTML5, CSS3 und JavaScript. Die Darstellung erfolgt ohne externe Bibliotheken direkt im Browser.


