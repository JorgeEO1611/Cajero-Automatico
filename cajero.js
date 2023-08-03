var cuentas = [
    {user: 'jorge', saldo: 200},
    {user: 'jaime', saldo: 300},
    {user: 'erik', saldo: 400},
    {user: 'nadia', saldo: 500},
    {user: 'miguel', saldo: 600},
];

export default function cajero(usuario) {
    let resultado;

    for (let index = 0; index < cuentas.length; index++) {
        if (usuario === cuentas[index].user){
            const { saldo } = cuentas[index];
            console.log(saldo);
            resultado = saldo;
            console.log(resultado);
        }
    }
}

// console.log(resultado);

const render = document.getElementById('renderArea');
const contenedorAtm = document.createElement('section');

render.appendChild(contenedorAtm);

//Contenedor Saldo
    const consultarSaldo = document.createElement('p');
    consultarSaldo.innerHTML = cuentas[0].saldo;
    consultarSaldo.classList.add('consultarSaldo');

    contenedorAtm.appendChild(consultarSaldo);

//Contenedor Ingresar Monto
const ingresarMontoBox = document.createElement('section');
const ingresarMontoLabel = document.createElement('p');
const ingresarMontoInput = document.createElement('input');
const ingresarMontoBtn = document.createElement('button');

ingresarMontoLabel.innerHTML = 'Ingresar Monto';
ingresarMontoBtn.innerHTML = 'Ingresar Monto';

contenedorAtm.appendChild(ingresarMontoBox);

ingresarMontoBox.appendChild(ingresarMontoLabel);
ingresarMontoBox.appendChild(ingresarMontoInput);
ingresarMontoBox.appendChild(ingresarMontoBtn);

ingresarMontoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInput = ingresarMontoInput.value;
    result += parseInt(valueInput);
    consultarSaldo.innerHTML = result;
    ingresarMontoInput.value = '';
});

//Contenedor Retirar Monto 
const retirarMontoBox = document.createElement('section');
const retirarMontoLabel = document.createElement('p');
const retirarMontoInput = document.createElement('input');
const retirarMontoBtn = document.createElement('button');

retirarMontoLabel.innerHTML = 'Retirar Monto';
retirarMontoBtn.innerHTML = 'Retirar Monto';

contenedorAtm.appendChild(retirarMontoBox);

retirarMontoBox.appendChild(retirarMontoLabel);
retirarMontoBox.appendChild(retirarMontoInput);
retirarMontoBox.appendChild(retirarMontoBtn);

retirarMontoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInput = retirarMontoInput.value;
    result += parseInt(valueInput);
    consultarSaldo.innerHTML = result;
    ingresarMontoInput.value = '';
});
