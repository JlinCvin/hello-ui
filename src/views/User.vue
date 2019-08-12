<template>
    <div>
        <router-view />
        <ul class="footer">
          <li><router-link to="/add">添加留言</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style scoped>
*{
    text-align: center;
    padding: 0;
}
li{
  list-style: none;
}
</style>
