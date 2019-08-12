<template>
    <div>
        <ul class="footer">
            <li class='icons'> <router-link :to="{name: 'list'}">个人留言</router-link></li>
            <li class='icons'> <router-link :to="{name: 'user'}">个人中心</router-link></li>
        </ul>
        <br />
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'Clock'
}
</script>
<style scoped lang='scss'>
li{
  list-style: none;
}
.footer{
  margin: 0 auto;
  padding: 0;
  width: 60%;
  height: 4rem;
  line-height: 4rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.icons{
  font-size: 16px;
  flex: 1;
  text-align: center;
  border: 1px solid #01271a;
  a{
    color: #023119;
    display: block;
    text-decoration: none;
    &.active{
      color: #fff;
      background:  #000000;
    }
  }
}
</style>
