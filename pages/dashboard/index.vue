<template>
  <div class="wrapper">
    <div class="main">
      <div class="cards">
        <div v-for="card in cards">
          <card :item="card" :key="card.id" />
        </div>
      </div>
      <Transactions />
      <Chart />
    </div>
    <div class="side">
      <Rightbar />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "dashboard-layout",
  middleware: "auth-check",
});
const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.main {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cards {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.side {
  flex: 1;
}
</style>
