<template>
  <div class="bg-image" style="background-image: url('https://i.goopics.net/oyq45v.png');height: 100vh;">
    <div class="p-5">
    <a class="btn btn-warning text-white" href="https://vuejs.org/v2/guide/" role="button">VueJS</a>
    <a class="btn btn-warning text-white" href="https://nodejs.org/en/docs/" role="button">NodeJS</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cours',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
