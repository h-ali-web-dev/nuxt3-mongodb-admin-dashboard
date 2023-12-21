<template>
  <div class="container">
    <div class="container">
      <Icon name="mdi:github" />
      <div class="logo">h-ali-web-dev</div>
    </div>
    <div class="text">© All rights reserved.</div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  color: var(--textSoft);
}

.logo {
  font-weight: bold;
}

.text {
  font-size: 12px;
}
</style>
