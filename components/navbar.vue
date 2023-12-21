<template>
  <div>
    <div class="container">
      <div class="title">
        {{ router.path.split("/").pop() }}
      </div>
      <div class="menu">
        <div class="search">
          <Icon name="material-symbols:search" />
          <input type="text" placeholder="Search..." class="input" />
        </div>
        <div class="icons">
          <Icon name="material-symbols:chat-outline" size="20" />
          <Icon name="material-symbols:notifications" size="20" />
          <Icon name="material-symbols:public" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRoute();
</script>

<style scoped>
.container {
  padding: 20px;
  border-radius: 10px;
  background-color: var(--bgSoft);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  color: var(--textSoft);
  font-weight: bold;
  text-transform: capitalize;
}

.menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #2e374a;
  padding: 10px;
  border-radius: 10px;
}

.input {
  background-color: transparent;
  border: none;
  color: var(--text);
}

.icons {
  display: flex;
  gap: 20px;
}
</style>
