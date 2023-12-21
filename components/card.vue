<template>
  <div class="container">
    <Icon name="mdi:user-circle" size="24" />
    <div class="texts">
      <span class="title">{{ item!.title }}</span>
      <span class="number">{{ item!.number }}</span>
      <span class="detail">
        <span
          :class="item!.change >
          0 ? 'positive' : 'negative'"
        >
          {{ item!.change }}%
        </span>
        {{ item!.change > 0 ? "more" : "less" }} than previous week
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  item: { type: Object, required: true },
});
</script>

<style scoped>
.container {
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  cursor: pointer;
  width: 100%;
}

.container:hover {
  background-color: #2e374a;
}

.texts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.number {
  font-size: 24px;
  font-weight: 500;
}

.detail {
  font-size: 14px;
  font-weight: 300;
}

.positive {
  color: lime;
}

.negative {
  color: red;
}
</style>
