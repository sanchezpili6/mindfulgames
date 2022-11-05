<template>
  <div id="app">
    <nav style="justify-content: space-between">
      <v-row>
        <v-spacer></v-spacer>
        <v-btn to="/">Inicio</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/map">Mapa</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/games">Juegos</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/resources">Recursos</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/test">Diagnóstico</v-btn>
        <v-spacer></v-spacer>
        <v-btn target="_blank" href="https://sites.google.com/view/mindfulgames-company/inicio?authuser=0">Sobre nosotros</v-btn> |
        <v-spacer></v-spacer>
      </v-row>
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
