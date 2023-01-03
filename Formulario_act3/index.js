
let contador = 0;

const valor = document.querySelector('#valor');
const boton = document.querySelectorAll('.boton');

boton.forEach(boton =>{
    boton.addEventListener('click', function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains('boton')){
            contador++;
        }
        else {
            contador = 0;
        }

        valor.textContent = contador;
    });
});