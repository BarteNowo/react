// 1

const nazwa = "Klawiatura bezprzewodowa";
let cena = 149.99;
let dostepny = true;
let kategorie = ["komputerowe", "elektroniczne"];

const produkt = {
    nazwa,
    cena,
    dostepny,
    kategorie
}

console.log(produkt)

// 2

const obliczCenePoRabacie = (cena, rabat) => { return ( cena - cena * rabat ) };

const sprawdzDostepnosc = (iloscNaMagazynie) => {return (iloscNaMagazynie > 0)};

const powitanieKlienta = (imie) => {return "Witaj," + imie + "!"};