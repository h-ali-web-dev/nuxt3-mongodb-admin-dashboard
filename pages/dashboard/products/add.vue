<template>
  <div class="container">
    <form @submit.prevent="handleFormSubmit" class="form">
      <input
        type="text"
        placeholder="title"
        name="title"
        v-model="form.title"
        required
      />
      <select name="cat" id="cat">
        <option value="general">Choose a Category</option>
        <option value="kitchen">Kitchen</option>
        <option value="phone">Phone</option>
        <option value="computer">Computer</option>
      </select>
      <input
        type="number"
        placeholder="price"
        name="price"
        v-model="form.price"
        required
      />
      <input
        type="number"
        placeholder="stock"
        name="stock"
        v-model="form.stock"
        required
      />
      <input
        type="text"
        placeholder="color"
        name="color"
        v-model="form.color"
      />
      <input type="text" placeholder="size" name="size" v-model="form.size" />
      <textarea
        required
        name="desc"
        id="desc"
        rows="16"
        placeholder="Description"
        v-model="form.desc"
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
  title: "",
  desc: "",
  price: 0,
  stock: 0,
  color: "",
  size: "",
});
async function handleFormSubmit() {
  try {
    await useFetch("/api/product", {
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
