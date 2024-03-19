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
      <MenuButtonComp :icon="buttonIconMenu" />
      <MenuButtonComp :icon="buttonIconUser" />
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

  data() {
    return {
      buttonIconMenu: "ri-menu-line",
      buttonIconUser: "ri-user-line",
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 16px;
  padding: 5px 20px;
}

.navbar-list {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar-link {
  font-size: 18px;
  line-height: 20px;
  font-weight: var(--font-weight-medium);
  color: var(--text-color-black);
  text-transform: uppercase;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
