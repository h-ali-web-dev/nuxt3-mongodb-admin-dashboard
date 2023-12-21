<template>
  <div class="container">
    <h2 class="title">Weekly Recap</h2>
    <client-only>
      <nuxt-plotly :data="data" class="chart"></nuxt-plotly>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: "scatter",
};
var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: "scatter",
};
var data = [trace1, trace2];
</script>

<style scoped>
.container {
  height: 450px;
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
}

.title {
  font-weight: 200;
  color: var(--textSoft);
  margin-bottom: 20px;
}

.chart {
  background-color: var(--bgSoft);
  width: 100%;
  height: 90%;
}
</style>
