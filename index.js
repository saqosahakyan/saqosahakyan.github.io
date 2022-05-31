
// mutq sexmeluc bacvi modal login parol
// mutqi koxq@ stexcmen knopka .grancvel anunov, vorin sexmeluc kbaci modal u kpahanji email, parol, u kkrnkel parol@
// erb vor datark e dashter@ grancvelu ev mutq gorceluc heto tox patuhan bacvi ete parolner@ havasar exan tpi hajoxutyanb grancvel eq, kam ete havasar chen kama datak dasht ka tox tpi xndrunm em chisht lracreq
// multfilmer sexmeluc mtni urish eji multeri bajin
//iframe youtube texadrel im ejum  

//local storage-ov grancvem, heto mutq linem kayq local storage-i mijocov
//passwordi minimum length, uppercase, number

//match, math, spread, splice, search

/*
let key;
window.addEventListener("keydown", function (event) {
    key = event.key;
});

const type = document.getElementsByClassName("typeValue");


type[0].addEventListener("input", typeValue);

function typeValue() {

if(key === "a") {
    type[0].style.backgroundColor = "blue";
}
    console.log(key);
    
  
if(key === "b") {
    type[0].style.backgroundColor = "green";
}  
    
    console.log(type[0].value)
}
*/

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
/*
document.getElementById("next").onclick = function(){
    if(passOne.value === passTwo.value && passTwo.value !== "") {
        alert("Successful");
        document.getElementById("next"). onfocus = function() {
            location.href= "https://www.facebook.com/"
        }
    } else {
        alert("Try again")
    }
}
*/

// function verify() {
//     console.log()
//     var pass = passOne.value;
//     var passw = passTwo.value;
//     if (pass === passw && passw !== "") {
//         console.log("Դուք հաջողությամբ գրանցվել եք");
//         let saqo = document.getElementById("next");
//         // document.getElementById("next").onfocus = function (){
//             saqo.href = "https://www.facebook.com/"
//         // }

//     } else {
//         alert("Սխալ գաղտնաբառ")
//     
// }

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








//maail
// document.getElementById("email0").addEventListener("focus", function changeColor() {
//     document.getElementById("email0").style.backgroundColor="gray";
// })

// //search button
// document.getElementById("stop").onmouseover = function() {
//     // alert("Չի կարելի")
// }

// // element div
// const addText = document.createElement("p");
// addText.innerHTML = "Hello";
// document.getElementById("newDiv").appendChild(addText).style.color = "green";

// //button div
// const btn = document.createElement("button");
// btn.innerHTML = "Կոճակ";
// document.getElementById("leftMenu").appendChild(btn)

