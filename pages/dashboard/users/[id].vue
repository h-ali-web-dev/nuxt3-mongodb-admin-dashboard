<template>
  <div className="container">
    <div className="infoContainer">
      <div className="imgContainer">
        <img src="/noavatar.png" alt="" fill />
      </div>
      {{ user.username }}
    </div>
    <div className="formContainer">
      <form @submit.prevent="handleUpdate(user._id)" className="form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          :placeholder="user.username"
          v-model="form.username"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          :placeholder="user.email"
          v-model="form.email"
        />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          :placeholder="user.phone"
          v-model="form.phone"
        />
        <label>Address</label>
        <textarea
          type="text"
          name="address"
          :placeholder="user.address"
          v-model="form.address"
        />
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin" v-model="form.isAdmin">
          <option value="true" :selected="user.isAdmin">Yes</option>
          <option value="false" :selected="!user.isAdmin">No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive" v-model="form.isActive">
          <option value="true" :selected="user.isActive">Yes</option>
          <option value="false" :selected="!user.isActive">No</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "dashboard-layout",
});

const { data: user } = await useFetch("/api/user", {
  method: "get",
  query: { id: useRoute().params.id },
});

const form = ref({
  email: user.email,
  username: user.username,
  password: user.password,
  phone: user.phone,
  isAdmin: user.isAdmin,
  isActive: user.isActive,
  address: user.address,
});

async function handleUpdate(id: String) {
  try {
    await useFetch("/api/user", {
      method: "PUT",
      body: { ...form.value, id: id },
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
  display: flex;
  gap: 50px;
  margin-top: 20px;
}

.infoContainer {
  flex: 1;
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  color: var(--textSoft);
  height: max-content;
}

.imgContainer {
  width: 100%;
  height: 300px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.formContainer {
  flex: 3;
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form input,
.form textarea,
.form select {
  padding: 20px;
  border: 2px solid #2e374a;
  border-radius: 5px;
  background-color: var(--bg);
  color: var(--text);
  margin: 10px 0px;
}

.form label {
  font-size: 12px;
}

.form button {
  width: 100%;
  padding: 20px;
  background-color: teal;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
