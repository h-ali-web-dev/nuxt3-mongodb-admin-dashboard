<template>
  <div class="container">
    <div class="top">
      <Search placeholder="Search for a product..." />
      <NuxtLink href="/dashboard/products/add">
        <button class="addButton">Add New</button>
      </NuxtLink>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" key="{product.id}">
          <td>
            <div class="product">
              <img src="/noproduct.jpg" alt="" class="productImage" />
              {{ product.title }}
            </div>
          </td>
          <td>{{ product.desc }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.createdAt?.toString() }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <div class="buttons">
              <button
                @click="useRouter().push(`/dashboard/products/${product._id}`)"
                class="button view"
              >
                View
              </button>
              <button @click="deleteProduct(product._id)" class="button delete">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination count="{count}" />
  </div>
</template>

<script lang="ts" setup>
const { data: products, refresh } = await useFetch("/api/product", {
  method: "get",
});
async function deleteProduct(id: String) {
  await useFetch("/api/product", {
    method: "delete",
    query: { id: id },
  });
  refresh();
}
definePageMeta({
  layout: "dashboard-layout",
});
</script>

<style scoped>
.container {
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.addButton {
  padding: 10px;
  background-color: #5d57c9;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.table {
  width: 100%;
}

.table td {
  padding: 10px;
}

.product {
  display: flex;
  align-items: center;
  gap: 10px;
}

.productImage {
  border-radius: 50%;
  object-fit: cover;
  width: 40px;
  height: 40px;
}

.buttons {
  display: flex;
  gap: 10px;
}

.button {
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--text);
  border: none;
  cursor: pointer;
}

.view {
  background-color: teal;
}

.delete {
  background-color: crimson;
}
</style>
