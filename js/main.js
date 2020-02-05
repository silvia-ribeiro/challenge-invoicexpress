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

//Animations
function step1end() {
    //change dot status
    document.getElementById("step1num").className = "step-number-off";
    document.getElementById("step2num").className = "step-number";
    //change title status
    document.getElementById("step1title").className = "h2-off";
    document.getElementById("step2title").className = "h2-on";
    //fade-out step1
    document.getElementById("step1content").classList.remove("fade-in");
    document.getElementById("step1content").classList.add("fade-out");
    setTimeout(function () { document.getElementById("step1content").style.display = "none" }, 1000);
    //fade-in step2
    document.getElementById("step2content").classList.remove("fade-out");
    setTimeout(function () {
        document.getElementById("step2content").style.display = "block";
    }, 1000);
    setTimeout(function () {
        document.getElementById("step2content").classList.add("fade-in");
    }, 1000);
}

function step2end() {
    //change dot status
    document.getElementById("step1num").className = "step-number";
    document.getElementById("step2num").className = "step-number-off";
    //change title status
    document.getElementById("step1title").className = "h2-on";
    document.getElementById("step2title").className = "h2-off";
    //fade-out step2
    document.getElementById("step2content").classList.remove("fade-in");
    document.getElementById("step2content").classList.add("fade-out");
    setTimeout(function () { document.getElementById("step2content").style.display = "none" }, 1000);
    //fade-in step1
    document.getElementById("step1content").classList.remove("fade-out");
    setTimeout(function () {
        document.getElementById("step1content").style.display = "block";
    }, 1000);
    setTimeout(function () {
        document.getElementById("step1content").classList.add("fade-in");
    }, 1000);
}



