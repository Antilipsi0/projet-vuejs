<template>
  <div id="app" class="bg-image" style="background-image: url('https://i.goopics.net/oyq45v.png');height: 100vh;">
  <div class="row">
    <div class="col"> <PokeSearch/> </div>
    <div class="col">
    <h2 class="text-white p-2">Liste des 20 pokémons principaux</h2>
    <table class="w-25 table m-auto border border-dark">
    <tr class="bg-dark text-white">
        <th>Numéro</th>
        <th>Nom du pokémon</th>
    </tr>
    <tr  v-for="(info, index) in infos" :key="index">
          <td class="border border-dark">{{ index+1 }}</td>
          <td class="border border-dark">{{ info.name }}</td>
        </tr>
    </table>
    </div>
    </div>
  </div>
</template>

<script>
import PokeSearch from './PokeSearch.vue'
import axios from 'axios'


export default {
  name: 'PokeApi',
  components: {
    'PokeSearch' : PokeSearch
  },
  data () {
    return {
      infos: null
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(response => (this.infos = response.data.results))
      .catch(error => console.log(error))
  }
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
.row {
 display: flex;
}
.col {
  flex: 1; 
  padding: 1em;
}

</style>
