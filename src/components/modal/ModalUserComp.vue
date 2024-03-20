<template>
  <div class="modal-container">
    <div class="modal">
      <h1>modal window</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalUserComp",
};
</script>

<style scoped>
.modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;

  display: none;
}

.modal {
  width: 300px;
  height: 200px;
  background-color: blue;
}
</style>
