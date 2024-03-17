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

/*==================== VARIABLES ====================*/
:root {
  /*========== Colors ==========*/
  --text-color-white: #ffffff;
  --text-color-black: #000000;

  /*========== Font and typography ==========*/
  --font-family-athiti: "Athiti", sans-serif;
  --font-family-ojuju: "Ojuju", sans-serif;
  --font-family-flowblock: "Flow Block", system-ui;

  /*========== Font size ==========*/

  /*========== Line height ==========*/

  /*========== Font weight ==========*/
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /*========== Font style ==========*/
  --font-style-normal: normal;
}

/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: var(--font-family-athiti);
  font-weight: var(--font-weight-regular);
  font-style: var(--font-style-normal);
  color: var(--text-color-black);
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
