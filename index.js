import cajero from './cajero.js';

const userDB = [
    {
        user: 'jorge',
        pass: '123'
    },
    {
        user: 'jaime',
        pass: '234'
    },
    {
        user: 'erik',
        pass: '345'
    },
    {
        user: 'nadia',
        pass: '456'
    },
    {
        user: 'miguel',
        pass: '567'
    },
]

const formulario =
document.getElementById('formulario')

function crearBienvenida(){
    formulario.classList.remove('formulario')
    formulario.classList.add('esconder')

    let parrafo = 
    document.createElement('p')
    parrafo.innerHTML = 'Ingresaste correctamente, Bienvenido!'

    let render = document.getElementById('renderArea');
    render.appendChild(parrafo);
    setTimeout(() => {
        parrafo.classList.add('esconder');   
    }, 2000);
}

function validar(usuario, password){
    for(let index = 0; index <userDB.length; index++){
        

        if (usuario === "" && password === ""){
            mostrarError('Usuario')
        }

        else if(usuario === userDB[index].user && password === userDB[index].pass){ 
           crearBienvenida();
            console.log('Bienvenido',usuario);
            cajero(usuario)
        }

         else{
            mostrarError('Datos')
        }
    }
}

function mostrarError(tipo){
    let errorAMostrar =
    document.getElementById(`error${tipo}`)
    errorAMostrar.classList.remove('esconder')
    errorAMostrar.classList.add('error')
    setTimeout(()=>{
        errorAMostrar.classList.remove('error')
        errorAMostrar.classList.add('esconder')
    }, 4000)
}

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()

    let usuarioIngresado = 
    document.getElementById('usuarioHtml').value

    let passwordIngresado =
    document.getElementById('passwordHtml').value

    validar(usuarioIngresado, passwordIngresado)
})
