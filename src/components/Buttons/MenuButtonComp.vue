<template>
  <button class="button"><i :class="icon"></i></button>
</template>

<script>
export default {
  name: "MenuButtonComp",

  props: ["icon"],
};
</script>

<style scoped>
.button {
  border: 2px solid red;
  border-radius: 50%;
  padding: 10px 12px;
  cursor: pointer;
}
</style>
