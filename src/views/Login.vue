<template>
  <div >
    <form class="form-horizontal" v-if="!isReg">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-5 control-label" >用户名</label>
        <div class="col-sm-2">
          <input type="text" v-model="name" class="form-control" id="inputname3" placeholder="你叫啥">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-5 control-label">密码</label>
        <div class="col-sm-2">
          <input type="password" v-model="password" class="form-control" id="inputPassword3" placeholder="啥密码">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-5 col-sm-2">
          <button type="button"  @click="login()" class="btn btn-default">登录</button>
          <button type="button" @click="reg()" class="btn btn-default">注册</button>
        </div>
      </div>
    </form>
    <form class="form-horizontal" v-else>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-5 control-label" >用户名</label>
        <div class="col-sm-2">
          <input type="text" v-model="name" class="form-control" id="inputname3" placeholder="选一个">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-5 control-label">密码</label>
        <div class="col-sm-2">
          <input type="password" v-model="password" class="form-control" id="inputPassword3" placeholder="偷偷输">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-5 control-label">再次输入密码</label>
        <div class="col-sm-2">
          <input type="password" v-model="repeat" class="form-control" id="inputPassword3" placeholder="来多次">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-5 col-sm-2">
          <button type="button"  @click="addUser()" class="btn btn-default">确定</button>
          <button type="button" @click="cancel()" class="btn btn-default">取消</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password && this.name !== '' && this.password !== '') {
        this.name = ''
        this.password = ''
        this.$router.push('/clock/list')
      } else {
        alert('用户名密码不正确！')
      }
    },
    reg () {
      this.isReg = true
    },
    cancel () {
      this.isReg = false
    },
    addUser () {
      if (this.password === this.repeat && this.name !== '' && this.password !== '') {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.name = ''
        this.password = ''
        this.isReg = false
      } else {
        alert('密码不一致或为空')
      }
    }
  }
}
</script>

<style scoped>

</style>
