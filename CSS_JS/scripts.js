// JavaScript Document
//Wertenrechner
const Bett = "bett";
const Schulbuch = "buch";
const Solarlampe = "lampe";
const Essenspaket = "essen";
const Kleiderbox = "kleider";
const Stuhl = "stuhl";
const CHF = "chf";
const EUR = "eur";

const calc = () => {
  var fromBet = document.getElementById("fromBetrag");
  var fromDev = document.getElementById("fromDevisen");
  var toBet = document.getElementById("toBetrag");
  var toDev = document.getElementById("toDevisen");

  if (fromDev.value == CHF) {
    switch (toDev.value) {
      case Bett: //CHF 145.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.00689655172));
        break;
      case Schulbuch: //CHF 15.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.06666666667));
        break;
      case Solarlampe: //CHF 30.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.03333333333));
        break;
      case Essenspaket: //CHF 25.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.04));
        break;
      case Kleiderbox: //CHF 25.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.04));
        break;
      case Stuhl: //CHF 55.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.01818181818));
        break;
    }
  }

  if (fromDev.value == EUR) {
    switch (toDev.value) {
      case Bett: //EUR 125.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.008));
        break;
      case Schulbuch: //EUR 12.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.0833333333));
        break;
      case Solarlampe: //EUR 25.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.04));
        break;
      case Essenspaket: //EUR 20.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.05));
        break;
      case Kleiderbox: //EUR 20.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.05));
        break;
      case Stuhl: //EUR 40.-
        toBet.value = Math.floor(Math.fround(fromBet.value * 0.025));
        break;
    }
  }
};

//Bildgalerie
$(function() {
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

// MDB Lightbox Init
$(function() {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
