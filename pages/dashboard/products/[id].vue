<template>
  <div class="container">
    <div class="infoContainer">
      <div class="imgContainer">
        <img src="/noavatar.png" alt="" fill />
      </div>
      {{ product.title }}
    </div>
    <div class="formContainer">
      <form @submit.prevent="handleUpdate(product._id)" class="form">
        <label>Title</label>
        <input
          type="text"
          name="title"
          :placeholder="product.title"
          v-model="form.title"
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          :placeholder="product.price"
          v-model="form.price"
        />
        <label>Stock</label>
        <input
          type="number"
          name="stock"
          :placeholder="product.stock"
          v-model="form.stock"
        />
        <label>Color</label>
        <input
          type="text"
          name="color"
          :placeholder="product.color"
          v-model="form.color"
        />
        <label>Size</label>
        <textarea
          type="text"
          name="size"
          :placeholder="product.size"
          v-model="form.size"
        />
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="10"
          :placeholder="product.desc"
          v-model="form.desc"
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: product } = await useFetch("/api/product", {
  method: "get",
  query: { id: useRoute().params.id },
});
definePageMeta({
  layout: "dashboard-layout",
});
const form = ref({
  title: product.title,
  price: product.price,
  stock: product.stock,
  color: product.color,
  size: product.size,
  desc: product.desc,
});

async function handleUpdate(id: String) {
  try {
    await useFetch("/api/product", {
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
