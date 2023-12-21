<template>
  <div>
    <form @submit.prevent="handleSignUp" class="form">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        v-model="form.username"
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        v-model="form.email"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        v-model="form.password"
      />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const form = ref({
  username: "",
  password: "",
  email: "",
});
async function handleSignUp() {
  try {
    await useFetch("/api/user", {
      method: "POST",
      body: form.value,
    });
    useRouter().push("/");
  } catch (e) {
    console.log(e);
  }
}
definePageMeta({
  middleware: "guest",
});
</script>

<style scoped>
.form {
  background-color: var(--bgSoft);
  padding: 50px;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.form input {
  width: 100%;
  padding: 30px;
  border: 2px solid #2e374a;
  border-radius: 5px;
  background-color: var(--bg);
  color: var(--text);
}

.form button {
  width: 100%;
  padding: 30px;
  background-color: teal;
  color: var(--text);
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

div {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
