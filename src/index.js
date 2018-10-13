import fetch from "node-fetch";
document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  fetchInitialPokemon()
})

const render = (pokemon) => {
  let container = document.getElementById('pokemon-container')
  container.innerHTML +=
    `<div class="pokemon-cards" id="${pokemon.id}">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front}"/>
    </div>
      <div class="flip-card-back">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.back}" />
      </div>
    </div>
  </div>`
}

const fetchInitialPokemon = () => {
  fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => data.forEach(pokemon => {
      render(pokemon)
    }))
}

const result = fetchInitialPokemon()