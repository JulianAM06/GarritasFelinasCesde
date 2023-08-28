
//codigo del footer
const botonConctacto = document.getElementById('botonContacto');
// const listaDesplegableContacto = document.getElementById('listaDesplegableContacto-footer');

botonConctacto.addEventListener('click', desplegarMenuContacto);

function desplegarMenuContacto(){
    // console.log('funciona');
    
    // listaDesplegableContacto.appendChild(abrirMenuContacto)
    
    const abrirMenuContacto = document.createElement('div');
    abrirMenuContacto.classList.add('menuContacto');

    let celular = document.createElement('h3')
    celular.textContent ="cel :0000000000"
    abrirMenuContacto.appendChild(celular)

    let correo = document.createElement('h3')
    correo.textContent ="Correo electrónico:garritasfelinas@mail.com"
    abrirMenuContacto.appendChild(correo)

    let escribenos = document.createElement('h3')
    escribenos.textContent = "escribenos"
    abrirMenuContacto.appendChild(escribenos)

    

    // listaDesplegableContacto.classList.remove('inactive
    // let celular = document.createElement('h3')
    // celular.textContent ="cel: 0000000000"
    // listaDesplegableContacto.appendChild(celular)

    // let correo = document.createElement('h3')
    // correo.textContent ="Correo electrónico:garritasfelinas@mail.com"
    // listaDesplegableContacto.appendChild(correo)

    // let escribenos = document.createElement('h3')
    // escribenos.textContent = "escribenos"
    // listaDesplegableContacto.appendChild(escribenos)
}