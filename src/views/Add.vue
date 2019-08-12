<template>
  <div>
    <h1>标题</h1>
    <input type="text" v-model="title" class="title1" maxlength="15" placeholder="少于15字"><br />
    <h1>内容</h1>
    <textarea v-model="content" class="text" ></textarea><br /><br />
    <button class="btn" @click="add()">添加</button><br /><br />
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Add',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add () {
      store.commit('addItem', {
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
      this.$router.push('/clock/list')
    }
  }
}
</script>

<style scoped>
*{
  text-align: center;
}
.title1{
  width: 40%;
  text-align: left;
  border: 1px solid;
}
.text{
  width: 70%;
  height: 200px;
  text-align: left;
  border: 1px solid;
  border-radius: 10px;
}
</style>
