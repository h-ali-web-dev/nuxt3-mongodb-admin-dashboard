<template>
  <div class="container">
    <form @submit.prevent="handleFormSubmit" class="form">
      <input
        type="text"
        placeholder="username"
        name="username"
        v-model="form.username"
        required
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        v-model="form.email"
        required
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        v-model="form.password"
        required
      />
      <input
        type="phone"
        placeholder="phone"
        name="phone"
        v-model="form.phone"
      />
      <select name="isAdmin" id="isAdmin" v-model="form.isAdmin">
        <option value="false">Is Admin?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <select name="isActive" id="isActive" v-model="form.isActive">
        <option value="true">Is Active?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <textarea
        name="address"
        id="address"
        rows="16"
        placeholder="Address"
        v-model="form.address"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "dashboard-layout",
});
const form = ref({
  email: "",
  username: "",
  password: "",
  phone: "",
  isAdmin: false,
  isActive: false,
  address: "",
});
async function handleFormSubmit() {
  try {
    await useFetch("/api/user", {
      method: "post",
      body: form.value,
    });
    useRouter().push({
      name: "dashboard",
    });
  } catch (e: any) {
    console.log(e);
  }
}
</script>

<style scoped>
.container {
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form input,
.form textarea,
.form select {
  padding: 30px;
  background-color: var(--bg);
  color: var(--text);
  border: 2px solid #2e374a;
  border-radius: 5px;
  margin-bottom: 30px;
}

.form input,
.form select {
  width: 45%;
}

.form textarea {
  width: 100%;
}

.form button {
  width: 100%;
  padding: 30px;
  background-color: teal;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
