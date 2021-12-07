<template>
  <div id="app">
   <header>
    <nav class="navbar navbar-dark bg-dark p-3">
      <span class="navbar-brand mb-0 h1 text-white">Pokédex API</span>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active " ><router-link to="/" id="link">Accueil</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href=""><router-link to="/pokeapi" id="link">Rechercher un pokémon</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href=""><router-link to="/cours" id="link">Cours</router-link></a>
      </li>
    </ul>
      <img alt="Vue logo" src="./assets/poke.png" style="width:100px">
    </nav>  
  </header>
    <router-view/>
    <footer class="bg-warning text-center text-lg-start p-2">
      <div class="text-center p-2" style="bg-dark">
        <p class="text-white">© 2021 Copyright - Hugo Corniquet</p>
      </div>
    </footer>
  </div>
  
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>
