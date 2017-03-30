<template>
  <div class="viking-three">
    <div class="three-outer">
      <!-- container -->
      <div class="container" style="left:0">
        <!-- 游轮介绍01 -->
        <div class="three-wrap" v-if="isHide==0">
          <div class="three">
            <h3 class="vk-title">欧洲内河定制游轮 &nbsp;只为中国游客</h3>
            <p class="vk-text">专为中国游客量身定制的欧洲内河游轮</p>
            <ul class="tag clearfix">
              <li>内河移动宫殿</li>
              <li>专为中国定制</li>
              <li>一价全包</li>
              <li>国际知名大厨</li>
              <li>中文礼宾服务</li>
              <li>免费高速WiFi</li>
              <li style="margin-right: 0">深入欧洲腹地</li>
            </ul>
            <div @click="changeShipIndex(0)" class="cruise mright">
              <p class="En-name">VIKING EISTLA</p>
              <P class="Ch-name">维京艾斯特拉号</P>
              <img class="cruise-pic" src="../assets/img/three/c1.png" alt="">
            </div>
            <div @click="changeShipIndex(1)" class="cruise">
              <p class="En-name">VIKING ODIN</p>
              <P class="Ch-name">维京奥丁号</P>
              <img class="cruise-pic" src="../assets/img/three/c2.png" alt="">
            </div>
            <div @click="changeShipIndex(2)" class="cruise mright">
              <p class="En-name">VIKING BESTLA</p>
              <P class="Ch-name">维京贝斯特拉号</P>
              <img class="cruise-pic" src="../assets/img/three/c3.png" alt="">
            </div>
            <div @click="changeShipIndex(3)" class="cruise">
              <p class="En-name">VIKING FREYA</p>
              <P class="Ch-name">维京芙蕾雅号</P>
              <img class="cruise-pic" src="../assets/img/three/c4.png" alt="">
            </div>
            <div @click="changeShipIndex(4)" class="cruise mright">
              <p class="En-name">VIKING NJORD</p>
              <P class="Ch-name">维京尼奥尔德</P>
              <img class="cruise-pic" src="../assets/img/three/c5.png" alt="">
            </div>
            <div @click="changeShipIndex(5)" class="cruise">
              <p class="En-name">VIKING IDUN</p>
              <P class="Ch-name">维京伊敦号</P>
              <img class="cruise-pic" src="../assets/img/three/c6.png" alt="">
            </div>
          </div>
        </div>
        <!-- 游轮介绍02 -->
        <div class="three-wrap" v-if="isHide==0">
          <div class="three">
            <h3 class="vk-title2">
      	 			{{shipData[shipIndex].chName}}<span>{{shipData[shipIndex].enName}}</span>
      	 		</h3>
            <p class="vk-text2">吨位/排水量：2062吨 &nbsp;|&nbsp;甲板：4层 &nbsp;| &nbsp;房间数： &nbsp;95间 &nbsp;| &nbsp;载客量： 190人
              <br> 首航时间：{{shipData[shipIndex].firstTrip}} &nbsp;| &nbsp;长度：135米 &nbsp;|&nbsp; 宽度：11.45米 &nbsp;| &nbsp;平均航速: 20 km/h</p>
              <!-- 游轮介绍大图 -->
            <img v-if="shipIndex==0" class="big-pic" src="../assets/img/three/b_c1.png" alt="">
            <img v-if="shipIndex==1" class="big-pic" src="../assets/img/three/b_c2.png" alt="">
            <img v-if="shipIndex==2" class="big-pic" src="../assets/img/three/b_c3.png" alt="">
            <img v-if="shipIndex==3" class="big-pic" src="../assets/img/three/b_c4.png" alt="">
            <img v-if="shipIndex==4" class="big-pic" src="../assets/img/three/b_c5.png" alt="">
            <img v-if="shipIndex==5" class="big-pic" src="../assets/img/three/b_c6.png" alt="">
            <!-- 游轮介绍大图  end-->

            <p class="vk-text3">{{shipData[shipIndex].synopsis}}</p>
            <div class="cruise-type mrigth">
              <p class="type-name">舱房类型</p>
              <img class="type-img" src="../assets/img/three/cangfang.png" alt="">
            </div>
            <div class="cruise-type">
              <p class="type-name">美食荟萃</p>
              <img class="type-img" src="../assets/img/three/meishi.png" alt="">
            </div>
            <div class="cruise-type mrigth">
              <p class="type-name">餐厅酒廊</p>
              <img class="type-img" src="../assets/img/three/canting.png" alt="">
            </div>
            <div class="cruise-type">
              <p class="type-name">游轮娱乐（甲板图）</p>
              <img class="type-img" src="../assets/img/three/jiaban.png" alt="">
            </div>
          </div>
        </div>
        <!-- 舱房类型 -->
        <div class="three-wrap" v-if="isHide==0">
          <div class="three">
            <h3 class="vk-title3">
      	 			舱房类型
      	 			<span>8种房型 &nbsp;满足不同需求</span>
      	 		</h3>
            <ul class="cf-classes clearfix">
              <li @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">浪漫法式露台房(中层)</li>
              <li @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">标准客房</li>
              <li @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">精选标准客房</li>
              <li @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">浪漫法式露台房(上层)</li>
              <li @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">精致阳台客房(中层)</li>
              <li @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">精致阳台客房(上层)</li>
              <li @click="changeClassesActive(6)" :class="{'active':isClassesActive == 6}">豪华阳台套房</li>
              <li @click="changeClassesActive(7)" :class="{'active':isClassesActive == 7}">奢享家套房</li>
            </ul>

            <div class="cf-detail clearfix">
              <h4 class="cf-name"><span v-show="isClassesActive == 0"></span>{{cfData[isClassesActive].cfName}}</h4>
              <div class="line"></div>
              <p class="vk-text4" v-html="cfData[isClassesActive].cfSize"></p>
              <img v-if="isClassesActive == 0" src="../assets/img/three/cf-1.png" alt="">
              <img v-if="isClassesActive == 1" src="../assets/img/three/cf-2.png" alt="">
              <img v-if="isClassesActive == 2" src="../assets/img/three/cf-2.png" alt="">
              <img v-if="isClassesActive == 3" src="../assets/img/three/cf-1.png" alt="">
              <img v-if="isClassesActive == 4" src="../assets/img/three/cf-3.png" alt="">
              <img v-if="isClassesActive == 5" src="../assets/img/three/cf-3.png" alt="">
              <img v-if="isClassesActive == 6" src="../assets/img/three/cf-4.png" alt="">
              <img v-if="isClassesActive == 7" src="../assets/img/three/cf-4.png" alt="">
            </div>
						
						<div class="cf-describe">
							<p class="cf-describe-title">房间设施</p>
							<ul class="cf-specific clearfix">
							    <li v-for="item in cfData[isClassesActive].cfLong">{{item}}</li>
							    <!-- <li>· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视</li>
							    <li>· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等</li>
							    <li>· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱</li>
							    <li>· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等</li> -->
							    <!-- <li class="short" v-for="item in cfData[isClassesActive].cfShort">{{item}}</li> -->
							   <!--  <li class="short">· 中文控制器 </li>
							    <li class="short">· 每日提供免费的瓶装饮用水</li>
							    <li class="short">· 中英文船舱引导标示</li>
							    <li class="short">· 房间可独立调节温度 </li>
							    <li class="short">· 中文指南/手册/说明</li>
							    <li class="short">· 电压: 220V 和 110V </li>
							    <li class="short">（包括洗衣袋和洗衣单）</li>
							    <li class="short">· 水壶  </li>
							    <li class="short">· 优选中国茶包</li>
							    <li class="short">· 优选中国茶包</li> -->
							    
							</ul>
						</div>

          </div>
        </div>

        <!-- 美食荟萃 -->
        <div class="three-wrap" v-if="isHide==0">
          <div class="three">
            <h3 class="vk-title3">
      	 			美食荟萃
      	 			<span>中西结合 &nbsp;畅饮美酒</span>
      	 		</h3>
            <ul class="cf-classes clearfix">
              <li @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">刘一凡定制菜单</li>
              <li @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">中西自助</li>
              <li @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">欢迎晚宴</li>
              <li @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">当地美食</li>
              <li @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">畅饮美酒</li>
              <li @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">现煮面档</li>
            </ul>

            <div class="cf-detail clearfix">
              <h4 class="cf-name">{{foodData[isClassesActive].name}}</h4>
              <img v-if="isClassesActive == 0" src="../assets/img/three/meishi/ms_1.png" alt="">
              <img v-if="isClassesActive == 1" src="../assets/img/three/meishi/ms_2.png" alt="">
              <img v-if="isClassesActive == 2" src="../assets/img/three/meishi/ms_3.png" alt="">
              <img v-if="isClassesActive == 3" src="../assets/img/three/meishi/ms_4.png" alt="">
              <img v-if="isClassesActive == 4" src="../assets/img/three/meishi/ms_5.png" alt="">
              <img v-if="isClassesActive == 5" src="../assets/img/three/meishi/ms_6.png" alt="">
            </div>
						
						<div class="cf-describe">
							<p class="detail-text" v-for="item in foodData[isClassesActive].describe">{{item}}</p>
							<!-- <p class="detail-text">作为蓝带大师和《顶级厨师》的评委</p>
							<p class="detail-text">他致力于将中西美食融合荟萃</p>
							<p class="detail-text">带给每一位维京贵宾舌尖上的感动</p>
							<p class="detail-text">每艘内河游轮的厨师团队都汇聚了各地大厨</p>
							<p class="detail-text">包括一名广东大厨 一名四川大厨和一名外国大厨</p> -->
						</div>

          </div>
        </div>

        <!-- 餐厅酒廊 -->
        <div class="three-wrap" v-if="isHide==0">
          <div class="three">
            <h3 class="vk-title3">
      	 			餐厅酒廊
      	 			<span>美食美酒 &nbsp;美景怡情</span>
      	 		</h3>
            <ul class="cf-classes clearfix">
              <li @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">餐厅</li>
              <li @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">观景酒廊</li>
              <li @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">咖啡吧</li>
              <li @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">乐饮酒廊</li>
            </ul>

            <div class="cf-detail clearfix">
              <h4 class="cf-name">餐厅</h4>
              <img v-if="isClassesActive == 0" src="../assets/img/three/canting/ct_1.png" alt="">
              <img v-if="isClassesActive == 1" src="../assets/img/three/canting/ct_2.png" alt="">
              <img v-if="isClassesActive == 2" src="../assets/img/three/canting/ct_3.png" alt="">
              <img v-if="isClassesActive == 3" src="../assets/img/three/canting/ct_4.png" alt="">
            </div>
						
						<div class="cf-describe">
							<p class="detail-text">餐厅：第二层甲板</p>
							<p class="detail-text">座位：190个座位</p>
							<p class="detail-text detail-text-mb" >坐式用餐不需要预订，可随意选座，不接受预订</p>
							<p class="detail-text">船上餐厅不仅带给您美景与美食的双重享受，更有轻松优雅的氛围、精致考究的布置、热情周到的服务，让每次用餐都成为航程中快乐的点缀。</p>
							
						</div>

          </div>
        </div>

        <!-- 游轮娱乐 -->
        <div class="three-wrap" v-if="isHide==0">
          <div class="three">
            <h3 class="vk-title3">
      	 			游轮娱乐（甲板图）
      	 			<span>河轮时光 &nbsp;悠闲惬意</span>
      	 		</h3>
            <ul class="cf-classes clearfix">
              <li @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">日光甲板</li>
              <li @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">空中花园</li>
              <li @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">散步道</li>
              <li @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">阅览区/网络中心</li>
              <li @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">礼宾台</li>
              <li @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">精品商店</li>
              <li @click="changeClassesActive(6)" :class="{'active':isClassesActive == 6}">甲板图</li>
            </ul>

            <div class="cf-detail clearfix">
              <h4 class="cf-name">日光甲板</h4>
              <img v-if="isClassesActive == 0" src="../assets/img/three/yule/yl_1.png" alt="">
              <img v-if="isClassesActive == 1" src="../assets/img/three/yule/yl_2.png" alt="">
              <img v-if="isClassesActive == 2" src="../assets/img/three/yule/yl_3.png" alt="">
              <img v-if="isClassesActive == 3" src="../assets/img/three/yule/yl_4.png" alt="">
              <img v-if="isClassesActive == 4" src="../assets/img/three/yule/yl_5.png" alt="">
              <img v-if="isClassesActive == 5" src="../assets/img/three/yule/yl_6.png" alt="">
              <img v-if="isClassesActive == 6" src="../assets/img/three/yule/yl_6.png" alt="">
            </div>
						
						<div class="cf-describe">
							<p class="detail-text">第四层甲板</p>
							<p class="detail-text">阳光甲板：带顶棚，3个花冠形状和3个伞形</p>
							<p class="detail-text">椅子：船头有60把椅子，船尾有40把椅子</p>
							<p class="detail-text detail-text-mb" >漫步径：130米长</p>
							<p class="detail-text">在内河游轮的最高层，两端便是日光甲板。您可以依着栏杆，任凭微风拂过脸颊，两岸美景从身边缓缓后退；当然也可以窝在舒适的躺椅中，躲在遮阳伞下享受一片阴凉。在比邻酒廊的那端的日光甲板，可通向船桥。</p>
							
						</div>

          </div>
        </div>


      </div>
      <!-- /container -->
      <ul class="dot-wrap">
        <li :class="{'active':isCards == 0}"></li>
        <li :class="{'active':isCards == 1}"></li>
        <li :class="{'active':isCards == 2}"></li>
        <li :class="{'active':isCards == 3}"></li>
        <li :class="{'active':isCards == 4}"></li>
        <li :class="{'active':isCards == 5}"></li>
      </ul>
    </div>
  </div>
</template>
<script>

const vikingData = require('../assets/js/viking-data.js')

export default {
  data() {
    return {
    	isHide:0,
      isCards: 0,
      isClassesActive:0,
      shipData:vikingData.ship,    //河轮介绍
      shipIndex:0,                 //1-6艘河轮
      cfData:vikingData.cf,       //舱房
      foodData:vikingData.food,   //美食荟萃
    }
  },
  methods:{
  	init(){ //切换屏幕时初始化
  		this.isClassesActive=0;
  	},
  	changeClassesActive(i){   //房型等类目切换
  		this.isClassesActive = i;
  	},
  	changeShipIndex(i){   //点击切换不同的游轮介绍
  		this.shipIndex = i
  		console.log(i);
  	}
  },
  mounted(){
  	      // ==========================  滑动   ================================================
      var self = this;
      var xstar, ystar, xmove, ymove, xend, yend, disx;
      document.querySelector('.container').addEventListener('touchstart', function(e) {

        xstar = e.touches[0].pageX;
        ystar = e.touches[0].pageX;


      }, false);
      document.addEventListener('touchmove', function(e) {
        e.preventDefault()
        xmove = e.touches[0].pageX;
        ymove = e.touches[0].pageX;
        var disx = xstar - xmove
        console.log(disx + "disx");
        if (disx < 0) { //往右拖动
          document.querySelector('.container').style.left = -(disx / 100 + parseInt(document.querySelector('.container').style.left) / 100) + 'rem'
        } else { //往左拖动
        	console.log(1);
          document.querySelector('.container').style.left = (parseInt(document.querySelector('.container').style.left) / 100-disx / 100  ) + 'rem'

        }

      }, false);

      document.addEventListener('touchend', function(e) {
        xend = e.changedTouches[0].pageX;
        yend = e.changedTouches[0].pageY;
        if (xstar - xend < -45) { //右滑动
          //小圆点
          self.isCards--
            if (self.isCards <= 0) {
              self.isCards = 0
            }
          console.log('右滑动');
          document.querySelector('.container').style.left = -7.5 * self.isCards + 'rem';
          self.init();


        } else if (xstar - xend > 45) { //左滑动
          //小圆点
          self.isCards++
            if (self.isCards >= 5) {
              self.isCards = 5
            }
          console.log('左滑动');
          document.querySelector('.container').style.left = -7.5 * self.isCards + 'rem';
          self.init();


        } else if (xstar - xend >= -45 && xstar - xend < 0) { //不满足右滑动
          if (xend < 0) {
            console.log('满足右滑动');
          } else {
            console.log('test');
          }
        } else if (xstar - xend <= 45 && xstar - xend > 0) { //不满足左滑动
          if (xend > 636) {
            console.log('不满足左滑动');
          } else {
            console.log('test');
          }

        } else {
          return
        }
        //清除事件监听
        document.removeEventListener('touchstart', function() {})
        document.removeEventListener('touchmove', function() {})
        document.removeEventListener('touchend', function() {})
      }, false);

  }
}
</script>
<style scoped>
.viking-three {
  width: 100%;
  height: 100%;
  background: url('../assets/img/three/three-bg.png') top center no-repeat;
  background-size: 100% 100%;
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
  background-color: #b81b48;
  width: .32rem;
}

.container {
   width: 45rem;
  position: absolute;
  left: 0;
  transition: all .3s ease;
}


.viking-three * {
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
  line-height: 1;
}

.three-outer {
  width: 100%;
  height: 100%;
  padding-top: .19rem;
  position: relative;
  overflow: hidden;
}

.three-wrap {
  width: 7.5rem;
  position: relative;
  float: left;
  padding: 0 .24rem;
}

.three {
  width: 100%;
  height: 10.07rem;
  border-radius: .08rem;
  margin: 0 auto;
}

.vk-title {
  text-align: left;
  font-size: .39rem;
  color: #ed0746;
  margin-bottom: .11rem;
  line-height: .39rem;
}

.vk-text {
  text-align: left;
  font-size: .24rem;
  color: #3f3f3f;
  margin-bottom: .16rem;
  line-height: .24rem;
}

.tag {
  margin-bottom: .3rem;
}

.tag li {
  height: .32rem;
  width: 1.48rem;
  background-color: #e5255e;
  border: .02rem solid #fff;
  border-radius: .06rem;
  float: left;
  text-align: center;
  line-height: .28rem;
  font-size: .18rem;
  color: #ffffff;
  margin-right: .36rem;
  margin-bottom: .06rem;
  font-weight: 600;
}

.cruise {
  width: 3.39rem;
  float: left;
  margin-bottom: .38rem;
}

.cruise.mright {
  margin-right: .24rem;
}

.cruise .En-name {
  text-align: left;
  font-size: .15rem;
  color: #333333;
  line-height: .15rem;
  margin-bottom: .05rem;
}

.cruise .Ch-name {
  text-align: left;
  font-size: .25rem;
  color: #333333;
  line-height: .25rem;
  margin-bottom: .1rem;
}

.cruise .cruise-pic {
  display: block;
  width: 3.39rem;
  height: 1.84rem;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, .1), -1px 0px 2px rgba(0, 0, 0, .1), 0px 4px 15px rgba(0, 0, 0, .3);
}


/* 游轮介绍02 */

.vk-title2 {
  display: block;
  width: 100%;
  height: .51rem;
  border-bottom: .02rem solid #ed0746;
  font-size: .4rem;
  color: #ed0746;
  text-align: left;
  line-height: .4rem;
  margin-bottom: .04rem;
}

.vk-title2 span {
  font-size: .2rem;
}

.vk-text2 {
  line-height: .26rem;
  font-size: .19rem;
  color: #757474;
  margin-bottom: .2rem;
  font-weight: 600;
}

.vk-text3 {
  line-height: .33rem;
  font-size: .23rem;
  color: #505050;
  text-indent: 2em;
  margin-bottom: .32rem;
}

.big-pic {
  display: block;
  width: 7.02rem;
  height: 3.79rem;
  margin: 0 auto;
  margin-bottom: .15rem;
}

.cruise-type {
  float: left;
  height: 1.38rem;
  width: 3.39rem;
  margin-bottom: .24rem;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, .1), -1px 0px 2px rgba(0, 0, 0, .1), 0px 4px 15px #a57284;
}

.cruise-type.mrigth {
  margin-right: .24rem;
}

.cruise-type .type-name {
  display: block;
  font-size: .24rem;
  color: #ffffff;
  line-height: .34rem;
  background-color: #e10452;
  text-align: center;
}

.cruise-type .type-img {
  display: block;
  width: 3.39rem;
  height: 1.04rem;
}


/* 游轮介绍03 */

.vk-title3 {
  font-size: .4rem;
  text-align: left;
  color: #ed0746;
  line-height: .5rem;
  margin-bottom: .23rem;
}

.vk-title3 span {
  font-size: .23rem;
  font-weight: 400;
}

.cf-classes {
  list-style: none;
  padding-top: .3rem;
  width: 2.42rem;
  float: right;
}

.cf-classes li {
  width: 100%;
  height: .48rem;
  line-height: .48rem;
  font-size: .22rem;
  color: #3f3f3f;
  padding-left: .1rem;
}

.cf-classes li.active {
  background-color: #e10452;
  color: #ffffff;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, .1), -1px 0px 2px rgba(0, 0, 0, .1), 0px 4px 15px #a57284;
}

.cf-detail {
  width: 4.46rem;
}

.cf-name {
  text-align: left;
  font-size: .24rem;
  line-height: .24rem;
  color: #080808;
  margin-bottom: .07rem;
  font-style: normal;
}

.cf-name span {
  display: inline-block;
  width: .2rem;
  height: .2rem;
  background: url('../assets/img/three/star.png') center no-repeat;
  margin-right: .05rem;
}

.line {
  width: 100%;
  height: .02rem;
  background-color: #ed0746;
  margin-bottom: .05rem;
}

.vk-text4 {
  font-size: .2rem;
  color: #757474;
  line-height: .27rem;
  margin-bottom: .15rem;
}

.cf-detail img {
  display: block;
  width: 4.46rem;
  height: 3.12rem;
  transition: all .5s ease;
}
.cf-describe{
	width: 100%;
	margin-top: .3rem;
}

.cf-describe-title{
	font-size: .26rem;
	color: #080808;
	margin-bottom: .05rem;
	font-weight: 600;
}

.cf-specific li{
	font-size: .21rem;
	color: #505050;
	line-height: .33rem;
}

.cf-specific li.short{
	width: 3.51rem;
	float: left;
}


.detail-text{
	font-size: .22rem;
	color: #505050;
	line-height: .33rem;
	text-align: left;
}
.detail-text-mb{
	margin-bottom: .4rem;
}




</style>
