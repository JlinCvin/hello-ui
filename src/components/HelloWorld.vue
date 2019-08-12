<template>
  <div class="hello">
  <div class="container">
  <div class="row">
  <div class="col-sm-4">
  <h2>个人简历</h2>
  <viewer :images="photo">
    <img
      v-for="(src,index) in photo"
      :src="src"
      :key="index"
      :onerror="errorImg"
      width="79"
      height="112"
    >
</viewer>
  <h3>陈振霖 166-2474-7010</h3>
  <h4>邮箱:</h4>
  <a href="mailto:963510059@qq.com?subject=Hello">963510059@qq.com</a>
  <h4>练习作品：</h4>
  <ul class="nav nav-pills nav-stacked">
    <li><a href="https://github.com/JlinCvin/WEB" target="_blank">WEB网站代码</a></li>
    <li><a href="https://github.com/JlinCvin/vue-ui" target="_blank" title='VUE单页应用'>VUE单页应用</a></li>
    <li><a href="https://github.com/JlinCvin/taobao" target="_blank">python爬虫</a></li>
  </ul>
  <hr class="hidden-sm hidden-md hidden-lg">
  </div>
  <div class="col-sm-7">
  <h2>前端实习生 <small>期望薪资：面议</small></h2><br/>
  <h3><b>●广州大学 信息安全专业 本科 数学与信息科学学院 </b><small>2016.9-2020.7</small></h3><br />
  <h3><b>●专业课：</b><small>计算机组成原理，计算机操作系统，计算机网络，
    计算机算法设计与分析，信息论与编码，密码学原理，数据库原理，操作系统安全，
    软件工程导论
  WEB编程基础，CSS网页设计标准教程，数据结构。</small></h3><br>
  <h3>●实习时间2019.8-2020.3   实习时长：6个月  </h3><br>
  <h3>●GitHub个人网站:<a href="https://github.com/JlinCvin/" target="_blank">https://github.com/JlinCvin/ </a></h3>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      photo: ['img/111.94600a3a.jpg']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.changeStyle{
  display: none;
}
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}
.modal-content {
    margin: auto;
    display: block;
    width: 100%;
    max-width: 1000px;
}
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}
.modal-content, #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}
</style>
