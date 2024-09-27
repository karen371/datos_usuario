//funcion IIEF
const moduloUsuarios = (() => {
    const api = 'https://randomuser.me/api/?results=10';
    // Función asíncrona que hace la petición a la API
    const obtenerUsuario = async () => {
        try{
            const response = await fetch(api);
            const data = await response.json();
            return data.results;
        }
        catch(e){
            console.error('Error al obtener el la informacion de los usuarios', e);
        }
    };
    //funcion para mostar los elementos en el html
    const imprimirUsuarios = (usuarios) => {
        //llamada al div
        const div = document.getElementById('user-data');
        //recorrer el arreglo
        usuarios.forEach(usuario =>{
            //crear un nuevo div para la informacion
            const divdata = document.createElement('div');
            divdata.classList.add('usuario');
            //agregar una etiqueta p con el nombre
            const nombre = document.createElement('p');
            nombre.textContent = `${usuario.name.first} ${usuario.name.last}`
            //agregar una etiqueta p con el email
            const email = document.createElement('p');
            email.textContent = `${usuario.email}`
            //agregar una etiqueta img para la imagen 
            const img = document.createElement('img');
            img.src = usuario.picture.medium;
            img.alt = `${usuario.name.first} ${usuario.name.last}`;
            img.width = 100; 

            //agregar las etiquetas al contenedor creado
            divdata.appendChild(nombre);
            divdata.appendChild(email);
            divdata.appendChild(img);
            //agregar el div con los elementos en el div del html
            div.appendChild(divdata);
        });
    };
    //funcion para el proceso de carga
    const inicio = async () => {
        const usuario = await obtenerUsuario();
        if(usuario){
            imprimirUsuarios(usuario);
        }
    };
    inicio();
    // Retorna la funcion publica
    return{
        inicio
    };
})();
