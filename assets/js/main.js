console.log("teste");

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}


const pokemonList = document.getElementById("pokemons");

pokeApi.getPokemons().then((pokemons = []) => { 
    const newHTML = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHTML;
})


// <li class="pokemon">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
//                 </ol>
//                 <img src="${pokemon.photo}" 
//                     alt="${pokemon.name}">
//             </div>
//         </li>