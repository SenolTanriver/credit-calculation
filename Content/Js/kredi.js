function krediHesapla() {

  let cekilenTutar = document.getElementById("CekilenTutar").value;
  let vadeListe = document.getElementById("vadeSayisi");
  vadeListe = vadeListe.options[vadeListe.selectedIndex].value;

  if (vadeListe == 12) {
    var toplamTutar = cekilenTutar * 1.1;
  }
  else if (vadeListe == 24){
    var toplamTutar = cekilenTutar * 1.2;
  }
  else if (vadeListe == 36){
    var toplamTutar = cekilenTutar * 1.3;
  }
  else if (vadeListe == 48){
    var toplamTutar = cekilenTutar * 1.4;
  }
  var aylikOdeme = toplamTutar / 12;

  document.getElementById("sonuc").innerHTML = "";
  document.getElementById("sonuc").innerHTML += "Toplam tutar: " + toplamTutar.toFixed(0) + "<br>";
  document.getElementById("sonuc").innerHTML += "Aylık ödeme: " + aylikOdeme.toFixed(2);
};
