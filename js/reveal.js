/* Reinfall Auflösungsseite. Rein lokal, keine Netzwerkzugriffe, keine Speicherung.
   Optional: ?s=email oder ?s=sms ändert nur die Reihenfolge der Lernkarten. */
(function () {
  var s = "";
  try { s = (new URLSearchParams(window.location.search).get("s") || "").toLowerCase(); } catch (e) {}
  var orders = {
    email: ["link", "eile", "frag"],
    sms:   ["eile", "link", "frag"]
  };
  var labels = { email: "Ihre E-Mail-Übung von Reinfall", sms: "Ihre SMS-Übung von Reinfall" };
  var order = orders[s];
  if (!order) return;
  var box = document.getElementById("cards");
  if (box) {
    order.forEach(function (id) {
      var el = box.querySelector('[data-id="' + id + '"]');
      if (el) box.appendChild(el);
    });
  }
  var k = document.getElementById("kanal");
  if (k && labels[s]) k.textContent = labels[s];
})();
