
//codigo del footer
const botonConctacto = document.getElementById('botonContacto');
const listaDesplegableContacto = document.getElementById('listaDesplegableContacto-footer');
botonConctacto.addEventListener('click', desplegarMenuContacto);

function desplegarMenuContacto(){
    
       
    if(document.querySelector('.menuContacto')){

        document.querySelector('.menuContacto').classList.add('inactive');
        // abrirMenuContacto.removeChild('div')

    }else {
        
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
        

        listaDesplegableContacto.appendChild(abrirMenuContacto)
        listaDesplegableContacto.classList.remove('');
        
                
    }

}    

    

    // let celular = document.createElement('h3')
    // celular.textContent ="cel: 0000000000"
    // listaDesplegableContacto.appendChild(celular)

    // let correo = document.createElement('h3')
    // correo.textContent ="Correo electrónico:garritasfelinas@mail.com"
    // listaDesplegableContacto.appendChild(correo)
    // let escribenos = document.createElement('h3')
    // escribenos.textContent = "escribenos"
    // listaDesplegableContacto.appendChild(escribenos)
