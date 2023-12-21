<template>
  <div class="container">
    <Icon name="material-symbols:search" />
    <input
      type="text"
      placeholder="Search here..."
      class="input"
      @change="handleSearch"
    />
  </div>
</template>

<script lang="ts" setup>
const handleSearch = () => {
  //not needed
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #2e374a;
  padding: 10px;
  border-radius: 10px;
  width: max-content;
}

.input {
  background-color: transparent;
  border: none;
  color: var(--text);
  outline: none;
}
</style>
