<template>
<div>
  <router-view />
  <div>个人简介</div>
  <img id="myImg" src="../assets/111.jpg">
</div>
</template>

<script>
export default {
  name: 'Img'
}
</script>

<style scoped>
*{
  text-align: center;
}
</style>
