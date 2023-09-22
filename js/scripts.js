
import recipesData from './recipes.js';

document.addEventListener('DOMContentLoaded', function () {
    cargarRecetas();
});

// Función para cargar las recetas desde la variable recipesData
function cargarRecetas() {
    const recetasContainer = document.getElementById('recetas-container');

    // Iterar a través de las recetas y crear elementos HTML para cada una
    recipesData.forEach(receta => {
        const recetaDiv = document.createElement('div');
        recetaDiv.classList.add('receta-item');

        // Crear elementos HTML para mostrar los detalles de la receta
        const nombreReceta = document.createElement('h3');
        nombreReceta.textContent = receta.nombre;

        const descripcionReceta = document.createElement('p');
        descripcionReceta.textContent = receta.descripcion_tipo;

        // Agregar los elementos HTML al contenedor de recetas
        recetaDiv.appendChild(nombreReceta);
        recetaDiv.appendChild(descripcionReceta);

        recetasContainer.appendChild(recetaDiv);
    });
}
