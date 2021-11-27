<template>
  <el-container class="vh-100">
    <el-header> header </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer> footer </el-footer>
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
</style>
