let prvi_igrac_opcije = "kamen", drugi_igrac_opcije, izabrana_opcija_drugi = 0;
izabrana_opcija_drugi = Math.ceil(Math.random() * 3);
if (izabrana_opcija_drugi == 1) {
    drugi_igrac_opcije = "kamen";
} else if (izabrana_opcija_drugi == 2) {
    drugi_igrac_opcije = "papir";
} else if (izabrana_opcija_drugi == 3) {
    drugi_igrac_opcije = "makaze";
}

console.log(prvi_igrac_opcije);
console.log(drugi_igrac_opcije);

if (drugi_igrac_opcije === prvi_igrac_opcije) {
    console.log("NERESENO!");
}else if ((drugi_igrac_opcije == "kamen" && prvi_igrac_opcije == "makaze") || (drugi_igrac_opcije == "makaze" && prvi_igrac_opcije == "papir") || (drugi_igrac_opcije == "papir" && prvi_igrac_opcije == "kamen")) {
    console.log("Drugi igrac je pobedio");
} else {
    console.log("Vi ste pobedili!");
}