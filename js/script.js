function buscarCoctel() {
    var nombreCoctel = document.getElementById('nombreCoctel').value;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreCoctel}`)
        .then(function (respuesta) {
            var cocteles = respuesta.data.drinks;
            if(cocteles) {
                var coctel = cocteles[0]; 
                document.getElementById('categoriaCoctel').value = coctel.strCategory;
                document.getElementById('instruccionesCoctel').value = coctel.strInstructions;
                var imagenCoctel = document.getElementById('imagenCoctel');
                imagenCoctel.src = coctel.strDrinkThumb;
                imagenCoctel.alt = coctel.strDrink;
                imagenCoctel.hidden = false;
            } else {
                alert('Cóctel no encontrado.');
                limpiarCampos();
            }
        })
        .catch(function (error) {
            alert('Hubo un error al realizar la búsqueda.');
            console.log(error);
        });
}

function limpiarCampos() {
    document.getElementById('nombreCoctel').value = '';
    document.getElementById('categoriaCoctel').value = '';
    document.getElementById('instruccionesCoctel').value = '';
    var imagenCoctel = document.getElementById('imagenCoctel');
    imagenCoctel.src = '';
    imagenCoctel.alt = '';
    imagenCoctel.hidden = true;
}
