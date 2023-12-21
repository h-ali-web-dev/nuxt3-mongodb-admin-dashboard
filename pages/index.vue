<template>
  <div>
    <form @submit.prevent="handleLogin" class="form">
      <h1>Login</h1>
      <div>Use "username" and "password" for default user</div>
      <input
        type="text"
        placeholder="username"
        name="username"
        v-model="form.username"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        v-model="form.password"
      />
      <button type="submit">Login</button>
      <pre>{{ status }}</pre>
      <pre>{{ session?.user }}</pre>
      <pre>{{ cookies }}</pre>
      <pre>{{ user }}</pre>
      <NuxtLink to="/signup">SignUp</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { signIn, signOut, session, status, cookies, getProviders, user } =
  useAuth();
const form = ref({
  username: "",
  password: "",
});
async function handleLogin() {
  try {
    await signIn("credentials", form.value);
    useRouter().push({
      name: "dashboard",
    });
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
