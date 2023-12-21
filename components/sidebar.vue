<template>
  <div>
    <div class="container">
      <div class="user">
        <img class="userImage" src="/noavatar.png" alt="" />
        <div class="userDetail">
          <span class="username">{{ user!.email }}</span>
          <span v-if="user!.isAdmin" class="userTitle">Administrator</span>
        </div>
      </div>
      <ul class="list">
        <div v-for="item in menuItems">
          <li key="item.title">
            <span class="cat">{{ item.title }}</span>
            <div v-for="link in item.list">
              <NuxtLink
                :to="link.path ? link.path : undefined"
                class="link-container"
                :class="router.path === link.path ? 'active' : null"
              >
                <Icon :name="link.icon" />
                {{ link.title }}
              </NuxtLink>
            </div>
          </li>
        </div>
      </ul>
      <button @click="handleLogout" class="logout">
        <Icon name="material-symbols:logout" />
        Logout
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { signOut, user } = useAuth();
async function handleLogout() {
  await signOut();
}
const router = useRoute();
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "material-symbols:dashboard",
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: "mdi:account-circle",
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: "material-symbols:shopping-bag",
      },
      {
        title: "Transactions",
        path: null,
        icon: "material-symbols:attach-money",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: null,
        icon: "material-symbols:work",
      },
      {
        title: "Reports",
        path: null,
        icon: "material-symbols:analytics-outline",
      },
      { title: "Teams", path: null, icon: "ic:baseline-people" },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: null,
        icon: "material-symbols:settings",
      },
      {
        title: "Help",
        path: null,
        icon: "material-symbols:help-center",
      },
    ],
  },
];
</script>

<style scoped>
.container {
  position: sticky;
  top: 40px;
}

.user {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.userImage {
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
}

.userDetail {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: 500;
}

.userTitle {
  font-size: 12px;
  color: var(--textSoft);
}

.list {
  list-style: none;
}

.cat {
  color: var(--textSoft);
  font-weight: bold;
  font-size: 13px;
  margin: 10px 0px;
}

.logout {
  padding: 20px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  background: none;
  border: none;
  color: white;
  width: 100%;
}

.logout:hover {
  background-color: #2e374a;
}

.link-container {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0px;
  border-radius: 10px;
}

.link-container:hover,
.active {
  background-color: #2e374a;
}
</style>
