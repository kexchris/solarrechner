
document.getElementById("solarForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const leistung = parseFloat(document.getElementById("leistung").value);
  const stunden = parseFloat(document.getElementById("stunden").value);
  const strompreis = parseFloat(document.getElementById("strompreis").value);

  const tagesErtragKWh = (leistung * stunden) / 1000;
  const geldErsparnis = tagesErtragKWh * strompreis;

  const ergebnis = document.getElementById("ergebnis");
  ergebnis.innerHTML = `<p><strong>Täglicher Solarertrag:</strong> ${tagesErtragKWh.toFixed(2)} kWh</p>
                        <p><strong>Tägliche Ersparnis:</strong> ${geldErsparnis.toFixed(2)} €</p>`;
});
