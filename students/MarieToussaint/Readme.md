Bremsweg-Simulation
Kleine, selbstenthaltende HTML/JavaScript-Simulation zur Visualisierung von Reaktionsweg und Bremsweg auf Asphalt oder Eis. Einfach die Datei im Browser öffnen — keine externen Abhängigkeiten.

Inhalt
index.html — kompletter Code (HTML, CSS, JS) für die Simulation, Canvas-Ansicht, Steuerung und CSV-Export.
Features
Einstellbare Parameter:
Geschwindigkeit v (km/h) — Slider
Masse m (kg) — Number (wird in CSV gespeichert)
Straßenbedingung — Asphalt (μ = 0.80) oder Eis (μ = 0.10)
Reaktionszeit (s)
Berechnete Werte:
Reaktionsweg, Bremsverzögerung, Bremsweg, Gesamtbremsweg, Zeit bis Stillstand
Animation des Fahrzeugs entlang der berechneten Strecke
Visuelle Pfützen bei Eis (zufällig generiert)
CSV-Export mit Zeitschritt-Daten:
Spalten: v_kmh, masse_kg, t_s, geschwindigkeit_m_s, position_m, reibung_mu
Reset-Funktion
Physikalisches Modell (Kurz)
Gravitation: g = 9.81 m/s²
Verzögerung: a = μ * g (konstant)
Umrechnung: v (m/s) = v_kmh / 3.6
t_brake = v / a
s_reaction = v * reactionTime
s_brake = v² / (2*a)
s_total = s_reaction + s_brake
Einschränkungen: kein Rollwiderstand, keine Aerodynamik, keine ABS-/ESP-Modellierung, konstantes μ.

Nutzung
Datei index.html lokal speichern (kompletter Code ist in einer Datei).
Im Browser öffnen.
Parameter anpassen.
"Start" drücken — Animation und Kennwerte erscheinen.
"CSV exportieren" herunterladen (nachdem Simulation gelaufen ist).
"Reset" setzt Anzeige und Canvas zurück.
Implementierungsdetails (Kurz)
Canvas 1000×160 px; Strecke skaliert automatisch (pxPerM).
Zeitdiskrete Integration mit dt = 0.02 s; Erzeugung von Records (t, v, x).
Animation per requestAnimationFrame über die Records.
Pfützen: generatePuddles(totalMeters) erzeugt 3–10 zufällige Pfützen (nur bei Eis).
Masse wird in die CSV geschrieben, beeinflusst aufgrund des gewählten Modells (a = μg) jedoch nicht die Bremswerte.
CSV-Format
Header: v_kmh,masse_kg,t_s,geschwindigkeit_m_s,position_m,reibung_mu

Beispielzeile:
80,1500,0.0200,22.222222,0.444444,0.1

Hinweise
Pfützengenerierung ist zufällig — gleiche Parameter können unterschiedliche visuelle Darstellungen ergeben.
Modell ist vereinfachend und dient der Veranschaulichung; nicht für sicherheitskritische Anwendungen verwenden.
Lizenz
Freie Nutzung und Modifikation für Bildungs- und Demonstrationszwecke. Keine Haftung.

Wenn du möchtest, erstelle ich die README.md als Datei zum Herunterladen oder passe Sprache bzw. Länge an.