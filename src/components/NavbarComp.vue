<template>
  <nav class="navbar">
    <div class="navbar-left">
      <LogoComp />
    </div>

    <div class="navbar-middle">
      <div class="navbar-menu">
        <ul class="navbar-list">
          <li class="navbar-item">
            <a class="navbar-link" href="#">Furniture</a>
          </li>

          <li class="navbar-item">
            <a class="navbar-link" href="#">About us</a>
          </li>

          <li class="navbar-item">
            <a class="navbar-link" href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-right">
      <MenuButtonComp />
      <MenuButtonComp />
    </div>
  </nav>
</template>

<script>
import LogoComp from "./logo/LogoComp.vue";
import MenuButtonComp from "./Buttons/MenuButtonComp.vue";

export default {
  name: "NavbarComp",
  components: {
    LogoComp,
    MenuButtonComp,
  },
};
</script>
