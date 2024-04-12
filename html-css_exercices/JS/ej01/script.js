let changecontentButton = document.getElementById("changecontent");

changecontentButton.addEventListener('click', function(){
    let divCont = document.getElementById('contenido');
    divCont.textContent = 'Hola Mundo';
});