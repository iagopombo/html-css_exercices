function currentDate(){
    let date = Date.now();
    let divCont = document.getElementById('contenido');
    divCont.textContent = date;
}

setInterval(currentDate, 1000)