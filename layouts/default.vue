<template>
  <el-container class="vh-100">
    <el-header>
      <el-row
        class="header-row"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <el-col><nuxt-link class="logo" to="/">Coffee-spot</nuxt-link></el-col>
        <el-col>
          <div class="user-info">
            <div class="name">userName</div>
            <i class="el-icon-user"></i>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<style lang="css">
.vh-100 {
  min-height: 100vh;
}
html,
body {
  font-family: 'Roboto', sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}
.user-info {
  display: flex;
  color: white;
  float: right;
  gap: 20px;
}
.el-header,
.el-footer {
  background: #5180ef;
}
.logo {
  color: white;
  font-size: 20px;
  text-decoration: none;
}
.header-row {
  height: 100%;
}
</style>
