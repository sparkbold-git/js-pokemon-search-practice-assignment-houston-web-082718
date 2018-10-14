let pokemons;

document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  fetchInitialPokemon();
  searchPokemon();
})

const render = (pokemon) => {
  let container = document.getElementById('pokemon-container')
  container.innerHTML +=
    `<div class="pokemon-cards" id="${pokemon.id}" onClick="flipFunc(${pokemon.id})">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front}" />
          </div>
          <div class="flip-card-back">
            <h4>${pokemon.abilities}</h4>
            <img src="${pokemon.sprites.back}" />
          </div>
        </div>
      </div>`
}

const fetchInitialPokemon = () => {
  fetch('db.json')
    .then(resp => resp.json())
    .then(data => {
      pokemons = data.pokemon;// json return a hash with key pokemon from json file instead of array! remove this line and change data to pokemons with api from http://localhost:3000/pokemon/
      document.getElementById("p1").innerHTML = `There are <strong>${pokemons.length}</strong> Pokémon here`;
      pokemons.forEach(pokemon => {
        render(pokemon);
      })
    })
}

const flipFunc = (id) => {
  let inner = document.getElementById(id).getElementsByClassName('flip-card-inner');
  let cardTransform = inner[0].style.transform
  if (cardTransform === "" || cardTransform === 'rotateY(0deg)') {
    inner[0].style.transform = 'rotateY(180deg)';
  } else {
    inner[0].style.transform = 'rotateY(0deg)';
  }
}

const searchPokemon = () => {
  document.getElementById('pokemon-search-form').addEventListener('input', event => {
    let keyword = event.target.value.toLowerCase();
    const filterPokemons = pokemons.filter(pokemon => pokemon.name.includes(keyword));
    let container = document.getElementById('pokemon-container');
    if (filterPokemons.length) {
      document.getElementById("p1").innerHTML = `There are <strong>${filterPokemons.length}</strong> Pokémon here with keyword <em>'${keyword}'</em>'`;
      container.innerHTML = "";
      filterPokemons.forEach(pokemon => render(pokemon))
    } else {
      document.getElementById("p1").innerHTML = `There are no Pokémon found.`
      container.innerHTML = ""
    }
  })
}