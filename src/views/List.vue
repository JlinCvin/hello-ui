<template>
  <div>
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">
        <div class="note">标题： {{item.title}}<br />内容： {{item.content}}</div><br/>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'List',
  store,
  computed: {
    pageLists () {
      return store.state.lists
    }
  }
}
</script>

<style scoped>

.note{
  border: 1px solid #050505;
  padding: 10px;
  width: 80%;
  position: relative;
  left: 10%;
}
</style>
