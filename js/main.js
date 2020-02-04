// COUNTRY - LIVE PREVIEW
function countryLive() {
    let country = document.getElementById("country").value;
    document.getElementById("selectedcountry").innerHTML = country;
}

// NIF -LIVE PREVIEW AND VALIDATION
function nifLive() {
    let nif = document.getElementById("nif").value;
    document.getElementById("nifnum").innerHTML = nif;
    if (nif.length == 9 /* confirmar o que torna um nif valio para além do numero de numeros*/) {
        document.getElementById("nifvalidation").classList.add("valid");
    } else {
        document.getElementById("nifvalidation").classList.remove("valid");
    }
}

// LOGO COLOR - LIVE PREVIEW
function colorLive() {
    let logocolor = document.getElementById("color").value;
        document.getElementById("logo-color").style.backgroundColor = "#" + logocolor;
}