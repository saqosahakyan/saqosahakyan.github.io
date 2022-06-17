/*
document.getElementById("next").addEventListener("click", function() {
    if(passOne.value === passTwo.value && passTwo.value !== "") {
        alert("Successful");
        document.getElementById("next").onfocus = function() {
            location.href= "https://www.facebook.com/"
        }
    } else {
        alert("Try again")
    }
})
*/

const nextBtn = document.getElementById("next");
const email = document.getElementById("email");
const passOne = document.getElementById("passOne");
const passTwo = document.getElementById("passTwo");
const passRepeat = document.getElementById("pswRep");
const checkMail = document.getElementById("checkEmail");
const checkOne = document.getElementById("checkPassOne")
const checkTwo = document.getElementById("checkPassTwo");

const psw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$.!%*?&])[A-Za-z\d@$.!%*?&]{8,}$/;
const mail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

nextBtn.disabled = true;
passRepeat.hidden = true;
checkMail.hidden = true;
checkOne.hidden = true;
checkTwo.hidden = true;

email.onkeyup = function() {
    if(mail.test(email.value)) {
        checkMail.hidden = false;
    }
    else {
        checkMail.hidden = true;
    }
}

function log() {
    passOne.onkeyup = function() {
    if(psw.test(passOne.value)) {
        passRepeat.hidden=false;
        checkOne.hidden = false;
        
    } 
    else {
        passRepeat.hidden = true
        checkOne.hidden = true;
    }
    
    }

    passTwo.onkeyup = function() {
        if(passOne.value === passTwo.value){
            nextBtn.disabled = false;
            checkTwo.hidden = false;
        } else {
            nextBtn.disabled = true;
            checkTwo.hidden = true;
            passOne.onkeyup = function() {
                if(passOne.value === passTwo.value ) {
                    nextBtn.disabled = false;
                    checkTwo.hidden = false;
                    checkOne.hidden = false;
                } else {
                    checkOne.hidden = true;
                    checkTwo.hidden = true;
                    nextBtn.disabled = true;
                }
            }
        }
    }

}

log();

document.getElementById("delete").onclick = function(){
    nextBtn.disabled = true;
    passRepeat.hidden = true;
    checkOne.hidden = true;
    checkTwo.hidden = true;
    checkMail.hidden = true;
    log();
}

nextBtn.onclick = function() {
    var info = {
        logEmail: email.value,
        pass: passTwo.value,
    }
    var str = JSON.stringify(info);
    localStorage.setItem("register", str);
}

const email66 = document.getElementById("email66");
const pass66 = document.getElementById("pass66");
const logIn = document.getElementById("login")

logIn.onclick = function() {
    var parseEmail = JSON.parse(localStorage.getItem("register")).logEmail;
    var parsePass = JSON.parse(localStorage.getItem("register")).pass;

    if(email66.value === parseEmail && pass66.value === parsePass) {
        location.href = "https://www.facebook.com/";
    }

    else {
        alert("Մուտքի սխալ տվյալներ")
    }
};

function eyeOn(elemId) {
    document.getElementById(elemId).type = "text"
}

function eyeOff(elemId) {
    document.getElementById(elemId).type = "password"
}

function backButton() {
    document.getElementById("leftMenu").hidden = true
}

