<template>
  <div class="viking-one">
    <div class="one-outer">

      <div class="one">
        <h3 class="vk-title">巡游人文欧洲 &nbsp;体验内河游轮之魅</h3>
        <p class="vk-text">河流是人类文明的摇篮</p>
        <p class="vk-text">每一条河流 &nbsp;都有着自己的故事</p>
        <p class="vk-text">一如欧洲的莱茵河与多瑙河</p>
        <p class="vk-text">蜿蜒于欧洲诸国</p>
        <p class="vk-text">流经之地 &nbsp;即是欧洲文明的腹地</p>
        <p class="vk-text">维京内河游轮 &nbsp;航行于这两条璀璨流域</p>
        <p class="vk-text">更穿梭于河流两岸的人文之美</p>
        <p class="vk-text">将宏伟教堂 &nbsp;古老建筑</p>
        <p class="vk-text">摩登艺术中心和璀璨的都市生活</p>
        <p class="vk-text">呈现于您的眼前</p>
        <div class="video-box">
        	<!-- <span style="display: block;width: 100%;height: 1px;background-color: #cacaca"></span> -->
        	<video id="mp4" src="http://image.linbaoyou.com/upload/test/video/2017032020302405.mp4" controls></video>
        </div>
        <p class="more">更多视频<span class="more-icon"></span></p>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        msg: 'viking-one.vue',
        videoData: [{
          'title': 'Vikinfg<游轮带你去旅行>主题宣传片1111',
          'link': 'http://image.linbaoyou.com/upload/test/video/2017032020302405.mp4'
        }, {
          'title': 'Vikinfg<游轮带你去旅行>主题宣传片22222',
          'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        }, {
          'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
          'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        }, {
          'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
          'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        }, {
          'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
          'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        }, ],
      }
    },
    methods: {

    }
}
</script>
<style>
.viking-one {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/img/one/one-bg.png') top center no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.viking-one * {
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
  line-height: 1;
}

.one-outer {
  width: 100%;
  height: 100%;
  padding-top: .41rem;
}

.one {
  width: 6.1rem;
  height: 9.66rem;
  background-color: #ffffff;
  border-radius: .07rem;
  margin: 0 auto;
  padding-top: .29rem;
}

.vk-title {
  text-align: center;
  font-size: .33rem;
  color: #e20043;
  margin-bottom: .24rem;
  line-height: .33rem;
}

.vk-text {
  text-align: center;
  font-size: .22rem;
  color: #3f3f3f;
  margin-bottom: .1rem;
  line-height: .22rem;
}
.video-box{
	margin:  0 auto;
	margin-top: .28rem;
	width: 5.68rem;
	height: 3.23rem;
	border: .06rem solid #ffffff;
	margin-bottom: .23rem;
	box-shadow:  1px 0px 10px rgba(0, 0, 0, .05), -1px 0px 10px rgba(0, 0, 0, .05), 0px 4px 20px rgba(0, 0, 0, .2);
}
#mp4{
	width: 5.56rem;
	height: 3.1rem;
}
.more{
	font-size: .2rem;
	color: #363636;
	margin-bottom: .06rem;
	padding-left: .18rem;
}
.more .more-icon{
	display: inline-block;
	width: .19rem;
	height: .14rem;
	background: url('../assets/img/one/more.png') center no-repeat;
	margin-left: .1rem;
}



</style>
