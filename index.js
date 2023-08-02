

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
var cuentas = [
    { nombre: 'Mali',
         saldo: 200 },
    { nombre: 'Gera', 
        saldo: 290 },
    { nombre: 'Maui',
         saldo: 67 },
  ];

const formulario =
document.getElementById('formulario')

function crearBienvenida(){
    formulario.classList.remove('formulario')
    formulario.classList.add('esconder')

    let parrafo = 
    document.createElement('p')
    parrafo.innerHTML = 'Ingresaste correctamente, Bienvenido!'

    let contenedorAtm = document.createElement('div');

    let render = 
    document.getElementById('renderArea')
    render.appendChild(parrafo)
    render.appendChild(contenedorAtm)

    let consultarSaldo = document.createElement('p');
    consultarSaldo.innerHTML = cuentas[0].saldo
    consultarSaldo.classList.add('consultarSaldo')

    let ingresarMonto = document.createElement('input')
    ingresarMonto.innerHTML = cuentas[0].saldo
    var contenedorIngresar = [
        contenedorIngresar.appendChild('input')
        document.getElementById('ingresar')
    ]

    let retirarMonto = document.createElement('input')
    retirarMonto.innerHTML = cuentas[0].saldo
    var contenedorRetiro = [
        contenedorRetiro.appendChild(input)
        document.getElementById('retirar')
    ]
    contenedorAtm.appendChild(consultarSaldo)
}

function validar(usuario, password){
    for(let index = 0; index <userDB.length; index++){
        

        if (usuario === "" && password === ""){
            console.log('entre')
            mostrarError('Usuario')
        }

        else if(usuario === userDB[index].user && password === userDB[index].pass){ 
           crearBienvenida();
            console.log('Bienvenido',usuario)
        }

         else{
            console.log('datosError')
            mostrarError('Datos')
        }
    }
}

function mostrarError(tipo){
    let errorAMostrar =
    document.getElementById(`error${tipo}`)

    console.log(errorAMostrar)

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



const cajero = () =>{
    
}
