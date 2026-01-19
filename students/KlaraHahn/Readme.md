# Anhalteweg-Simulation – Reaktionsweg + Bremsweg

## Übersicht

Diese Webanwendung simuliert den **Anhalteweg eines Autos**, aufgeteilt in **Reaktionsweg** und **Bremsweg**, basierend auf physikalisch korrekten Formeln.  
Die Simulation berücksichtigt:

- Geschwindigkeit des Autos
- Fahrzeugmasse
- Reaktionszeit des Fahrers
- Straßenbedingung (Asphalt oder Eis)

Das Auto fährt entlang einer Straße, wobei die **Längen von Reaktionsweg, Bremsweg und Gesamtanhalteweg animiert** dargestellt werden. Am Ende der Simulation erscheinen die genauen Werte in Metern, und die gesamte Zeit wird angezeigt.

---

## Physikalische Grundlagen

Die Simulation verwendet die folgenden Formeln:

1. **Reaktionsweg**  
   \[
   s_\text{Reaktionsweg} = v \cdot t_\text{Reaktion}
   \]  
   - \(v\) = Geschwindigkeit in m/s  
   - \(t_\text{Reaktion}\) = Reaktionszeit des Fahrers in Sekunden

2. **Bremsweg**  
   \[
   s_\text{Bremsweg} = \frac{v^2}{2 \cdot \mu \cdot g}
   \]  
   - \(v\) = Geschwindigkeit in m/s  
   - \(\mu\) = Reibungskoeffizient (Abhängig von Straßenbedingung)  
     - Asphalt: 0.7  
     - Eis: 0.15  
   - \(g = 9.81 \, \text{m/s²}\) = Erdbeschleunigung  

3. **Anhalteweg**  
   \[
   s_\text{Anhalteweg} = s_\text{Reaktionsweg} + s_\text{Bremsweg}
   \]

---

## Bedienungsanleitung

### 1. Steuerungselemente

- **Geschwindigkeit (km/h)**:  
  Schieberegler von 10 bis 160 km/h. Beeinflusst Reaktions- und Bremsweg.

- **Masse des Fahrzeugs (kg)**:  
  Schieberegler von 600 bis 4000 kg. (Optionaler Faktor zur späteren Erweiterung der Bremswegberechnung)

- **Reaktionszeit (s)**:  
  Schieberegler von 0.5 bis 2.5 s. Längere Reaktionszeiten erhöhen den Reaktionsweg.

- **Straßenbedingung**:  
  Auswahl zwischen Asphalt und Eis. Eis verlängert den Bremsweg aufgrund geringerem Reibungskoeffizienten.

- **Start-Button (▶)**:  
  Startet die Animation des Autos. Das Auto fährt den Reaktions- und Bremsweg entlang, während die Werte live angezeigt werden.

- **Reset-Button (⟲)**:  
  Setzt alle Werte und Animationen auf die Ausgangswerte zurück.

---

### 2. Anzeigeelemente

Während der Animation werden folgende Werte angezeigt:

- **Reaktionsweg (m)** – Länge des gelben Balkens
- **Bremsweg (m)** – Länge des roten Balkens
- **Anhalteweg (m)** – Summe aus Reaktions- und Bremsweg
- **Zeit (s)** – Vergangene Zeit seit Beginn der Bremsung

Die **Skalierung passt sich automatisch an**, sodass das Auto niemals aus dem Sichtbereich fährt, unabhängig von Geschwindigkeit oder Bremsweg.

---

### 3. Animationslogik

1. **Reaktionsphase**  
   - Auto fährt mit konstanter Geschwindigkeit.  
   - Gelber Balken (Reaktionsweg) wächst mit der Zeit.

2. **Bremsphase**  
   - Nach Ablauf der Reaktionszeit beginnt die Bremsung.  
   - Geschwindigkeit reduziert sich gemäß physikalischem Bremsgesetz.  
   - Roter Balken (Bremsweg) wächst proportional zur abnehmenden Geschwindigkeit.  

3. **Endphase**  
   - Auto stoppt.  
   - Reaktionsweg, Bremsweg und Anhalteweg werden als endgültige Werte angezeigt.

---

## Technische Details

- Implementiert mit **HTML, CSS, JavaScript**.  
- Skalierung der Straße erfolgt dynamisch anhand des **maximalen Anhaltewegs**, sodass das Auto immer sichtbar bleibt.  
- Werte werden in **Meter und Sekunden** ausgegeben, verständlich für deutsche Benutzer.

---

## Erweiterungsmöglichkeiten

- CSV-Export aller Werte (Geschwindigkeit, Bremsweg, Reaktionsweg, Anhalteweg, Zeit, Reibung)  
- Einfluss der Fahrzeugmasse auf den Bremsweg stärker sichtbar machen  
- Einfügen verschiedener Fahrzeugtypen mit unterschiedlichen Reibungswerten  
- Anzeige von Sicherheitsabständen in Echtzeit  

---

## Nutzungshinweise

- Browser: Moderne Browser (Chrome, Firefox, Edge, Safari) empfohlen.  
- Bildschirmgröße: Optimiert für Desktop und Tablet.  
- Keine Installation notwendig – einfach HTML-Datei öffnen.  

---

## Beispielwerte

| Geschwindigkeit | Reaktionszeit | Straße | Reaktionsweg (m) | Bremsweg (m) | Anhalteweg (m) |
|-----------------|---------------|--------|-----------------|--------------|----------------|
| 50 km/h         | 1.0 s         | Asphalt| 13.9            | 25.6         | 39.5           |
| 80 km/h         | 1.5 s         | Eis    | 33.3            | 170.9        | 204.2          |

*Die Werte werden live in der Simulation berechnet.*

---

## Autor

- Erstellt als Übungsprojekt zur **Veranschaulichung physikalischer Grundlagen des Anhaltewegs**.


