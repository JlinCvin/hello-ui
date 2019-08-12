<template>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="http://jlincvin.cn" target="_blank">JlinCvin</a>
          <router-link to="/" class="navbar-brand">主页</router-link>
          <router-link to="/login" class="navbar-brand">登录</router-link>
          <router-link to="/clock" class="navbar-brand">日记</router-link>
          <router-link to="/threeDpicture" class="navbar-brand">转圈</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar'
}
</script>

<style scoped>

</style>
