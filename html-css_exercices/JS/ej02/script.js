const colorsList = ["red", "green", "blue", "yellow", "orange", "purple"];

let colorsIndex = 0; 

function changeColor(){
    const contenido = document.getElementById('contenido');
    contenido.style.backgroundColor = colorsList[colorsIndex];
    colorsIndex++;
    if(colorsIndex >= colorsList.length){
        colorsIndex = 0;
    }
} 

setInterval(changeColor, 1000)