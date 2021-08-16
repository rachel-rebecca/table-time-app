"use strict";

let btnCasual = document.querySelector("#btnCasual");
btnCasual.addEventListener("click", () => {
    document.querySelector("#programsTherapy").style.display = "none";
    document.querySelector("#programsCasual").style.display = "block";
})

let btnTherapy = document.querySelector("#btnTherapy");
btnTherapy.addEventListener("click", () => {
    document.querySelector("#programsTherapy").style.display = "block";
    document.querySelector("#programsCasual").style.display = "none";
})