# 🚗 Verkehrsstau-Simulation (Rundstraße nur vor Bremsereignis)

Diese Simulation zeigt das Verhalten von Fahrzeugen auf einer **Rundstraße**, bei der die Autos nur dann auf die andere Seite zurückkehren, wenn **noch kein Bremsereignis** eingetreten ist. Sobald das erste Auto bremst, wird der "Rundstraßen"-Effekt deaktiviert, und die Fahrzeuge verharren an ihrer Position, bis sie wieder beschleunigen.

## 📜 Funktionsweise

- **Rundstraße:** Die Fahrzeuge bewegen sich auf einer virtuellen Rundstraße und erscheinen auf der linken Seite, sobald sie das Ende des Bildschirms überschreiten – jedoch nur **vor einem Bremsereignis**.
- **Bremsereignis:** Wenn das erste Auto bremst, bremsen alle nachfolgenden Autos ebenfalls, abhängig von ihrem Abstand zueinander. Nachdem sie gebremst haben und ausreichend Abstand haben, beschleunigen sie wieder.
- **Geschwindigkeitsregler:** Die Geschwindigkeit aller Autos wird durch einen **einzigen Schieberegler** eingestellt, der den gesamten Verkehr beeinflusst.
- **Abstand:** Der Abstand zwischen den Fahrzeugen wird automatisch berechnet und simuliert.

## 🔧 Funktionen

- **🚨 Vorderes Auto bremst:** Löst das Bremsereignis des ersten Fahrzeugs aus, woraufhin alle anderen Fahrzeuge reagieren.
- **🔄 Reset:** Setzt die Simulation zurück und startet sie neu, wobei alle Autos an ihren Startpositionen erscheinen.
- **Geschwindigkeitsregler:** Bestimmt die Geschwindigkeit der Fahrzeuge in km/h.
- **Abstand:** Der Abstand zwischen den Fahrzeugen wird intern gesteuert, um realistische Verkehrsdynamiken zu simulieren.

---

## 🚀 Installation und Nutzung

1. **Klonen oder herunterladen**:
   - Klone oder lade das Repository herunter, um die Dateien auf deinem lokalen Rechner zu speichern.

   ```bash
   git clone <Repository-URL>
