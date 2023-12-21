<template>
  <div class="container">
    <div class="top">
      <Search placeholder="Search for a user..." />
      <NuxtLink to="/dashboard/users/add">
        <button class="addButton">Add New</button>
      </NuxtLink>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" key="{user.id}">
          <td>
            <div class="user">
              <img src="/noavatar.png" alt="" class="userImage" />
              {{ user.username }}
            </div>
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.createdAt?.toString() }}</td>
          <td>{{ user.isAdmin ? "Admin" : "Client" }}</td>
          <td>{{ user.isActive ? "active" : "passive" }}</td>
          <td>
            <div class="buttons">
              <button
                @click="useRouter().push(`/dashboard/users/${user._id}`)"
                class="button view"
              >
                View
              </button>
              <form @submit.prevent="deleteUser(user._id)">
                <button type="submit" class="button delete">Delete</button>
              </form>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination count="{count}" />
  </div>
</template>

<script lang="ts" setup>
const { data: users, refresh } = await useFetch("/api/user", { method: "get" });
async function deleteUser(id: String) {
  await useFetch("/api/user", {
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

.user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.userImage {
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
