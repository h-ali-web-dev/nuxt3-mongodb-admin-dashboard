<template>
  <div class="container">
    <div class="item">
      <div class="bgContainer">
        <img class="bg" src="/astronaut.png" alt="" fill />
      </div>
      <div class="text">
        <span class="notification">🔥 Available Now</span>
        <h3 class="title">
          How to use the new version of the admin dashboard?
        </h3>
        <span class="subtitle">Takes 4 minutes to learn</span>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eius libero perspiciatis recusandae possimus.
        </p>
        <button class="button">
          <Icon name="material-symbols:play-circle" />
          Watch
        </button>
      </div>
    </div>
    <div class="item">
      <div class="text">
        <span class="notification">🚀 Coming Soon</span>
        <h3 class="title">
          New server actions are available, partial pre-rendering is coming up!
        </h3>
        <span class="subtitle">Boost your productivity</span>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eius libero perspiciatis recusandae possimus.
        </p>
        <button class="button">
          <Icon name="material-symbols:read-more" />
          Learn
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  position: fixed;
}

.item {
  background: linear-gradient(to top, #182237, #253352);
  padding: 20px 24px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
}

.bgContainer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
}

.bg {
  object-fit: contain;
  opacity: 0.2;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.notification {
  font-weight: bold;
}

.subtitle {
  color: var(--textSoft);
  font-weight: 500;
  font-size: 12px;
}

.desc {
  color: var(--textSoft);
  font-size: 14px;
}

.button {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
  background-color: #5d57c9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
