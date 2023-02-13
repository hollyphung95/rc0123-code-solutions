/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];
/* <div class="column-third">
  <div class="pokemon-card">
    <img src="images/pikachu.png">
    <div class="pokemon-card-text">
      <h2>Pikachu</h2>
      <h3>#025</h3>
      <p>
        Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.
      </p>
    </div>
  </div>
</div> */
var pokemons = [];
var row = document.querySelector('.row');
// console.log(container);

pokedex.forEach((value, index, pokedex) => {
  const pokemon = document.createElement('pokemon');
  pokemon.setAttribute('name', value.name);
  pokemon.setAttribute('number', value.number);
  pokemon.setAttribute('description', value.description);
  const img = document.createElement('img');
  img.setAttribute('src', value.imageUrl);
  pokemon.setAttribute('src', value.imageUrl);
  pokemons.push(pokemon);

  // renderPokemon(pokemon);
});

function renderPokemon(pokemon) {
  var $container = document.createElement('div');
  $container.classList.add('column-third');

  var $card = document.createElement('div');
  $card.classList.add('pokemon-card');
  $container.appendChild($card);

  var $img = document.createElement('img');
  $img.setAttribute('src', pokemon.getAttribute('src'));
  $card.appendChild($img);

  var $text = document.createElement('div');
  $text.classList.add('pokemon-card-text');
  $card.appendChild($text);

  var $name = document.createElement('h2');
  $name.innerText = pokemon.getAttribute('name');
  $text.appendChild($name);

  var $number = document.createElement('h3');
  $number.innerText = `#${pokemon.getAttribute('number')}`;
  $text.appendChild($number);

  var $p = document.createElement('p');
  $p.innerText = `#${pokemon.getAttribute('description')}`;
  $text.appendChild($p);

  row.appendChild($container);
}

for (var i = 0; i < pokemons.length - 1; i++) {
  renderPokemon(pokemons[i]);
}
