<template>
    <div style="width:100%;overflow:hidden">
    <div class="move-box">
        <div class="wrap-box">
            <div class="box-content">
                <div class="l-front"> <img :src='imgUrl[0]' alt="1"></div>
                <div class="l-left"> <img :src="imgUrl[1]" alt="1"></div>
                <div class="l-back"> <img :src="imgUrl[2]" alt="1"></div>
                <div class="l-right"> <img :src="imgUrl[3]" alt="1"></div>
                <div class="m-front"> <img :src="imgUrl[4]" alt="1"></div>
                <div class="m-left"> <img :src="imgUrl[5]" alt="1"></div>
                <div class="m-back"> <img :src="imgUrl[6]" alt="1"></div>
                <div class="m-right"> <img :src="imgUrl[7]" alt="1"></div>
                <div class="s-front"> <img :src="imgUrl[0]" alt="1"></div>
                <div class="s-left"> <img :src="imgUrl[1]" alt="1"></div>
                <div class="s-back"> <img :src="imgUrl[2]" alt="1"></div>
                <div class="s-right"> <img :src="imgUrl[3]" alt="1"></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'threeDpicture',
    data(){
        return{
            imgUrl: [
                'http://vps1621391.vpszy.sanfengyun.cn/image/01.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/02.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/03.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/05.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/06.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/07.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/08.jpg',
                'http://vps1621391.vpszy.sanfengyun.cn/image/04.jpg',
            ]
        }
    }
}
</script>

<style scoped>
.move-box{
    position: absolute;
    right: 80%; 
    top: 20%; 
    animation: movein 20s infinite;
    -webkit-animation: movein 20s infinite;
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
    z-index: 999;
}
@keyframes movein{
    0%   {right: 80%; top: 20%; }
	25%  {right:20%; top: 20%; }
	50%  {right:20%; top: 70%; }
	75%  {right: 80%; top: 70%; }
	100% {right: 80%; top: 20%; }
}
.wrap-box{
    width: 200px;
    height: 200px;
    perspective: 800px;
}
 /*
    核心容器
*/
.box-content{
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    position: relative;
    animation: rotate 10s infinite linear;
}
@keyframes rotate {
    0%{ transform: rotateX(-10deg) rotateY(0deg) }
    50%{ transform: rotateX(-10deg) rotateY(180deg) }
    100%{ transform: rotateX(-10deg) rotateY(360deg) }
}
@-webkit-keyframes rotate {
    0%{ -webkit-transform: rotateX(-10deg) rotateY(0deg) }
    50%{ -webkit-transform: rotateX(-10deg) rotateY(180deg) }
    100%{ -webkit-transform: rotateX(-10deg) rotateY(360deg) }
}
.box-content img{
    width:100%;
}
.box-content div{
    position: absolute;
    transition: all 0.2s ease;
    left: 0;
}
 /*
    外层div
*/
.box-content div[class^="l"]{
    width: 200px;
    height: 200px;
    top:0;
}
 /*
    中间div
*/
.box-content div[class^="m"]{
    width: 150px;
    height: 150px;
    opacity: 0;
    top: 30px;
}
 /*
    内层div
*/
.box-content div[class^="s"]{
    width: 100px;
    height: 100px;
    opacity: 0;
    top: 50px;
}
.box-content:hover div[class^="l"]{
    top:0;
}
.box-content:hover div[class^="m"]{
    opacity: 1;
}
.box-content:hover div[class^="s"]{
    opacity: 1;
}
 /*
    前方元素
*/
.box-content div[class*="front"]{
    transform: translateZ(100px);
    -webkit-transform: translateZ(100px);
}
/*
    左边元素
*/
.box-content div[class*="left"]{
    transform: translateX(-100px) rotateY(-90deg);
    -webkit-transform: translateX(-100px) rotateY(-90deg);
}
/*
    后方元素
*/
.box-content div[class*="back"]{
    transform: translateZ(-100px);
    -webkit-transform: translateZ(-100px);
}
/*
    右边元素
*/
.box-content div[class*="right"]{
    transform: translateX(100px) rotateY(90deg);
    -webkit-transform: translateX(100px) rotateY(90deg);
}
 
.box-content:hover div.l-front{
    transform: translateZ(250px);
    -webkit-transform: translateZ(250px);
}
.box-content:hover div.m-front{
    transform: translateZ(150px);
    -webkit-transform: translateZ(150px);
}
.box-content:hover div.s-front{
    transform: translateZ(50px);
    -webkit-transform: translateZ(50px);
}
.box-content:hover div.l-left{
    transform: translateX(-250px) rotateY(-90deg);
    -webkit-transform: translateX(-250px) rotateY(-90deg);
}
.box-content:hover div.m-left{
    transform: translateX(-150px) rotateY(-90deg);
    -webkit-transform: translateX(-150px) rotateY(-90deg);
}
.box-content:hover div.s-left{
    transform: translateX(-50px) rotateY(-90deg);
    -webkit-transform: translateX(-50px) rotateY(-90deg);
}
 
.box-content:hover div.l-back{
    transform: translateZ(-250px);
    -webkit-transform: translateZ(-250px);
}
.box-content:hover div.m-back{
    transform: translateZ(-150px);
    -webkit-transform: translateZ(-150px);
}
.box-content:hover div.s-back{
    transform: translateZ(-50px);
    -webkit-transform: translateZ(-50px);
}
 
.box-content:hover div.l-right{
    transform: translateX(250px) rotateY(90deg);
    -webkit-transform: translateX(250px) rotateY(90deg);
}
.box-content:hover div.m-right{
    transform: translateX(150px) rotateY(90deg);
    -webkit-transform: translateX(150px) rotateY(90deg);
}
.box-content:hover div.s-right{
    transform: translateX(50px) rotateY(90deg);
    -webkit-transform: translateX(50px) rotateY(90deg);
}
</style>
