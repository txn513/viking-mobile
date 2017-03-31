<template>
  <div class="viking-one">
    <div class="one-outer">
      <div class="container" style="left:0" @touchstart="cardTouchStart" @touchmove.prevent="cardTouchMove" @touchend="cardTouchEnd">
      
        <!-- 第一屏 -->
        <div class="one-wrap current">
          <!-- <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="one oneCenter center">
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
              <!-- :poster="imgurl1" -->
              <video id="mp4" controls webkit-playsinline ></video>
            </div>
            <p class="more">更多视频<span class="more-icon"></span></p>
            <div class="line"></div>
            <div class="video-wrap" @touchstart="testStart" @touchmove.stop="testMove" @touchend="testEnd">
              <ul class="videoSwiper" :style="{width:Allwidth+'px'}" style="left:0">
                <li class="xvideo" v-for="(item,index) in videoData">
                  <div class="videosm">
                    <video class="smallVideo" @touchstart="videoPlay" @touchend="videoPlayTouchEnd" :poster="item.cover" :src="item.link" controls  webkit-playsinline></video>
                  </div>
                  <p class="video-title">{{item.title}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 第二屏 -->
        <div class="one-wrap">
          <!-- <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="one oneRight right">
            <h3 class="vk-title">维京游轮 &nbsp;游轮界的劳斯莱斯</h3>
            <p class="vk-text">旨在为全球旅行者提供高品质的内河与海洋游轮服务</p>
            <img class="pic1" src="../assets/img/one/pic1.png" height="404" width="568" alt="">
            <p class="vk-text1">优先入港 &nbsp;量身定制</p>
            <p class="vk-text2">维京邮轮拥有62艘内河游轮</p>
            <p class="vk-text2">4艘海洋游轮 超过120个停靠口岸</p>
            <p class="vk-text2">累计接待38万游客 &nbsp;&nbsp;340万游客累积巡航天数</p>
            <div class="line1"></div>
            <p class="vk-text3"><span> &nbsp;*&nbsp;</span>作为市场领导者维京游轮可优先进入城区各主要景点2016年推出首批为中国游客量身打造的欧洲内河游轮航线</p>
          </div>
        </div>

        <!-- 第三屏 -->
        <div class="one-wrap ">
         <!--  <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="one oneLeft left">
            <h3 class="vk-title">维京荣耀 &nbsp;屡获殊荣</h3>
            <p class="vk-text">旗下46艘维京船自2012年起屡获殊荣</p>
            <div class="line3"></div>
            <div class="glory glory1">
              <div>
                <p class="vk-text4">11次荣膺 Travel + Leisure</p>
                <p class="vk-text4 last">World’s Best Awards  全球最佳游轮公司</p>
              </div>
            </div>
            <div class="glory glory2"> 
              <div>
                <p class="vk-text4">10次荣膺 Condé Nast Traveler</p>
                <p class="vk-text4 last">Readers’ Choice Awards  最佳河轮</p>
              </div>
            </div>
            <div class="glory glory3">
              <div>
                <p class="vk-text4">5次荣膺  Cruise Critic</p>
                <p class="vk-text4 last">Editor’s Pick</p>
              </div>
            </div>
            <div class="glory glory4">
              <div>
                <p class="vk-text4">10次荣膺 Travel Weekly</p>
                <p class="vk-text4 last">Readers’ Choice Awards 最佳游轮公司</p>
              </div>
            </div>
            <div class="glory glory5">
              <div>
                <p class="vk-text4">6 次荣膺</p>
                <p class="vk-text4">British Travel Awards</p>
                <p class="vk-text4 last">最佳游轮公司</p>
              </div>
            </div>
            <div class="glory glory6">
              <div>
                <p class="vk-text4">10 次荣膺</p>
                <p class="vk-text4">Recommend Readers’ Choice Awards</p>
                <p style="margin-bottom: .1rem" class="vk-text4 last">最佳游轮公司</p>
                <p class="vk-text4">......</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 小圆点 -->
        
      </div>
      <ul class="dot-wrap">
          <li :class="{'active':isCards == 0}"></li>
          <li :class="{'active':isCards == 1}"></li>
          <li :class="{'active':isCards == 2}"></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        videoData:[],
        // videoData: [{
        //   'title': 'Vikinfg<游轮带你去旅行>主题宣传片1111',
        //   'link': 'http://image.linbaoyou.com/upload/test/video/2017032020302405.mp4'
        // }, {
        //   'title': 'Vikinfg<游轮带你去旅行>主题宣传片22222',
        //   'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        // }, {
        //   'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
        //   'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        // }, {
        //   'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
        //   'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        // }, {
        //   'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
        //   'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4'
        // }, ],
        firstLink: [],
        Allwidth: '',
        imgurl1: require('../assets/img/one/video1.png'),
        imgurl2: require('../assets/img/one/video1.png'),
        isCards:0,

        //滑动变量
        cardStartPos:0,
        cardMoveDis : 0,
        cardNewPos:0,
        cardConWidth: 0,
        windowWidth: 0,
        htmlFontSize: 0,
        $container: null,

        proStartPos: 0,
        proMoveDis: 0,
        proContainerWidth: 0,
        proContainerWrapWidth: 0,
        htmlFontSize:0,
      }
    },
    methods: {
      videoPlay(e){
          
      },
      videoPlayTouchEnd(e){
        if(this.proMoveDis == 0){
          e.currentTarget.play()
        }
      },
      getTranslateX(){
        return parseFloat(document.defaultView.getComputedStyle(document.querySelector('.viking-one .container'),null).transform.substring(7).split(',')[4]) || 0
      },
      getVideoTranslateX(){
        return parseFloat(document.defaultView.getComputedStyle(document.querySelector('.viking-one .videoSwiper'),null).transform.substring(7).split(',')[4]) || 0
      },
      cardTouchStart(e){
        this.cardStartPos = e.targetTouches[0].pageX;
        // this.cardNewPos = e.currentTarget.offsetLeft;
        this.cardNewPos = this.getTranslateX();
        console.log(this.cardNewPos);
        this.$container.className="container";
      },
      cardTouchMove(e){
        this.cardMoveDis = e.targetTouches[0].pageX - this.cardStartPos;
        var pos = this.cardNewPos + this.cardMoveDis;
        if(pos > 0){
          // e.currentTarget.style.left = 0+'px';
          e.currentTarget.style.transform = "translate3d(0,0,0)"
        }
        else if (pos <-(this.cardConWidth-this.windowWidth)){
          // e.currentTarget.style.left = -(this.cardConWidth-this.windowWidth) + 'px';
          e.currentTarget.style.transform = "translate3d("+ (-(this.cardConWidth-this.windowWidth)) + 'px' +",0,0)";
        }
        else {
          // e.currentTarget.style.left = pos + 'px';
          e.currentTarget.style.transform = "translate3d("+ pos+ 'px' +",0,0)";
        }


        if(this.getTranslateX() > -(2.95*this.htmlFontSize) ){
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[1].className="one-wrap";
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[0].className ="one-wrap current";
        }
        else if (this.getTranslateX() <= -(2.95*this.htmlFontSize) && this.getTranslateX() > -(8.85*this.htmlFontSize)){
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[0].className="one-wrap";
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[2].className="one-wrap";
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[1].className ="one-wrap current";
        }
        else {
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[1].className="one-wrap";
          document.querySelector('.viking-one .container').querySelectorAll('.one-wrap')[2].className ="one-wrap current";
        }

      },
      cardTouchEnd(e){
        this.$container.className="container containerAnimation";
        if(this.getTranslateX() > -(2.95*this.htmlFontSize) ){
          e.currentTarget.style.transform = "translate3d(0,0,0)"
          this.isCards = 0;

        }
        else if (this.getTranslateX() <= -(2.95*this.htmlFontSize) && this.getTranslateX() > -(8.85*this.htmlFontSize)){
          e.currentTarget.style.transform = "translate3d("+ (-5.9*this.htmlFontSize) + 'px' +",0,0)"
          this.isCards = 1;
          // e.currentTarget.style.left = (-5.9*this.htmlFontSize) + 'px';
        }
        else {
          e.currentTarget.style.transform = "translate3d("+ (-5.9*2*this.htmlFontSize) + 'px' +",0,0)"
          this.isCards = 2;
          // e.currentTarget.style.left = (-5.9*2*this.htmlFontSize) + 'px';

        }
      },
      testStart(e) {
        this.proStartPos = e.targetTouches[0].pageX;
        this.proMoveDis = 0;
        this.newProPos = this.getVideoTranslateX();
      },
      testMove(e) {
        e.stopPropagation();
        this.proMoveDis = e.targetTouches[0].pageX - this.proStartPos;
        var pos = this.newProPos + this.proMoveDis;
        e.currentTarget.querySelector('.videoSwiper').style.transform = "translate(" + pos + "px" + ",0)";
      },
      testEnd(e) {
        if(this.Allwidth > this.proContainerWrapWidth){
          if (this.getVideoTranslateX() >= 0) {
            e.currentTarget.querySelector('.videoSwiper').style.transform = "translate(0,0)";
          } 
          else if (this.getVideoTranslateX() < -(this.Allwidth - this.proContainerWrapWidth)) {
            e.currentTarget.querySelector('.videoSwiper').style.transform = "translate(" + (-(this.Allwidth - this.proContainerWrapWidth)) + "px" + ",0)";
          }
        }
        else {
          e.currentTarget.querySelector('.videoSwiper').style.transform = "translate(0,0)";
        }

        
        //console.log( this.proMoveDis);
      },
      
    },

    mounted() {
      this.htmlFontSize = parseFloat(document.documentElement.style.fontSize);
      
      this.proContainerWrapWidth = this.$el.querySelector('.video-wrap').clientWidth;

      // ==========================  滑动   ================================================
      var self = this;
      var xstar, ystar, xmove, ymove, xend, yend, disx;
      // document.addEventListener('touchstart', function(e) {

      //   xstar = e.touches[0].pageX;
      //   ystar = e.touches[0].pageX;


      // }, false);
      // document.addEventListener('touchmove', function(e) {
      // 	e.preventDefault()
      //   xmove = e.touches[0].pageX;
      //   ymove = e.touches[0].pageX;
      //   var disx = xmove-xstar
      //   console.log(disx);
      //   document.querySelector('.container').style.left = disx/100+parseInt(document.querySelector('.container').style.left)/100 +'rem'

      // }, false);

      // document.addEventListener('touchend', function(e) {
      //   xend = e.changedTouches[0].pageX;
      //   yend = e.changedTouches[0].pageY;
      //   if (xstar - xend < -45) { //右滑动
      //   	 //小圆点
      //     self.isCards--
      //     if (self.isCards<=0) {
      //     	self.isCards = 0
      //     }
      //   	console.log('右滑动');
      //     document.querySelector('.container').style.left = -7.5*self.isCards +'rem'

         
      //   } else if (xstar - xend > 45) { //左滑动
      //   	 //小圆点
      //     self.isCards++
      //     if (self.isCards>=2) {
      //     	self.isCards = 2
      //     }
      //   	console.log('左滑动');
      //     document.querySelector('.container').style.left = -7.5*self.isCards +'rem'

         
      //   } else if (xstar - xend >= -45 && xstar - xend < 0) { //不满足右滑动
      //     if (xend < 0) {
      //       console.log('满足右滑动');
      //     } else {
      //       console.log('test');
      //     }
      //   } else if (xstar - xend <= 45 && xstar - xend > 0) { //不满足左滑动
      //     if (xend > 636) {
      //       console.log('不满足左滑动');
      //     } else {
      //       console.log('test');
      //     }

      //   } else {
      //     return
      //   }
      //   //清除事件监听
      //   document.removeEventListener('touchstart', function() {})
      //   document.removeEventListener('touchmove', function() {})
      //   document.removeEventListener('touchend', function() {})
      // }, false);
      this.$container = document.querySelector('.viking-one .container');
      this.cardConWidth = document.querySelector('.viking-one .container').clientWidth;
      // this.htmlFontSize = parseFloat(document.documentElement.style.fontSize);
      // this.windowWidth = document.body.clientWidth;
      // var self = this;
      // this.$http.get('/liner/liner_getLinerVideo').then(function(res) {
      //   console.log(res);
      //   self.videoData =res.data;
        
      //   // self.firstLink = self.videoData[0].link;
      // self.Allwidth = (self.videoData.length * (1.83 + 0.1) - 0.1)*self.htmlFontSize; //更多视频总长度

      // }, function(err) {});


    },
    created: function() {
      //ajax请求数据
      // console.log('test');
      // this.videoData= [{
      //     'title': 'Vikinfg<游轮带你去旅行>主题宣传片1111',
      //     'link': 'http://image.linbaoyou.com/upload/test/video/2017032020302405.mp4',
      //     "cover":'http://www.linbaoyou.com/viking/static/img/img_1.eca3476.png'
      //   }, {
      //     'title': 'Vikinfg<游轮带你去旅行>主题宣传片22222',
      //     'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4',
      //     "cover":'http://www.linbaoyou.com/viking/static/img/img_1.eca3476.png'
      //   }, {
      //     'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
      //     'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4',
      //     "cover":'http://www.linbaoyou.com/viking/static/img/img_1.eca3476.png'
      //   }, {
      //     'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
      //     'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4',
      //     "cover":'http://www.linbaoyou.com/viking/static/img/img_1.eca3476.png'
      //   }, {
      //     'title': 'Vikinfg<游轮带你去旅行>主题宣传片3333',
      //     'link': 'http://image.linbaoyou.com/upload/test/video/20170320194127900.mp4',
      //     "cover":'http://www.linbaoyou.com/viking/static/img/img_1.eca3476.png'
      //   }, ];
      this.htmlFontSize = parseFloat(document.documentElement.style.fontSize);
      this.windowWidth = document.body.clientWidth;
      var self = this;
      this.$http.get('/liner/liner_getLinerVideo').then(function(res) {
        console.log(res);
        self.videoData =res.data;
        
        // self.firstLink[0] = self.videoData[0].link;
        document.getElementById('mp4').src =self.videoData[0].link;
        document.getElementById('mp4').setAttribute("poster",self.videoData[0].cover);
      self.Allwidth = (self.videoData.length * (1.83 + 0.1) - 0.1)*self.htmlFontSize; //更多视频总长度

      }, function(err) {});

      
    },

}
</script>
<style scoped lang="scss">

/* This used to work for parent element of button divs */

/* But it is not enough now, below dont hide play button parent div */

.smallVideo::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}

/* Old shadow dom for play button */

.smallVideo::--webkit-media-controls-play-button {
  display: none!important;
  -webkit-appearance: none;
}

/* New shadow dom for play button */

/* This one works */

.smallVideo::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}


.viking-one {
  width: 100%;
  height: 100%;
  // background: url('../assets/img/one/one-bg.png') top center no-repeat;
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
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.container {
  width: 20.5rem;
  height: 9.66rem;
  position: absolute;
  left: 0;
  padding-left: 0.7rem;
/*  transition: all .3s ease;*/
}
.containerAnimation {
  transition: all 0.5s linear
}

.one-wrap {
  width: 6.1rem;
  position: relative;
  float: left;
  margin: 0 -0.1rem;
  transform: scale(0.8);
  transition: all .8s ease;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &.current {
    transform: scale(1);
    transition: all .8s ease;
  }
}

.one-wrap .white {
  width: .24rem;
  height: 7.95rem;
  background-color: rgba(255, 255, 255, .5);
  position: absolute;
  top: .85rem;
}

.one-wrap .white.white-left {
  left: 0;
  border-top-right-radius: .07rem;
  border-bottom-right-radius: .07rem;
}

.one-wrap .white.white-right {
  right: 0;
  border-top-left-radius: .07rem;
  border-bottom-left-radius: .07rem;
}

.one {
  width: 6.1rem;
  height: 9.66rem;
  background-color: #ffffff;
  border-radius: .08rem;
  /*margin: 0 auto;*/
  padding-top: .29rem;
  box-shadow: .01rem 0rem .1rem rgba(45, 6, 17, 0.5), -0.01rem 0rem .1rem rgba(45, 6, 17, 0.5), 0 .04rem .8rem rgba(45, 6, 17, 0.7);
}

.left {
  /* display: none */
}

.right {
  /* display: none */
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

.video-box {
  margin: 0 auto;
  margin-top: .28rem;
  width: 5.68rem;
  height: 3.23rem;
  border: .06rem solid #ffffff;
  margin-bottom: .23rem;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, .05), -1px 0px 10px rgba(0, 0, 0, .05), 0px 4px 20px rgba(0, 0, 0, .2);
}

#mp4 {
  width: 5.56rem;
  height: 3.1rem;
}

.more {
  font-size: .2rem;
  color: #363636;
  margin-bottom: .06rem;
  padding-left: .2rem;
  text-align: left;
}

.more .more-icon {
  display: inline-block;
  width: .19rem;
  height: .14rem;
  background: url('../assets/img/one/more.png') center no-repeat;
  margin-left: .1rem;
}

.line {
  width: 5.68rem;
  height: .02rem;
  margin: 0 auto;
  background-color: #3b3b3b;
  margin-bottom: .09rem;
}

.video-wrap {
  width: 5.69rem;
  height: 1.4rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all .1s ease;
}

.video-wrap ul {
  position: absolute;
}

.xvideo {
  width: 1.83rem;
  float: left;
}

.xvideo + .xvideo {
  margin-left: .1rem;
}

.xvideo .videosm {
  width: 100%;
  height: 1.02rem;
  background-color: #fff;
  border: 4px solid #fff;
  margin-bottom: .09rem;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, .05), -1px 0px 4px rgba(0, 0, 0, .05), 0px 4px 10px rgba(0, 0, 0, .2);
}

.xvideo .videosm video {
  width: 1.75rem;
  height: .94rem;
}

.video-title {
  display: block;
  width: 1.83rem;
  height: .17rem;
  line-height: .17rem;
  font-size: .17rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.dot-wrap {
  height: .16rem;
  position: absolute;
  left: 50%;
  top: 10.28rem;
  transform: translateX(-50%);
  transition: all .2s ease;
}

.dot-wrap li {
  float: left;
  width: .16rem;
  height: .16rem;
  margin: 0 .05rem;
  border-radius: .08rem;
  border: 2px solid #b81b48;
}

.dot-wrap li.active {
  background-color: #ce1747;
  width: .32rem;
}

.oneRight {
  padding-top: .36rem;
}

.oneRight .pic1 {
  width: 5.68rem;
  height: 4.04rem;
  display: block;
  margin: .29rem auto .6rem;
}

.oneRight .vk-text1 {
  height: .29rem;
  font-size: .29rem;
  color: #323232;
  line-height: .29rem;
  text-align: center;
  margin-bottom: .34rem;
  font-weight: 600;
}

.oneRight .vk-text2 {
  height: .22rem;
  font-size: .22rem;
  color: #3f3f3f;
  line-height: .22rem;
  text-align: center;
  margin-bottom: .13rem;
}

.line1 {
  margin: 0 auto;
  margin-top: .56rem;
  margin-bottom: .31rem;
  height: .01rem;
  background-color: #dedede;
  width: 5.68rem;
}

.oneRight .vk-text3 {
  padding: 0 .27rem;
  font-size: .21rem;
  color: #8a8a8a;
  line-height: .32rem;
}

.oneRight .vk-text3 span {
  font-size: .21rem;
  color: #cf1747;
  line-height: .32rem;
}

.oneLeft .vk-title {
  margin-bottom: .15rem;
}

.oneLeft .vk-text {
  margin-bottom: .2rem;
}

.oneLeft .line3 {
  width: 100%;
  height: .18rem;
  background: url('../assets/img/one/lineLeft.png') no-repeat;
  background-size: 100% 100%;
  margin-bottom: .16rem;
}

.glory {
  width: 5.29rem;
  margin-right: .31rem;
  float: right;
  padding-left: 1.49rem;
  padding-top: .33rem;
  text-align:left;
}

.glory >div {
  width: 100%;
  border-bottom: 1px solid #dedede
}

.glory >div .vk-text4 {
  font-size: .2rem;
  color: #565555;
  margin-bottom: .1rem;
}

.glory >div .vk-text4.last {
  margin-bottom: .35rem;
}

.glory1 {
  background: url('../assets/img/one/logo_1.png') left top no-repeat;
}

.glory2 {
  background: url('../assets/img/one/logo_2.png') left -.05rem no-repeat;
}

.glory3 {
  background: url('../assets/img/one/logo_3.png') left -.08rem no-repeat;
}

.glory4 {
  background: url('../assets/img/one/logo_4.png') left -.1rem no-repeat;
}

.glory5 {
  background: url('../assets/img/one/logo_05.png') left top no-repeat;
}

.glory6 {
  background: url('../assets/img/one/logo_06.png') left top no-repeat;
}

.glory6 >div {
  border-bottom: none;
  position: relative;
}
</style>
