<template>
  <div id="app">
    <h2 class="text-white p-2">Rechercher un Pokémon grâce à son ID</h2>
     <input type="number" id="pokeID" placeholder="Pokémon ID" min="0" v-model="pokeID" />
     <button v-on:click="PokeShow">Search</button>
     <p>(Appuyer deux fois sur "Search" pour voir l'image du Pokémon)</p>

     <div class="p-2" v-if="this.pokeSearch">
       <img id='src'>
       <div>Nom : {{this.pokeSearch.name}}</div>
       <div>Taille : {{this.pokeSearch.height}} pouces</div>
       <div>Poids : {{this.pokeSearch.weight}} lbs</div>

     </div>
  </div>
  
</template>

<script>
import axios from 'axios'


export default {
  name: 'PokeSearch',
  data () {
    return {
      pokeSearch: null,
      pokeID: 0,
    }
  },
  methods: {
      PokeShow: function() {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/'+document.getElementById("pokeID").value)
        .then(response => {
          this.pokeSearch = response.data
          var imgPoke = document.getElementById('src')
          imgPoke.src = this.pokeSearch.sprites.front_default
        })
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
