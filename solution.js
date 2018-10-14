document.addEventListener('DOMContentLoaded', () => {

  const pokeCardHTML = POKEMON.map(pokeObj => (
    `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokeObj.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="${pokeObj.id}" data-action="flip" class="toggle-sprite" src="${pokeObj.sprites.front}">
          </div>
        </div>
      </div>
    </div>`
  )).join('') //generate string of HTML

  document.getElementById('pokemon-container').innerHTML = pokeCardHTML //add this large string of HTML to the DOM

  document.getElementById('pokemon-container').addEventListener('click', event => {
    if (event.target.dataset.action === 'flip') {
      const targetPoke = POKEMON.find(pokeObj => pokeObj.id == event.target.dataset.id)
      if (event.target.src === targetPoke.sprites.front) {
        event.target.src = targetPoke.sprites.back
      } else {
        event.target.src = targetPoke.sprites.front
      }
    }
  })

  document.getElementById('pokemon-search-form').addEventListener('input', event => {
    const filteredPokes = POKEMON.filter(pokeObj => pokeObj.name.includes(event.target.value.toLowerCase()))
    const filteredPokeHTML = filteredPokes.map(pokeObj => (
      `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokeObj.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${pokeObj.id}" data-action="flip" class="toggle-sprite" src="${pokeObj.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
    )).join('')

    document.getElementById('pokemon-container').innerHTML = filteredPokeHTML.length ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
  })
})