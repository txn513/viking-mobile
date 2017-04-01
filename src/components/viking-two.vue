<template>
  <div class="viking-two">
    <div class="two-outer">
      <div class="container" style="left:0" @touchstart="cardTouchStart" @touchmove.prevent="cardTouchMove" @touchend="cardTouchEnd">
        <!-- 真正一价全包 &nbsp;轻装出行 -->
        <div class="two-wrap current">
          <!-- <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="two">
            <h3 class="vk-title">真正一价全包 &nbsp;轻装出行</h3>
            <p class="vk-text">专为中国游客量身定制的欧洲内河游轮</p>
            <img class="pic" src="../assets/img/two/pic1.png" alt="">
            <p class="poinys">【游轮全含】</p>
            <p class="vk-text1">游轮住宿费用 &nbsp;所有餐食 &nbsp;饮品费用</p>
            <p class="vk-text1 last">船上WiFi服务费用 &nbsp;小费</p>
            <p class="poinys">【岸上游览全含】</p>
            <p class="vk-text1 last">所有门票 &nbsp;岸上观光交通餐食费用</p>
            <p class="poinys">【礼宾接送机含】</p>
            <p class="vk-text1 last">港口至机场接送交通费用</p>
          </div>
        </div>
        <!-- 24小时全程中文礼宾服务 -->
        <div class="two-wrap">
      <!--     <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="two">
            <h3 class="vk-title">24小时全程中文礼宾服务</h3>
            <p class="vk-text">从机舱门接机开始的全程中文礼宾服务</p>
            <img class="pic" src="../assets/img/two/pic2.png" alt="">
            <p class="vk-text2">从您出机场的那一刻起，维京的迎宾服务就开始了。维京服务人员均说流利普通话，提供中文菜单、中文引导牌和中文行程单。</p>
            <p class="vk-text2">在游轮上、旅游观光中，甚至购物的过程中，礼宾员都将全程陪同。维京特为岸上观光配备专属游览巴士，船在河上行，大巴跟船走，保证服务品质始终如一。</p>
          </div>
        </div>
        <!-- 河上的中式厨师 -->
        <div class="two-wrap">
   <!--        <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="two">
            <h3 class="vk-title">欧洲河上的中式厨房</h3>
            <p class="vk-text">特聘星厨刘一帆为维京美食顾问</p>
            <img class="pic" src="../assets/img/two/pic3.png" alt="">
            <p class="poinys">中西结合 &nbsp;满足味蕾</p>
            <p class="vk-text1 last">特设华人行政主厨 &nbsp;广东大厨和四川大厨掌勺</p>
            <p class="poinys">【中式美食】</p>
            <p class="vk-text1">广式煲汤 &nbsp;中式炒菜 &nbsp;汤面炒饭</p>
            <p class="vk-text1 last">现煮面档 &nbsp;中式点心</p>
            <p class="poinys">【西式美食】</p>
            <p class="vk-text1">德国猪脚香肠 &nbsp;德国啤酒 &nbsp;瑞士芝士火锅</p>
            <p class="vk-text1 last">法式大餐 &nbsp;海鲜自助</p>
          </div>
        </div>
        <!-- 深入欧洲腹地 -->
        <div class="two-wrap">
          <div class="two">
            <h3 class="vk-title">深入欧洲腹地 &nbsp;领略世遗之美</h3>
            <p class="vk-text">瓦豪河谷 &nbsp;科隆大教堂 &nbsp;美泉宫</p>
            <img class="pic" src="../assets/img/two/pic4.png" alt="">
            <p class="vk-text2">维京游轮每一条游轮都由世界领先的船舶设计团队，根据欧洲内河航行标准建造，可以驶入城区停靠港口，深入常规巴士旅行难以抵达之地。</p>
            <p class="vk-text2">作为市场领导者，维京游轮可优先进入城区各主要景点。并特别安排欧洲航线前往世界（文化）遗产区：瓦豪河谷、科隆大教堂和美泉宫浏览观光。</p>
          </div>
        </div>
        <!-- 分期免息 -->
        <div class="two-wrap">
          <!-- <div class="white white-left"></div>
          <div class="white white-right"></div> -->
          <div class="two">
            <h3 class="vk-title">分期免息 &nbsp;最低首付￥1158</h3>
            <p class="vk-text">维京游轮深圳合作授权 &nbsp;精品小团 &nbsp;保证出发</p>
            <img class="pic" src="../assets/img/two/pic5.png" alt="">
            <p class="vk-text2">康辉旅游为维京游轮深圳地区旅游代理商，2017年航线独享维京游轮性价比和满意度最高的17间浪漫法式露台房。</p>
            <p class="vk-text2">特别策划精品小团，每团不超过28人，配备中文领队服务。免费协助预定航班，确保预定即可出发。</p>
          </div>
        </div>
      </div>
      <ul class="dot-wrap">
        <li :class="{'active':isCards == 0}"></li>
        <li :class="{'active':isCards == 1}"></li>
        <li :class="{'active':isCards == 2}"></li>
        <li :class="{'active':isCards == 3}"></li>
        <li :class="{'active':isCards == 4}"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        msg: '',
        isCards: 0,
        //滑动变量
        cardStartPos:0,
        cardMoveDis : 0,
        cardNewPos:0,
        cardConWidth: 0,
        windowWidth: 0,
        htmlFontSize: 0,
        $container: null,

        touchStartTranslateX:0,
        navObj: null,
        $bigWrap: null,
        navWidth: 0,

        startMoveTime:0,
        endMoveTime:0,
        lastIsCard:0
      }
    },
    methods:{
      getTranslateX(){
        return parseFloat(document.defaultView.getComputedStyle(document.querySelector('.viking-two .container'),null).transform.substring(7).split(',')[4]) || 0
      },
      cardTouchStart(e){
        this.cardStartPos = e.targetTouches[0].pageX;
        // this.cardNewPos = e.currentTarget.offsetLeft;
        this.cardNewPos = this.getTranslateX();
        console.log(this.cardNewPos);
        this.$container.className="container";
        this.touchStartTranslateX = this.getTranslateX();
        this.cardMoveDis = 0;
        this.startMoveTime = new Date().getTime();
        this.lastIsCard = this.isCards
      },
      cardTouchMove(e){
        this.cardMoveDis = e.targetTouches[0].pageX - this.cardStartPos;
        // var pos = this.cardNewPos + this.cardMoveDis;
        // if(pos > 0){
        //   // e.currentTarget.style.left = 0+'px';
        //   //e.currentTarget.style.transform = "translate3d(0,0,0)"
        // }
        // else if (pos <-(this.cardConWidth-this.windowWidth)){
        //   // e.currentTarget.style.left = -(this.cardConWidth-this.windowWidth) + 'px';
        //   //e.currentTarget.style.transform = "translate3d("+ (-(this.cardConWidth-this.windowWidth)) + 'px' +",0,0)";
        // }
        // else {
        //   // e.currentTarget.style.left = pos + 'px';
          
        // }
        

        if(this.getTranslateX() > -(2.95*this.htmlFontSize) ){
          this.$container.querySelectorAll('.two-wrap')[1].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[0].className ="two-wrap current";
          this.isCards = 0
        }
        else if (this.getTranslateX() <= -(2.95*this.htmlFontSize) && this.getTranslateX() > -(8.85*this.htmlFontSize)){
          this.$container.querySelectorAll('.two-wrap')[0].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[2].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[1].className ="two-wrap current";
          this.isCards = 1
        }
        else if (this.getTranslateX() <= -(8.85*this.htmlFontSize) && this.getTranslateX() > -((5.9*2+2.95)*this.htmlFontSize)){
          this.$container.querySelectorAll('.two-wrap')[1].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[3].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[2].className ="two-wrap current";
          this.isCards = 2
        }
        else if (this.getTranslateX() <= -((5.9*2+2.95)*this.htmlFontSize) && this.getTranslateX() > -((5.9*3+2.95)*this.htmlFontSize)){
          this.$container.querySelectorAll('.two-wrap')[2].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[4].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[3].className ="two-wrap current";
          this.isCards = 3
        }
        else {
          this.$container.querySelectorAll('.two-wrap')[3].className="two-wrap";
          this.$container.querySelectorAll('.two-wrap')[4].className ="two-wrap current";
          this.isCards = 4
        }


        if(e.targetTouches[0].pageX <= 1){
          this.$container.className="container containerAnimation";
          if(this.isCards == 0){
            e.currentTarget.style.transform = "translate3d(0,0,0)"
          }
          else if (this.isCards == 1){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*this.htmlFontSize) + 'px' +",0,0)"
          }
          else if (this.isCards == 2){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*2*this.htmlFontSize) + 'px' +",0,0)"
          }
          else if (this.isCards == 3){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*3*this.htmlFontSize) + 'px' +",0,0)"
          }
          else if (this.isCards == 4){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*4*this.htmlFontSize) + 'px' +",0,0)"
          }
        }
        else if (parseInt(e.targetTouches[0].pageX/10) >= parseInt(this.windowWidth/10-1)){

          e.currentTarget.className="container containerAnimation";
          if(this.isCards == 0){
            e.currentTarget.style.transform = "translate3d(0,0,0)"
          }
          else if (this.isCards == 1){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*this.htmlFontSize) + 'px' +",0,0)"
          }
          else if (this.isCards == 2){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*2*this.htmlFontSize) + 'px' +",0,0)"
          }
          else if (this.isCards == 3){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*3*this.htmlFontSize) + 'px' +",0,0)"
          }
          else if (this.isCards == 4){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*4*this.htmlFontSize) + 'px' +",0,0)"
          }
        }
        else {
          e.currentTarget.style.transform = "translate3d("+ (this.cardNewPos + this.cardMoveDis)+ 'px' +",0,0)";
        }
        e.currentTarget.style.transform = "translate3d("+ (this.cardNewPos + this.cardMoveDis)+ 'px' +",0,0)";
      },
      cardTouchEnd(e){
        this.$container.className="container containerAnimation";
        this.endMoveTime = new Date().getTime();
        var moveTime = this.endMoveTime - this.startMoveTime;


        if(moveTime <400){
          if(this.cardMoveDis <0){
            if(this.lastIsCard == 0){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 1;
              this.$container.querySelectorAll('.two-wrap')[0].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[1].className ="two-wrap current";
            }
            else if(this.lastIsCard == 1){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*2*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 2;
              this.$container.querySelectorAll('.two-wrap')[1].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[2].className ="two-wrap current";
            }
            else if(this.lastIsCard == 2){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*3*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 3;
              this.$container.querySelectorAll('.two-wrap')[2].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[3].className ="two-wrap current";
            }
            else if(this.lastIsCard == 3){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*4*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 4;
              this.$container.querySelectorAll('.two-wrap')[3].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[4].className ="two-wrap current";
            }
            else if(this.lastIsCard == 4){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*4*this.htmlFontSize) + 'px' +",0,0)";
              this.$bigWrap.className = "viking-big-wrap viking-big-wrap-3";
              this.navObj.style.transform = "translate3d("+ (this.navWidth*2)+"px" +",0,0)"
              this.navObj.innerHTML = '邮轮介绍';
              this.$router.replace('/vikingThree');
            }
          }
          else if(this.cardMoveDis >0){
            if(this.lastIsCard == 4){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*3*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 3;
              this.$container.querySelectorAll('.two-wrap')[4].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[3].className ="two-wrap current";
            }
            else if(this.lastIsCard == 3){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*2*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 2;
              this.$container.querySelectorAll('.two-wrap')[3].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[2].className ="two-wrap current";
            }
            else if(this.lastIsCard == 2){
              e.currentTarget.style.transform = "translate3d("+ (-5.9*this.htmlFontSize) + 'px' +",0,0)"
              this.isCards = 1;
              this.$container.querySelectorAll('.two-wrap')[2].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[1].className ="two-wrap current";
            }
            else if (this.lastIsCard == 1){
              e.currentTarget.style.transform = "translate3d(0,0,0)"
              this.isCards = 0;
              this.$container.querySelectorAll('.two-wrap')[1].className="two-wrap";
              this.$container.querySelectorAll('.two-wrap')[0].className ="two-wrap current";
            }
            else if (this.lastIsCard == 0){
              e.currentTarget.style.transform = "translate3d(0,0,0)";
              this.$bigWrap.className = "viking-big-wrap viking-big-wrap-1";
              this.navObj.style.transform = "translate3d(0,0,0)"
              this.navObj.innerHTML = '一价全包';
              this.$router.replace('/');
            }
          }
        }
        else {
          if((this.touchStartTranslateX).toFixed(2) == (-23.6*this.htmlFontSize).toFixed(2)){
            if(this.cardMoveDis < -200) {
              this.$bigWrap.className = "viking-big-wrap viking-big-wrap-3";
              this.navObj.style.transform = "translate3d("+ (this.navWidth*2)+"px" +",0,0)"
              this.navObj.innerHTML = '邮轮介绍';
              this.$router.replace('/vikingThree');
            }
          }
          else if(this.touchStartTranslateX == 0){
             if(this.cardMoveDis > 200) {
              this.$bigWrap.className = "viking-big-wrap viking-big-wrap-1";
              this.navObj.style.transform = "translate3d(0,0,0)"
              this.navObj.innerHTML = '一价全包';
              this.$router.replace('/');
             }
          }


          if(this.getTranslateX() > -(2.95*this.htmlFontSize) ){
            e.currentTarget.style.transform = "translate3d(0,0,0)"
            this.isCards = 0;

          }
          else if (this.getTranslateX() <= -(2.95*this.htmlFontSize) && this.getTranslateX() > -(8.85*this.htmlFontSize)){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*this.htmlFontSize) + 'px' +",0,0)"
            this.isCards = 1;
            // e.currentTarget.style.left = (-5.9*this.htmlFontSize) + 'px';
          }
          else if (this.getTranslateX() <= -(8.85*this.htmlFontSize) && this.getTranslateX() > -((5.9*2+2.95)*this.htmlFontSize)){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*2*this.htmlFontSize) + 'px' +",0,0)"
            this.isCards = 2;
          }
           else if (this.getTranslateX() <= -((5.9*2+2.95)*this.htmlFontSize) && this.getTranslateX() > -((5.9*3+2.95)*this.htmlFontSize)){
            e.currentTarget.style.transform = "translate3d("+ (-5.9*3*this.htmlFontSize) + 'px' +",0,0)"
            this.isCards = 3;
           }
          else {
            e.currentTarget.style.transform = "translate3d("+ (-5.9*4*this.htmlFontSize) + 'px' +",0,0)"
            this.isCards = 4;
            // e.currentTarget.style.left = (-5.9*2*this.htmlFontSize) + 'px';

          }
        }

        
      },
    },
    mounted() {
      // ==========================  滑动   ================================================
      var self = this;
      var xstar, ystar, xmove, ymove, xend, yend, disx;


      this.$bigWrap = document.querySelector('.viking-big-wrap');
      this.navObj = document.querySelector('.viking-slide-btn');
      this.navWidth = this.navObj.clientWidth;
      // document.querySelector('.container').addEventListener('touchstart', function(e) {

      //   xstar = e.touches[0].pageX;
      //   ystar = e.touches[0].pageX;


      // }, false);
      // document.addEventListener('touchmove', function(e) {
      //   e.preventDefault()
      //   xmove = e.touches[0].pageX;
      //   ymove = e.touches[0].pageX;
      //   var disx = xstar - xmove
      //   console.log(disx + "disx");
      //   if (disx < 0) { //往右拖动
      //     document.querySelector('.container').style.left = -(disx / 100 + parseInt(document.querySelector('.container').style.left) / 100) + 'rem'
      //   } else { //往左拖动
      //   	console.log(1);
      //     document.querySelector('.container').style.left = (parseInt(document.querySelector('.container').style.left) / 100-disx / 100  ) + 'rem'

      //   }

      // }, false);

      // document.addEventListener('touchend', function(e) {
      //   xend = e.changedTouches[0].pageX;
      //   yend = e.changedTouches[0].pageY;
      //   if (xstar - xend < -45) { //右滑动
      //     //小圆点
      //     self.isCards--
      //       if (self.isCards <= 0) {
      //         self.isCards = 0
      //       }
      //     console.log('右滑动');
      //     document.querySelector('.container').style.left = -7.5 * self.isCards + 'rem'


      //   } else if (xstar - xend > 45) { //左滑动
      //     //小圆点
      //     self.isCards++
      //       if (self.isCards >= 4) {
      //         self.isCards = 4
      //       }
      //     console.log('左滑动');
      //     document.querySelector('.container').style.left = -7.5 * self.isCards + 'rem'


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
      this.$container = document.querySelector('.viking-two .container');
      this.cardConWidth = document.querySelector('.viking-two .container').clientWidth;
      this.htmlFontSize = parseFloat(document.documentElement.style.fontSize);
      this.windowWidth = document.body.clientWidth;
      // console.log(this.$container.querySelectorAll('.two-wrap')[0]);
    }
}
</script>
<style scoped lang="scss">
.viking-two {
  width: 100%;
  height: 100%;
  // background: url('../assets/img/two/two-bg.png') top center no-repeat;
  // background-size: 100% 100%;
  overflow: hidden;
  text-align:left;
}

.container {
  width: 37.5rem;
  height: 9.66rem;
  position: absolute;
  left: 0;
  padding-left: 0.7rem;
  /*transition: all .3s ease;*/
}
.containerAnimation {
  transition: all 0.4s ease-in-out
}

.viking-two * {
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
  line-height: 1;
}

.two-outer {
  width: 100%;
  height: 100%;
  padding-top: .41rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.two-wrap {
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

.two-wrap .white {
  width: .24rem;
  height: 7.95rem;
  background-color: rgba(255, 255, 255, .5);
  position: absolute;
  top: .85rem;
}

.two-wrap .white.white-left {
  left: 0;
  border-top-right-radius: .07rem;
  border-bottom-right-radius: .07rem;
}

.two-wrap .white.white-right {
  right: 0;
  border-top-left-radius: .07rem;
  border-bottom-left-radius: .07rem;
}

.two {
  width: 6.1rem;
  height: 9.66rem;
  background-color: #ffffff;
  border-radius: .08rem;
  margin: 0 auto;
  padding-top: .32rem;
  box-shadow: .01rem 0rem .1rem rgba(39, 6, 15, 0.25), -0.01rem 0rem .1rem rgba(39, 6, 15, 0.25), 0 .04rem .8rem rgba(39, 6, 15, 0.5);
}

.vk-title {
  text-align: center;
  font-size: .33rem;
  color: #e20043;
  margin-bottom: .18rem;
  line-height: .33rem;
}

.vk-text {
  text-align: center;
  font-size: .24rem;
  color: #3f3f3f;
  margin-bottom: .16rem;
  line-height: .24rem;
}

.pic {
  display: block;
  margin: 0 auto;
  width: 5.7rem;
  height: 4.42rem;
  margin-bottom: .4rem;
}

.poinys {
  font-size: .24rem;
  line-height: .24rem;
  color: #080808;
  font-weight: 600;
  margin-bottom: .17rem;
  text-align: center;
}

.vk-text1 {
  font-size: .22rem;
  line-height: .22rem;
  color: #3f3f3f;
  margin-bottom: .13rem;
  text-align: center;
}

.vk-text1.last {
  margin-bottom: .35rem;
}

.vk-text2 {
  padding: 0 .35rem;
  font-size: .23rem;
  color: #3f3f3f;
  text-indent: 2em;
  line-height: .36rem;
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

</style>
