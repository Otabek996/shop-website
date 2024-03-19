<template>
  <button><i :class="icon"></i></button>
</template>

<script>
export default {
  name: "MenuButtonComp",

  props: ["icon"],
};
</script>
