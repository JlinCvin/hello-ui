<template>
    <div>
    <div class="space"></div>
    <div class="footer jumbotron text-center">
        <p>JlinCvin 个人网站  2019-7</p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'BottomColumn'
}
</script>

<style scoped>
.space{
    height: 90px;
}
.footer{
    margin: 0;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 9;
}
.jumbotron p{
    margin: 0;
}
</style>
