let pokemons;

document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
   fetchInitialPokemon();
   searchPokemon();
})

// CSS hover flip
// const render = (pokemon) => {
//   let container = document.getElementById('pokemon-container')
//   container.innerHTML +=
//     `<div class="flip-card" id="${pokemon.id}">
//       <div class="flip-card-inner">
//         <div class="flip-card-front">
//           <h2>${pokemon.name}</h2>
//           <img src="${pokemon.sprites.front}" />
//         </div>
//         <div class="flip-card-back">
//           <h4>${pokemon.abilities}</h4>
//           <img src="${pokemon.sprites.back}" />
//         </div>
//       </div>
//     </div>`
// }

// onClick flip
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
      pokemons = data.pokemon;
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
    const filterPokemons = pokemons.filter(pokemon => pokemon.name.includes(event.target.value.lowerCase()));
    render(filterPokemons);
  })
}