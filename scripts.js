console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const generacionUno = document.getElementById("gen-1");
generacionUno.innerHTML = "Generasión 1 Pokimon"

// 2. Cambia el color de fondo de la primera generación de Pokimon.
generacionUno.style.backgroundColor = "#c4e810ff"

// 3. Imprime por consola la URL de la página.
console.log(window.location.href);

// 4. Imprime por consola el dominio de la página.
console.log(window.location.hostname);

// 5. Imprime todos los nodos de imagen.
const imagenes = document.querySelectorAll("img");
console.log(imagenes);

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for (let imagen of imagenes) {
    imagen.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
const pokemons = document.querySelectorAll(".infocard-lg-data.text-muted");
for (let pokemon of pokemons) {
    const voladores = pokemon.querySelector(".itype.flying");
    if (voladores) {
        pokemon.style.backgroundColor = "#63b418ff";
    }
}