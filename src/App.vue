<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a @click.prevent="clickLinkOne">Go to Hello</a>
    <a @click.prevent="clickLinkTwo">Go to Test</a> -->

    <!-- v-if="ifOnce" -->
    <div class="touchWrap" style="margin-top: 0px" @touchstart.prevent='vTouchStart' @touchend="vTouchEnd" @touchmove.prevent="vTouchMove">
        <viking-home></viking-home> 
    </div>
    <div class="viking-big-wrap"> 
    <!-- 100% -->

        <div class="viking-content">
           <transition name="fade">
              <router-view></router-view>
          </transition>
        </div>

        <div class="viking-nav-wrap">

          <ul class="viking-nav">
            <li class="current" @touchstart="navClick" @touchend="navClickEnd">维京荣耀</li>
            <li @touchstart="navClick" @touchend="navClickEnd">一价全包</li>
            <li @touchstart="navClick" @touchend="navClickEnd">邮轮介绍</li>
            <li @touchstart="navClick" @touchend="navClickEnd">精彩航线</li>
          </ul>

          <div class="viking-slide-btn slideAnimation" @touchstart="navTouchStartNew" @touchmove="navTouchMoveNew" @touchend="navTouchEndNew">
            维京荣耀
          </div>
        </div>
      </div>
      <!-- <div class="viking-slide-btn-test" @touchstart="navTouchStart" @touchmove="navTouchMove" @touchend="navTouchEnd">
            维京荣耀
          </div> -->
    
    
  </div>
</template>

<script>
import Vue from 'vue'
import vikingHome from '@/components/viking-home'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  name: 'app',
  data(){
    return {
        //屏幕高度
        windowHeight: 0,
        //移动距离
        moveDis: 0, 
        //点击初始位置
        startPos:0,
        touchMarginTop: 0,
        touchTranslateY:0,

        //导航滑块点击初始位置
        navStartPos : 0,
        //导航滑块移动距离
        navMoveDis: 0,
        navOffsetLeft: 0,
        navWidth: 0,
        navNewLeft:0,

        navObj: null,
        routerPath: '/',
        tabIndex:0,

        navTranslateX: 0,
        $bigWrap: null,
        routerInterval: null,
        ifOnce: false,

        $touchWrap: null,
    }
  },
  created(){
    this.init();
    //console.log(this.windowHeight);
  },
  methods: {
    init: function(){
      this.windowHeight = document.body.clientHeight;
    },
    clickLinkOne(){
      this.$router.push('/')
    },
    clickLinkTwo(){
      this.$router.push('/test')
    },
    getHomeTranslateY(){
        return parseFloat(document.defaultView.getComputedStyle(document.querySelector('.touchWrap'),null).transform.substring(7).split(',')[5]) || 0
      },
    getWindowHeight: function(){
      return document.body.clientHeight;
    },
    navClick: function(e){
      e.stopPropagation();
        var child = e.currentTarget;
        this.navObj = this.$el.querySelector('.viking-slide-btn');
        this.navObj.className = 'viking-slide-btn';
        this.navOffsetLeft = (document.body.clientWidth - document.querySelector('.viking-nav').clientWidth)/2
        this.navWidth = this.navObj.clientWidth;

        //获取点击index
        var i = 0;
        while( (child = child.previousElementSibling) != null ) 
          ////console.log(child);
          i++;
        console.log(i);
        if(i == 0){
          this.navObj.className = 'viking-slide-btn slideAnimation';
          // this.navObj.style.left = this.navOffsetLeft + "px";
          this.navObj.style.transform = "translate3d(0,0,0)"
          this.$bigWrap.className = "viking-big-wrap viking-big-wrap-1"; //切换背景
          this.navObj.innerHTML = '维京荣耀';
          this.routerPath = '/'
          
        }
        else if (i == 1){
          this.navObj.className = 'viking-slide-btn slideAnimation';
          // this.navObj.style.left = (this.navOffsetLeft + this.navWidth) + "px";
          this.navObj.style.transform = "translate3d("+ (this.navWidth)+"px" +",0,0)"
          this.$bigWrap.className = "viking-big-wrap viking-big-wrap-2";
          this.navObj.innerHTML = '一价全包';
          this.routerPath = '/vikingTwo'
        }
        else if (i == 2){
          this.navObj.className = 'viking-slide-btn slideAnimation';
          // this.navObj.style.left = (this.navOffsetLeft + this.navWidth*2) + "px";
          this.navObj.style.transform = "translate3d("+ (this.navWidth*2)+"px" +",0,0)"
          this.$bigWrap.className = "viking-big-wrap viking-big-wrap-3";
          this.navObj.innerHTML = '邮轮介绍';
          this.routerPath = '/vikingThree'
        }
        else {
          this.navObj.className = 'viking-slide-btn slideAnimation';
          // this.navObj.style.left = (this.navOffsetLeft + this.navWidth*3) + "px";
          this.navObj.style.transform = "translate3d("+ (this.navWidth*3)+"px" +",0,0)"
          this.$bigWrap.className = "viking-big-wrap viking-big-wrap-4";
          this.navObj.innerHTML = '精彩航线';
          this.routerPath = '/vikingFour'
        }
        this.$router.replace(this.routerPath);
    },
    navClickEnd: function(e){
      e.preventDefault();
      //this.navObj.className = 'viking-slide-btn';
    },
    vTouchStart: function(e){
      e.currentTarget.className = 'touchWrap';
      //console.log(e.targetTouches[0].pageY)
      this.startPos = e.targetTouches[0].pageY;
      // this.touchMarginTop = parseFloat(e.currentTarget.style.marginTop);
      this.touchTranslateY = this.getHomeTranslateY();
      this.moveDis = 0;
    },
    vTouchMove: function(e){
      //console.log(e.targetTouches[0].pageY);
      if(e.targetTouches[0].pageY >0){

          if(this.startPos < this.windowHeight && this.getHomeTranslateY() <=0 ){

          this.moveDis = e.targetTouches[0].pageY - this.startPos;
          if(this.moveDis > 0){
            this.moveDis = 0;
          }
          //console.log((Math.abs(this.touchMarginTop)+this.startPos));
          //console.log(Math.abs(this.moveDis));
          // if(Math.abs(this.moveDis) <= (Math.abs(this.touchMarginTop)+this.startPos)){
          //   //console.log(this.moveDis);
          //   e.currentTarget.style.marginTop = (this.touchMarginTop + this.moveDis) + 'px';
          // }
          e.currentTarget.style.transform = "translate3d(0,"+ (this.touchTranslateY + this.moveDis) +'px' +",0)"
          //console.log(e.currentTarget.style.marginTop +10)
        }
      }
      else {
        e.currentTarget.className = 'touchWrap scrollAnimation';
        if(Math.abs(this.moveDis) > 300){
        // e.currentTarget.style.marginTop = -(this.windowHeight) +'px';
          e.currentTarget.style.transform = "translate3d(0,"+ (-(this.windowHeight)) +'px' +",0)"
          sessionStorage.i = 0;
          setTimeout(function(){
            self.className = 'touchWrap';
          },800);

        }  
        else {
          // e.currentTarget.style.marginTop = 0 +'px';
          e.currentTarget.style.transform = "translate3d(0,0,0)"
        }
      }

      
      
      
    },
    vTouchEnd: function(e){
      e.currentTarget.className = 'touchWrap scrollAnimation';
      var self = e.currentTarget;
      //console.log(this.moveDis);    
      if(Math.abs(this.moveDis) > 400){
        // e.currentTarget.style.marginTop = -(this.windowHeight) +'px';
        e.currentTarget.style.transform = "translate3d(0,"+ (-(this.windowHeight)) +'px' +",0)"
        sessionStorage.i = 0;
        setTimeout(function(){
          self.className = 'touchWrap';
        },800);

      }  
      else {
        // e.currentTarget.style.marginTop = 0 +'px';
        e.currentTarget.style.transform = "translate3d(0,0,0)"
      }
      

      //console.log(e.targetTouches[0].pageY)
    },
    vTouchCancel: function(){
      alert(1);
    },
    getNavTranslateX(){
      return parseFloat(document.defaultView.getComputedStyle(document.querySelector('.viking-slide-btn'),null).transform.substring(7).split(',')[4]) || 0
    },
    // navTouchStartNew(e){
    //   this.navTouchStart = e.targetTouches[0].pageX;
    //   console.log(this.navTouchStart)
    // },
    // navTouchStart(e){
    //   this.navTouchStart = e.targetTouches[0].pageX;
    //   console.log(this.navTouchStart)
    // },
    navTouchStartNew: function(e){
     
      e.currentTarget.className = 'viking-slide-btn';
      this.navTouchStart = e.targetTouches[0].pageX;
      this.navOffsetLeft = (document.body.clientWidth - document.querySelector('.viking-nav').clientWidth)/2
      this.navWidth = e.currentTarget.clientWidth;

      // this.navNewLeft = e.currentTarget.offsetLeft;
      this.navNewLeft = this.getNavTranslateX();
      clearInterval(this.routerInterval);

      // console.log(this.navNewLeft)
      
    },
    navTouchMoveNew: function(e){
      e.preventDefault();
      //console.log(this.navNewLeft);
      e.currentTarget.className = 'viking-slide-btn';
      this.navMoveDis = e.targetTouches[0].pageX - this.navTouchStart;
      //console.log(this.navMoveDis);
      var newPos = this.navNewLeft + this.navMoveDis;

        if(newPos <= 0 ){ //this.navOffsetLeft
          // e.currentTarget.style.left = this.navOffsetLeft + "px";
          e.currentTarget.style.transform = "translate3d(0,0,0)"
        }
        else if (newPos > (this.navWidth*3)){ //this.navWidth*3+this.navOffsetLeft
          // e.currentTarget.style.left = (this.navWidth*3+this.navOffsetLeft) + "px";
          e.currentTarget.style.transform = "translate3d("+ (this.navWidth*3)+"px" +",0,0)"
        }
        else {
          // e.currentTarget.style.left = (this.navNewLeft + this.navMoveDis) +"px";
          e.currentTarget.style.transform = "translate3d("+ newPos +"px" +",0,0)"
        }

        this.navTranslateX = this.getNavTranslateX();
        if(this.navTranslateX >= 0 && this.navTranslateX <= (this.navWidth /2) ){
            e.currentTarget.innerHTML = '维京荣耀';
        }
        else if (this.navTranslateX > (this.navWidth /2) && this.navTranslateX <= (this.navWidth/2+this.navWidth)){
            e.currentTarget.innerHTML = '一价全包';
        }
        else if (this.navTranslateX > (this.navWidth/2+this.navWidth) && this.navTranslateX <= (this.navWidth/2+this.navWidth*2)){
            e.currentTarget.innerHTML = '邮轮介绍';
        }
        else {
          e.currentTarget.innerHTML = '精彩航线';
        }
    },
    navTouchEndNew: function(e){
      e.preventDefault();
      //e.currentTarget.className = 'viking-slide-btn slideAnimation';
      var oneMidTwo = this.navWidth /2;
      var twoMidThree = (this.navWidth/2)+(this.navWidth);
      var threeMidFour = (this.navWidth/2)+(this.navWidth*2);
      var left = this.getNavTranslateX();
      var self = this;
      

      //console.log(left);

      if(left >= 0 && left <= oneMidTwo){
        // e.currentTarget.style.left = this.navOffsetLeft + "px";
        e.currentTarget.style.transform = "translate3d(0,0,0)";
        this.$bigWrap.className = "viking-big-wrap viking-big-wrap-1";
        // this.$bigWrap.style.backgroundImage = "url('./assets/img/one/one-bg.png')";
        this.$router.replace('/');

        // this.routerInterval = setTimeout(function(){
        //   self.$router.push('/');
        // },150);
      }
      else if (left > oneMidTwo && left <= twoMidThree){
        // e.currentTarget.style.left = (this.navOffsetLeft + this.navWidth) + "px";
        e.currentTarget.style.transform = "translate3d("+ (this.navWidth)+"px" +",0,0)"
        this.$bigWrap.className = "viking-big-wrap viking-big-wrap-2";
        this.$router.replace('/vikingTwo');
      }
      else if (left > twoMidThree && left <= threeMidFour ){
        // e.currentTarget.style.left = (this.navOffsetLeft + this.navWidth*2) + "px";
        e.currentTarget.style.transform = "translate3d("+ (this.navWidth*2)+"px" +",0,0)"
        this.$bigWrap.className = "viking-big-wrap viking-big-wrap-3";
        this.$router.replace('/vikingThree');
      }
      else {
        // e.currentTarget.style.left = (this.navOffsetLeft + this.navWidth*3) + "px";
        e.currentTarget.style.transform = "translate3d("+ (this.navWidth*3)+"px" +",0,0)"
        this.$bigWrap.className = "viking-big-wrap viking-big-wrap-4";
        this.$router.replace('/vikingFour');
      }
      
    },
    textStart(){},

  },
 mounted() {
  this.$touchWrap = document.querySelector('.touchWrap');
  this.$touchWrap.className = 'touchWrap scrollAnimation';
    if(sessionStorage.i){
      // this.ifOnce = true;
      this.$touchWrap.style.display = "none";
      this.$touchWrap.style.transform = "translate3d(0,"+ (-(this.windowHeight)) +'px' +",0)"
      var self = this;
      setTimeout(function(){
        self.$touchWrap.style.display = "";
      },150);
    }
    this.$bigWrap = document.querySelector('.viking-big-wrap');
    this.navObj = this.$el.querySelector('.viking-slide-btn');
    this.navWidth = this.navObj.clientWidth;
    

    console.log( this.$route.params);
    // alert(document.body.clientWidth);
    // alert(document.body.clientHeight);
   // this.$router.push('/');
   var path = this.$router.history.current.fullPath;
   console.log(path);
   if(path.indexOf('vikingTwo') > 0){
    this.$bigWrap.className = "viking-big-wrap viking-big-wrap-2";
    this.navObj.style.transform = "translate3d("+ (this.navWidth)+"px" +",0,0)"
    this.navObj.innerHTML = '一价全包';

   }
   else if (path.indexOf('vikingThree') > 0){
    this.$bigWrap.className = "viking-big-wrap viking-big-wrap-3";
    this.navObj.style.transform = "translate3d("+ (this.navWidth*2)+"px" +",0,0)"
        this.navObj.innerHTML = '邮轮介绍';
   }
  else if (path.indexOf('vikingFour') >0){
    this.$bigWrap.className = "viking-big-wrap viking-big-wrap-4";
    this.navObj.style.transform = "translate3d("+ (this.navWidth*3)+"px" +",0,0)"

    this.navObj.innerHTML = '精彩航线';

   }
   else {
    this.$router.replace('/');
    this.$bigWrap.className = "viking-big-wrap viking-big-wrap-1";
    this.navObj.style.transform = "translate3d(0,0,0)"
    this.navObj.innerHTML = '维京荣耀';

   }
   //console.log(this.$http);
 },
  components:{
    vikingHome
  }
}
</script>

<style lang="scss">
.displayNone {
  display:none;
}
//样式覆盖
.two-outer {
  padding-top: 0.3rem !important;
}
.one-outer {
  padding-top: 0.3rem !important;
  // height: 9.66rem !important;
  // overflow: visible !important;
  // box-sizing: content-box !important;
}
.viking-four {
  background:none !important;
}
.viking-three {
  background:none !important;
}
.dot-wrap {
  top: 10.24rem !important;
}
.viking-slide-btn-test{
      position: absolute;
    left: 0.33rem;
    top: 0;
    width: 1.71rem;
    height: 0.98rem;
    z-index: 10;
    line-height: 0.98rem;
    background: #fff;
    border-radius: 0.5rem;
    color: #e5255e;
    font-size: 0.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}





html,body {
  height: 100%;
  background-size: cover;
}
$mainColor: #e5255e;
$fontsize:0.18rem;
@mixin clearFix {
  zoom: 1;
  &:after {
    content:'';
    display: block;
    clear: both;
    visibility: hidden;
  }
}
@mixin flex-box{
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */ 
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */ 
  display: -ms-flexbox; /* TWEENER - IE 10 */ 
  display: -webkit-flex; /* NEW - Chrome */ 
  display: flex;
}
@mixin flex ($divide:1) {
  -webkit-box-flex: $divide; /* OLD - iOS 6-, Safari 3.1-6 */ 
  -moz-box-flex: $divide; /* OLD - Firefox 19- */ 
  -webkit-flex: $divide; /* Chrome */ 
  -ms-flex: $divide; /* IE 10 */ 
  flex: $divide; 
}


// .fade-enter-active, .fade-leave-active {
//   transition: all .5s
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
//   opacity: 0
// }


// 动画1
// @-webkit-keyframes zoomIn {
//   from {
//     opacity: 0;
//     -webkit-transform: scale3d(.3, .3, .3);
//     transform: scale3d(.3, .3, .3);
//   }

//   50% {
//     opacity: 1;
//   }
// }

// @keyframes zoomIn {
//   from {
//     opacity: 0;
//     -webkit-transform: scale3d(.3, .3, .3);
//     transform: scale3d(.3, .3, .3);
//   }

//   50% {
//     opacity: 1;
//   }
// }
// .fade-enter-active, {
//   -webkit-animation-duration: 1s;
//   animation-duration: 1s;
//   -webkit-animation-fill-mode: both;
//   animation-fill-mode: both;
//   -webkit-animation-name: zoomIn;
//   animation-name: zoomIn;
// }
// 动画2
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    
  }
}
.fade-enter-active {
    -webkit-animation-duration: .8s;
  animation-duration: .8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
   -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
.fade-leave-active{
transition:opacity .3s linear;
opacity:0;
}


#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: "Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: $fontsize;
  height: 100%;
  transform-style: preserve-3d;
  .touchWrap {
    height: 100%;
    // 方案2
    position: absolute;
    width: 100%;
    z-index:100;
    transform:translate3d(0,0,0);
  }
  .viking-content {
    // height: 10.44rem;
    height: 88%;
    overflow: hidden;
  }
  .scrollAnimation {
    transition: all 0.7s ease;
  }
  .slideAnimation {
    transition: all 0.3s linear;
  }
  .viking-big-wrap {
    height: 100%;
    background: url('./assets/img/one/one-bg.png') top center no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    transition: background 0.5s linear;
  }
  .viking-big-wrap-1 {
    background: url('./assets/img/one/one-bg.png') top center no-repeat;
    background-size: 100% 100%;
  }
  .viking-big-wrap-2 {
    background: url('./assets/img/two/two-bg.png') top center no-repeat;
    background-size: 100% 100%;
  }
  .viking-big-wrap-3 {
    background: url('./assets/img/three/three-bg.png') top center no-repeat;
    background-size: 100% 100%;
  }
  .viking-big-wrap-4 {
    background: url('./assets/img/four/four-bg.png') top center no-repeat;
    background-size: 100% 100%;
  }
  .viking-nav-wrap {
    box-sizing: border-box;
    position: relative;
    height: 0.98rem;
    // margin-top: 0.2rem;
    margin-top: 1%;
    background: transparent;
    transform-style: preserve-3d;
  }

  .viking-nav {
    @include clearFix;
    position: absolute;
    left: 50%;
    top:0;
    // bottom: 0.5rem;
    transform: translate(-50%, 0);
    width: 6.84rem;
    height: 0.98rem;
    background: $mainColor;
    border-radius: 0.5rem;
    user-select: none;
    @include flex-box;
    li {
      position: relative;
      height: 0.98rem;
      line-height: 0.98rem;
      font-size: 0.2rem;
      color: #fff;
      text-align: center;
      user-select: none;
      @include flex;
      // &.current {
      //   &:after {
      //     content: '';
      //     display: block;
      //     position: absolute;
      //     top: 50%;
      //     left: 50%;
      //     z-index: 10;
      //     transform: translate(-50%, -50%);
      //     width: 100%;
      //     height: 0.98rem;
      //     line-height: 
      //     background: #fff;
      //     border-radius: 50px;
      //   }
      // }
    }
  }
  .viking-slide-btn {
    position: absolute;
    left: 0.33rem;
    top: 0;
    // bottom: 0.5rem;
    width: 1.71rem;
    height: 0.98rem;
    z-index: 10;
    line-height: 0.98rem;
    background: #fff;
    border-radius: 0.5rem;
    color: $mainColor;
    font-size: 0.2rem;
    user-select: none;
    transform: translate(0,0);
    box-shadow: 0 2px 8px rgba(66, 65, 65, 0.45), 0 -2px 8px rgba(66, 65, 65, 0.45);
  }
}


</style>
