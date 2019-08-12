<template>
  <div id="app">
    <MyTitle/>
    <NavigationBar/>
    <router-view/>
    <BottomColumn/>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomColumn from '@/components/BottomColumn.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import MyTitle from '@/components/MyTitle.vue'

export default {
  name: 'App',
  components: {
    MyTitle,
    NavigationBar,
    BottomColumn
  }
}
</script>

<style lang="scss">
html body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app{
  height:100%;
}
</style>
