
//funksjon for å starte klokken
function startTime() {
var today = new Date(); // definerer ny dato
var h = today.getHours(); //får dagens timer
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('txt').innerHTML = h + ":" + m + ":" + s; //legger inn format for HTML koden
var t = setTimeout(startTime, 500); //runs a function after a specified number of milliseconds

}

function checkTime(i) { //for å legge til 0 foran klokke start
    if(i < 10) {i = "0" + i};
    return i;
}
