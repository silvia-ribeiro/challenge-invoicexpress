// COUNTRY - LIVE PREVIEW
function countryLive() {
    let country = document.getElementById("country").value;
    document.getElementById("selectedcountry").innerHTML = country;
}

// NIF -LIVE PREVIEW AND VALIDATION
function nifLive() {
    //live preview:
    let nif = document.getElementById("nif").value;
    document.getElementById("nifnum").innerHTML = nif;
    //validation:
    if (nif.length == 9) {                                                                  //nif have 9 numbers       
        let p = nif.charAt(0);
        if (p == '1' || p == '2' || p == '5' || p == '6' || p == '8' || p == '9') {           //nif first number has to be 1 or 2 (ind person) 5,6,8 or 9 (collective person and business)
            //checkDigit
            const soma = nif[0] * 9 + nif[1] * 8 + nif[2] * 7 + nif[3] * 6 + nif[4] * 5 + nif[5] * 4 + nif[6] * 3 + nif[7] * 2;
            const resto = (Number(soma) % 11);
            let checkDigit = resto < 2 ? 0 : 11 - resto;
            if (checkDigit = nif.charAt(8)) {
                document.getElementById("nifvalidation").classList.add("valid");
            }
        }
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



