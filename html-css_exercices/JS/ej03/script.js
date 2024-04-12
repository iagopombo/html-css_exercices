function currentDate(){
    let date = new Date();
    let divCont = document.getElementById('contenido');
    divCont.textContent = date;
}

setInterval(currentDate, 1000)