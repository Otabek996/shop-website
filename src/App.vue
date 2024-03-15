<template>
  <NavbarComp />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: {
    NavbarComp,
  },
};
</script>

<style>
/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
