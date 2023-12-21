<template>
  <div class="container">
    <h2 class="title">Latest Transactions</h2>
    <div>
      <table class="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="user">
                <img src="/noavatar.png" alt="" class="userImage" />
                John Doe
              </div>
            </td>
            <td>
              <span class="status pending"> Pending </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div class="user">
                <img src="/noavatar.png" alt="" class="userImage" />
                John Doe
              </div>
            </td>
            <td>
              <span class="status done">Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div class="user">
                <img src="/noavatar.png" alt="" class="userImage" />
                John Doe
              </div>
            </td>
            <td>
              <span class="status cancelled"> Cancelled </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div class="user">
                <img src="/noavatar.png" alt="" class="userImage" />
                John Doe
              </div>
            </td>
            <td>
              <span class="status pending"> Pending </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  display: block;
}

.title {
  max-height: min-content;
  margin-bottom: 20px;
  font-weight: 200;
  color: var(--textSoft);
}

.table {
  width: 100%;
}

.table td {
  padding: 10px;
}

.user {
  display: flex;
  gap: 10px;
  align-items: center;
}

.userImage {
  object-fit: cover;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.status {
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  color: white;
}

.pending {
  background-color: #f7cb7375;
}

.done {
  background-color: #afd6ee75;
}

.cancelled {
  background-color: #f7737375;
}
</style>
