$(document).ready(function () {
    const lbl = document.getElementById("label");
    const txt = document.getElementById("txt");
    $("#txt").keyup(function (e) {
        lbl.innerText = txt.value
    });
});