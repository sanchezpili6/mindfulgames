<template>
  <div id="app">
    <nav style="justify-content: space-around">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/map">Mapa</router-link> |
      <router-link to="/games">Juegos</router-link> |
      <router-link to="/resources">Recursos</router-link> |
      <router-link to="/test">Diagnóstico</router-link> |
      <router-link to="/about">Sobre nosotros</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f0e6;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e58d18;
    }
  }
}
</style>
