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
/*==================== GOOGLE FONTS ====================*/
@import url("https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=Flow+Block&family=Ojuju:wght@200..800&display=swap");

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
