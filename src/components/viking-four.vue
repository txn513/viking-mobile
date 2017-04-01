<template>
  <div class="viking-four">
    <div class="four-outer">
      <!-- container -->
      <div class="container" @touchstart="cardTouchStart" @touchmove.prevent="cardTouchMove" @touchend="cardTouchEnd">
        <!-- 精彩航线 -->
        <div class="four-wrap">
          <div class="four">
            <h3 class="vk-title">精彩航线 &nbsp;全年出发</h3>
            <p class="vk-text">蓝色多瑙 &nbsp;浪漫莱茵</p>
            <div @click="clickLyh8" class="route clearfix">
              <h4 class="route-title">8天莱茵河之旅丨 <span>四国游 &nbsp;(阿姆斯特丹——巴塞尔)</span></h4>
              <img src="../assets/img/four/route-1-8.png" alt="">
            </div>
            <div @click="clickLyh11" class="route clearfix">
              <h4 class="route-title">11天莱茵河经典之旅丨 <span>四国游 &nbsp;(阿姆斯特丹——巴塞尔)</span></h4>
              <img src="../assets/img/four/route-1-11.png" alt="">
            </div>
            <div @click="clickDnh8" class="route clearfix">
              <h4 class="route-title">8天多瑙河之旅丨 <span>四国游 &nbsp;(维也纳——布达佩斯)</span></h4>
              <img src="../assets/img/four/route-2-8.png" alt="">
            </div>
            <div @click="clickDnh11" class="route clearfix">
              <h4 class="route-title">11天多瑙河之旅丨 <span>五国游 &nbsp;(维也纳——布达佩斯)</span></h4>
              <img src="../assets/img/four/route-2-11.png" alt="">
            </div>
          </div>
        </div>
        <!-- 8天莱茵河之旅 -->
        <div class="four-wrap">
          <div class="four">
            <h3 class="vk-title">8天莱茵河之旅 <span>(阿姆斯特丹←→巴塞尔)</span></h3>
            <p class="vk-text vk-text1">四国游丨荷兰 &nbsp;德国 &nbsp;法国 &nbsp;瑞士</p>
            <ul class="classes clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActivelyn8(0)" :class="{'active':isClassesActivelyn8 == 0}">阿姆斯特丹<span v-show="isClassesActivelyn8!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn8(1)" :class="{'active':isClassesActivelyn8 == 1}">科隆<span v-show="isClassesActivelyn8!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn8(2)" :class="{'active':isClassesActivelyn8 == 2}">莱茵河中上游<span v-show="isClassesActivelyn8!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn8(3)" :class="{'active':isClassesActivelyn8 == 3}">海德堡<span v-show="isClassesActivelyn8!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn8(4)" :class="{'active':isClassesActivelyn8 == 4}">斯特拉斯堡<span v-show="isClassesActivelyn8!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn8(5)" :class="{'active':isClassesActivelyn8 == 5}">琉森<span v-show="isClassesActivelyn8!=5"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn8(6)" :class="{'active':isClassesActivelyn8 == 6}">巴塞尔<span v-show="isClassesActivelyn8!=6"></span></div>
              </li>
            </ul>
            <div class="picture clearfix">
              <img v-show="isClassesActivelyn8 == 0" src="../assets/img/four/lyh-8-1.png" alt="">
              <img v-show="isClassesActivelyn8 == 1" src="../assets/img/four/lyh-8-2.png" alt="">
              <img v-show="isClassesActivelyn8 == 2" src="../assets/img/four/lyh-8-3.png" alt="">
              <img v-show="isClassesActivelyn8 == 3" src="../assets/img/four/lyh-8-4.png" alt="">
              <img v-show="isClassesActivelyn8 == 4" src="../assets/img/four/lyh-8-5.png" alt="">
              <img v-show="isClassesActivelyn8 == 5" src="../assets/img/four/lyh-8-6.png" alt="">
              <img v-show="isClassesActivelyn8 == 6" src="../assets/img/four/lyh-8-7.png" alt="">
              <!-- 目的地文案 -->
              <p>{{lyhData[isClassesActivelyn8].describe}}</p>
            </div>
            <div class="goods-nav-bar">
              <div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
              <div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
            </div>
            <p class="vk-text2">性价比和满意度最高 &nbsp;28人精品小团 &nbsp;特配中文领队</p>
            <div class="goods-wrap" v-show="isGoodsActive == 0" >
              <div class="goods">
                
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in lyh8T">
                  <div class="tag team">跟团游</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
            <!-- 自由行 -->
            <div class="goods-wrap" v-show="isGoodsActive == 1" @touchstart.prevent="testStart" @touchmove.stop="testMove" @touchend="testEnd">
              <div class="goods goods1" :style="{width:widthGoods1+'px'}">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in lyh8P" @touchstart ='aClickStart' @touchend="aClickEnd">
                  <div class="tag free">自由行</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 11天莱茵河之旅 -->
        <div class="four-wrap">
          <div class="four">
            <h3 class="vk-title">11天莱茵河之旅 <span>(阿姆斯特丹←→巴塞尔)</span></h3>
            <p class="vk-text vk-text1">四国游丨荷兰 &nbsp;德国 &nbsp;法国 &nbsp;瑞士</p>
            <ul class="classes classes11 clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActivelyn11(0)" :class="{'active':isClassesActivelyn11 == 0}">阿姆斯特丹<span v-show="isClassesActivelyn11!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(8)" :class="{'active':isClassesActivelyn11 == 8}">小孩堤防<span v-show="isClassesActivelyn11!=8"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(1)" :class="{'active':isClassesActivelyn11 == 1}">科隆<span v-show="isClassesActivelyn11!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(2)" :class="{'active':isClassesActivelyn11 == 2}">莱茵河中上游<span v-show="isClassesActivelyn11!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(3)" :class="{'active':isClassesActivelyn11 == 3}">海德堡<span v-show="isClassesActivelyn11!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(7)" :class="{'active':isClassesActivelyn11 == 7}">巴登巴登<span v-show="isClassesActivelyn11!=7"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(4)" :class="{'active':isClassesActivelyn11 == 4}">斯特拉斯堡<span v-show="isClassesActivelyn11!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(5)" :class="{'active':isClassesActivelyn11 == 5}">琉森<span v-show="isClassesActivelyn11!=5"></span></div>
              </li>
              <li>
                <div style="width:1.8rem" @click="changeClassesActivelyn11(9)" :class="{'active':isClassesActivelyn11 == 9}">伯尔尼/格鲁耶<span v-show="isClassesActivelyn11!=9"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivelyn11(6)" :class="{'active':isClassesActivelyn11 == 6}">巴塞尔<span v-show="isClassesActivelyn11!=6"></span></div>
              </li>
            </ul>
            <div class="picture clearfix">
              <img v-show="isClassesActivelyn11 == 0" src="../assets/img/four/lyh-8-1.png" alt="">
              <img v-show="isClassesActivelyn11 == 1" src="../assets/img/four/lyh-8-2.png" alt="">
              <img v-show="isClassesActivelyn11 == 2" src="../assets/img/four/lyh-8-3.png" alt="">
              <img v-show="isClassesActivelyn11 == 3" src="../assets/img/four/lyh-8-4.png" alt="">
              <img v-show="isClassesActivelyn11 == 4" src="../assets/img/four/lyh-8-5.png" alt="">
              <img v-show="isClassesActivelyn11 == 5" src="../assets/img/four/lyh-8-6.png" alt="">
              <img v-show="isClassesActivelyn11 == 6" src="../assets/img/four/lyh-8-7.png" alt="">
              <img v-show="isClassesActivelyn11 == 7" src="../assets/img/four/lyh-8-8.png" alt="">
              <img v-show="isClassesActivelyn11 == 8" src="../assets/img/four/lyh-8-9.png" alt="">
              <img v-show="isClassesActivelyn11 == 9" src="../assets/img/four/lyh-8-10.png" alt="">
              <!-- 目的地文案 -->
              <p>{{lyhData[isClassesActivelyn11].describe}}</p>
            </div>
            <div class="goods-nav-bar">
              <div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
              <div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
            </div>
            <p class="vk-text2">维京游轮深圳合作授权 &nbsp;丰富出境游轮服务经验</p>
            <div class="goods-wrap" v-show="isGoodsActive == 0" >
              <div class="goods">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in lyh11T">
                  <div class="tag team">跟团游</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
            <!-- 自由行 -->
            <div class="goods-wrap" v-show="isGoodsActive == 1" @touchstart.prevent="testStart" @touchmove.stop="testMove" @touchend="testEnd">
              <div class="goods goods2" :style="{width:widthGoods2+'px'}">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in lyh11P" @touchstart ='aClickStart' @touchend="aClickEnd">
                  <div class="tag free">自由行</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 8天多瑙河之旅 -->
        <div class="four-wrap">
          <div class="four">
            <h3 class="vk-title">8天多瑙河之旅 <span>(维也纳←→布达佩斯)</span></h3>
            <p class="vk-text vk-text1">四国游丨奥地利 &nbsp;德国 &nbsp;斯伐洛克 &nbsp;匈牙利</p>
            <ul class="classes clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActivednh8(0)" :class="{'active':isClassesActivednh8 == 0}">维也纳<span v-show="isClassesActivednh8!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh8(1)" :class="{'active':isClassesActivednh8 == 1}">瓦豪河谷<span v-show="isClassesActivednh8!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh8(2)" :class="{'active':isClassesActivednh8 == 2}">慕尼黑<span v-show="isClassesActivednh8!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh8(3)" :class="{'active':isClassesActivednh8 == 3}">萨尔斯堡<span v-show="isClassesActivednh8!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh8(4)" :class="{'active':isClassesActivednh8 == 4}">布拉迪斯拉发<span v-show="isClassesActivednh8!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh8(5)" :class="{'active':isClassesActivednh8 == 5}">布达佩斯<span v-show="isClassesActivednh8!=5"></span></div>
              </li>
            </ul>
            <div class="picture clearfix">
              <img v-show="isClassesActivednh8 == 0" src="../assets/img/four/dnh-8-1.png" alt="">
              <img v-show="isClassesActivednh8 == 1" src="../assets/img/four/dnh-8-2.png" alt="">
              <img v-show="isClassesActivednh8 == 2" src="../assets/img/four/dnh-8-3.png" alt="">
              <img v-show="isClassesActivednh8 == 3" src="../assets/img/four/dnh-8-4.png" alt="">
              <img v-show="isClassesActivednh8 == 4" src="../assets/img/four/dnh-8-5.png" alt="">
              <img v-show="isClassesActivednh8 == 5" src="../assets/img/four/dnh-8-6.png" alt="">
              <!-- 目的地文案 -->
              <p>{{dnhData[isClassesActivednh8].describe}}</p>
            </div>
            <div class="goods-nav-bar">
              <div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
              <div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
            </div>
            <p class="vk-text2">性价比和满意度最高 &nbsp;28人精品小团 &nbsp;特配中文领队</p>
            <div class="goods-wrap" v-show="isGoodsActive == 0" >
              <div class="goods">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in dnh8T" >
                  <div class="tag team">跟团游</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
            <!-- 自由行 -->
            <div class="goods-wrap" v-show="isGoodsActive == 1" @touchstart.prevent="testStart" @touchmove.stop="testMove" @touchend="testEnd">
              <div class="goods goods3" :style="{width:widthGoods3+'px'}">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in dnh8P" @touchstart ='aClickStart' @touchend="aClickEnd">
                  <div class="tag free">自由行</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 11天多瑙河之旅 -->
        <div class="four-wrap">
          <div class="four">
            <h3 class="vk-title">11天多瑙河之旅 <span>(维也纳←→布达佩斯)</span></h3>
            <p class="vk-text vk-text1">五国游丨奥地利 &nbsp;德国 &nbsp;捷克 &nbsp;斯伐洛克 &nbsp;匈牙利</p>
            <ul class="classes classes11 clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActivednh11(0)" :class="{'active':isClassesActivednh11 == 0}">维也纳<span v-show="isClassesActivednh11!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh11(1)" :class="{'active':isClassesActivednh11 == 1}">瓦豪河谷<span v-show="isClassesActivednh11!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh11(2)" :class="{'active':isClassesActivednh11 == 2}">慕尼黑<span v-show="isClassesActivednh11!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh11(3)" :class="{'active':isClassesActivednh11 == 3}">萨尔斯堡<span v-show="isClassesActivednh11!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh11(6)" :class="{'active':isClassesActivednh11 == 6}">克鲁姆洛夫<span v-show="isClassesActivednh11!=6"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh11(4)" :class="{'active':isClassesActivednh11 == 4}">布拉迪斯拉发<span v-show="isClassesActivednh11!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActivednh11(5)" :class="{'active':isClassesActivednh11 == 5}">布达佩斯<span v-show="isClassesActivednh11!=5"></span></div>
              </li>
            </ul>
            <div class="picture clearfix">
              <img v-show="isClassesActivednh11 == 0" src="../assets/img/four/dnh-8-1.png" alt="">
              <img v-show="isClassesActivednh11 == 1" src="../assets/img/four/dnh-8-2.png" alt="">
              <img v-show="isClassesActivednh11 == 2" src="../assets/img/four/dnh-8-3.png" alt="">
              <img v-show="isClassesActivednh11 == 3" src="../assets/img/four/dnh-8-4.png" alt="">
              <img v-show="isClassesActivednh11 == 4" src="../assets/img/four/dnh-8-5.png" alt="">
              <img v-show="isClassesActivednh11 == 5" src="../assets/img/four/dnh-8-6.png" alt="">
              <img v-show="isClassesActivednh11 == 6" src="../assets/img/four/dnh-8-7.png" alt="">
              <!-- 目的地文案 -->
              <p>{{dnhData[isClassesActivednh11].describe}}</p>
            </div>
            <div class="goods-nav-bar">
              <div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
              <div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
            </div>
            <p class="vk-text2">维京游轮深圳合作授权 &nbsp;丰富出境游轮服务经验</p>
            <div class="goods-wrap" v-show="isGoodsActive == 0" >
              <div class="goods">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in dnh11T">
                  <div class="tag team">跟团游</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
            </div>
            <!-- 自由行 -->
            <div class="goods-wrap" v-show="isGoodsActive == 1" @touchstart="testStart" @touchmove.stop="testMove" @touchend="testEnd">
              <div class="goods goods4" :style="{width:widthGoods4+'px'}">
                <a :href="'/mobile/html/group/predetermine.html?pid='+item.pid" class="goods-content" v-for="item in dnh11P" @touchstart ='aClickStart' @touchend="aClickEnd">
                  <div class="tag team">自由行</div>
                  <img :src="item.cover" alt="">
                  <p class="goods-title ellipsis">{{item.title}}</p>
                  <div class="start">
                    {{item.beginCity}}出发 <span>&yen;{{item.stagMoney}}起X{{item.stagConut}}期</span>
                  </div>
                </a>
              </div>
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
      </ul>
    </div>
  </div>
</template>
<script>
const destination = require('../assets/js/viking-data.js')

export default {
  data() {
      return {

        isHide: 1,
        isCards: 0,
        isClassesActivelyn8: 0, //8天莱茵河
        isClassesActivelyn11: 0, //11天莱茵河
        isClassesActivednh8: 0, //8天多瑙河
        isClassesActivednh11: 0, //11天多瑙河
        isGoodsActive: 0,
        lyhData: destination.rhine, //莱茵河文案
        dnhData: destination.danube, //多瑙河文案

        //滑动变量
        cardStartPos: 0,
        cardMoveDis: 0,
        cardNewPos: 0,
        cardConWidth: 0,
        windowWidth: 0,
        htmlFontSize: 0,
        $container: null,



        proStartPos: 0,
        proMoveDis: 0,
        proContainerWidth: 0,
        proContainerWrapWidth: 0,

        // 数据
        lyh8T: [],
        lyh8P: [],
        lyh11T: [],
        lyh11P: [],
        dnh8T: [],
        dnh8P: [],
        dnh11T: [],
        dnh11P: [],

        // 宽度
        widthGoods1: 0,
        widthGoods2: 0,
        widthGoods3: 0,
        widthGoods4: 0,

        aClickStartPos:0,
        aClickMoveDis:0,

        touchStartTranslateX: 0,
        navObj: null,
        $bigWrap: null,
        navWidth: 0,

        // 定时器
        Timer:'',                 //
        msTimer:'',                 //
        ctTimer:'',                 //
        ylTimer:'',                 //

      }
    },
    methods: {
      init() { //初始化
        this.isClassesActivelyn8 = 0; //8天莱茵河
        this.isClassesActivelyn11 = 0; //11天莱茵河
        this.isClassesActivednh8 = 0; //8天多瑙河
        this.isClassesActivednh11 = 0; //11天多瑙河
        this.isGoodsActive = 0;
        document.querySelector('.goods1').style.transform = "translate3d(0,0,0)";
        document.querySelector('.goods2').style.transform = "translate3d(0,0,0)";
        document.querySelector('.goods3').style.transform = "translate3d(0,0,0)";
        document.querySelector('.goods4').style.transform = "translate3d(0,0,0)";
      },
      changeClassesActive(i) {
        this.isClassesActive = i;
      },
      changeClassesActivelyn8(i) { //8天莱茵河
        this.isClassesActivelyn8 = i;
      },
      changeClassesActivelyn11(i) { //11天莱茵河
        this.isClassesActivelyn11 = i;
      },
      changeClassesActivednh8(i) { //8天多瑙河
        this.isClassesActivednh8 = i;
      },
      changeClassesActivednh11(i) { //11天多瑙河
        this.isClassesActivednh11 = i;
      },
      changeGoodsActive(i) {
        var self = this;
        this.isGoodsActive = i
        if (this.isGoodsActive == 1 && this.isCards == 1) { //莱茵河8天自由行
          this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
            params: {
              theme: 'wj8lyh',
              max: 20,
              type: 'personal'
            },
            jsonp: "callback"
          }).then(function(res) {
          	console.log(1111);
            self.lyh8P = res.data.info;
            self.widthGoods1 = res.data.info.length*((3.39+0.24)*self.htmlFontSize)-(0.24*self.htmlFontSize);
            self.proContainerWidth  = self.widthGoods1;
          });
        } else if (this.isGoodsActive == 1 && this.isCards == 2) { //莱茵河11天自由行
          this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
            params: {
              theme: 'wj11lyh',
              max: 20,
              type: 'personal'
            },
            jsonp: "callback"
          }).then(function(res) {
            self.lyh11P = res.data.info;
            self.widthGoods2 = res.data.info.length*((3.39+0.24)*self.htmlFontSize)-(0.24*self.htmlFontSize);
            self.proContainerWidth  = self.widthGoods2;
          });
        } else if (this.isGoodsActive == 1 && this.isCards == 3) { //多瑙河8天自由行
          this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
            params: {
              theme: 'wj8dlh',
              max: 20,
              type: 'personal'
            },
            jsonp: "callback"
          }).then(function(res) {
            self.dnh8P = res.data.info;
            self.widthGoods3 = res.data.info.length*((3.39+0.24)*self.htmlFontSize)-(0.24*self.htmlFontSize);
            self.proContainerWidth  = self.widthGoods3;
          });
        } else if (this.isGoodsActive == 1 && this.isCards == 4) { //多瑙河11天自由行
          this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
            params: {
              theme: 'wj11dlh',
              max: 20,
              type: 'personal'
            },
            jsonp: "callback"
          }).then(function(res) {
            self.dnh11P = res.data.info;
            self.widthGoods4 = res.data.info.length*((3.39+0.24)*self.htmlFontSize)-(0.24*self.htmlFontSize);
            self.proContainerWidth  = self.widthGoods4;
          });
        }
      },
      getTranslateX() {
        return parseFloat(document.defaultView.getComputedStyle(document.querySelector('.viking-four .container'), null).transform.substring(7).split(',')[4]) || 0
      },
      getProTranslateX(index) {
      	if(index == 1){
      		 return parseFloat(document.defaultView.getComputedStyle(document.querySelectorAll('.viking-four .goods1')[0], null).transform.substring(7).split(',')[4]) || 0
      	}
      	else if(index == 3){
      		 return parseFloat(document.defaultView.getComputedStyle(document.querySelectorAll('.viking-four .goods2')[0], null).transform.substring(7).split(',')[4]) || 0
      	}
      	else if(index == 5){
      		 return parseFloat(document.defaultView.getComputedStyle(document.querySelectorAll('.viking-four .goods3')[0], null).transform.substring(7).split(',')[4]) || 0
      	}
      	else if(index == 7){
      		 return parseFloat(document.defaultView.getComputedStyle(document.querySelectorAll('.viking-four .goods4')[0], null).transform.substring(7).split(',')[4]) || 0
      	}
       
      },
      cardTouchStart(e) {
      	this.$container.className = "container";
        this.cardStartPos = e.targetTouches[0].pageX;
        // this.cardNewPos = e.currentTarget.offsetLeft;
        this.cardNewPos = this.getTranslateX();
        //console.log(this.cardNewPos);
        this.$container.className = "container";

        this.touchStartTranslateX = this.getTranslateX();

      },
      cardTouchMove(e) {
        this.cardMoveDis = e.targetTouches[0].pageX - this.cardStartPos;
        var pos = this.cardNewPos + this.cardMoveDis;
       
        e.currentTarget.style.transform = "translate3d(" + pos + 'px' + ",0,0)";

      },
      cardTouchEnd(e) {
        this.$container.className = "container containerAnimation";

        console.log(this.touchStartTranslateX);
        if(this.touchStartTranslateX == (-30*this.htmlFontSize)){
          if(this.cardMoveDis < -200) {
            this.$bigWrap.className = "viking-big-wrap viking-big-wrap-1";
            this.navObj.style.transform = "translate3d(0,0,0)"
            this.navObj.innerHTML = '维京荣耀';
            this.$router.push('/');
            

          }
        }
        else if(this.touchStartTranslateX == 0){
           if(this.cardMoveDis > 200) {
            this.$bigWrap.className = "viking-big-wrap viking-big-wrap-3";
            this.navObj.style.transform = "translate3d("+ (this.navWidth*2)+"px" +",0,0)"
            this.navObj.innerHTML = '邮轮介绍';
            this.$router.push('/vikingThree');
           }
        }


        if (this.getTranslateX() > -(3.75 * this.htmlFontSize)) {
          e.currentTarget.style.transform = "translate3d(0,0,0)"
          this.isCards = 0;

        } else if (this.getTranslateX() <= -(3.57 * this.htmlFontSize) && this.getTranslateX() > -((3.75 + 7.5) * this.htmlFontSize)) {
          e.currentTarget.style.transform = "translate3d(" + (-7.5 * this.htmlFontSize) + 'px' + ",0,0)"
          this.isCards = 1;
          // e.currentTarget.style.left = (-5.9*this.htmlFontSize) + 'px';
        } else if (this.getTranslateX() <= -((3.75 + 7.5) * this.htmlFontSize) && this.getTranslateX() > -((7.5 * 2 + 3.75) * this.htmlFontSize)) {
          e.currentTarget.style.transform = "translate3d(" + (-7.5 * 2 * this.htmlFontSize) + 'px' + ",0,0)"
          this.isCards = 2;
        } else if (this.getTranslateX() <= -((7.5 * 2 + 3.75) * this.htmlFontSize) && this.getTranslateX() > -((7.5 * 3 + 3.75) * this.htmlFontSize)) {
          e.currentTarget.style.transform = "translate3d(" + (-7.5 * 3 * this.htmlFontSize) + 'px' + ",0,0)"
          this.isCards = 3;
        } else {
          e.currentTarget.style.transform = "translate3d(" + (-7.5 * 4 * this.htmlFontSize) + 'px' + ",0,0)"
          this.isCards = 4;
        }


      },
      getData() {
        //请求数据
        var self = this;
        // 8天莱茵河
        this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
          params: {
            theme: 'wj8lyh',
            max: 20,
            type: 'team'
          },
          jsonp: "callback"
        }).then(function(res) {
          self.lyh8T = res.data.info;
        });

        //11天莱茵河
        this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
          params: {
            theme: 'wj11lyh',
            max: 20,
            type: 'team'
          },
          jsonp: "callback"
        }).then(function(res) {
          self.lyh11T = res.data.info;
        });

        // 8天多瑙河
        this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
          params: {
            theme: 'wj8dlh',
            max: 20,
            type: 'team'
          },
          jsonp: "callback"
        }).then(function(res) {
          self.dnh8T = res.data.info;
        });

        // 11天多瑙河
        this.$http.jsonp('http://www.linbaoyou.com/travel/activity_albumProduct', {
          params: {
            theme: 'wj11dlh',
            max: 20,
            type: 'team'
          },
          jsonp: "callback"
        }).then(function(res) {
          self.dnh11T = res.data.info;
        });


      },
      testStart(e) {
        this.proStartPos = e.targetTouches[0].pageX;
        this.proMoveDis = 0;
        var target = e.currentTarget;
        var child = e.currentTarget.querySelector('.goods')
        var i = 0;
        if(child.className.indexOf('goods1') > 0){
        	i = 1;
        }
        else if(child.className.indexOf('goods2') > 0){
        	i = 3;
        }
        else if(child.className.indexOf('goods3') > 0){
        	i = 5;
        }
        else if(child.className.indexOf('goods4') > 0){
        	i = 7;
        }
  			
        //console.log(child.className.indexOf('goods1'));
        this.newProPos = this.getProTranslateX(i);
        //console.log(this.newProPos);
      },
      testMove(e) {
      	e.stopPropagation();
        this.proMoveDis = e.targetTouches[0].pageX - this.proStartPos;
        var pos = this.newProPos + this.proMoveDis;
        //console.log(this.newProPos);
        e.currentTarget.querySelector('.goods').style.transform = "translate(" + pos + "px" + ",0)";
      },
      testEnd(e) {
      	var child = e.currentTarget.querySelector('.goods')
      	var i = 0;
        if(child.className.indexOf('goods1') > 0){
        	i = 1;
        }
        else if(child.className.indexOf('goods2') > 0){
        	i = 3;
        }
        else if(child.className.indexOf('goods3') > 0){
        	i = 5;
        }
        else if(child.className.indexOf('goods4') > 0){
        	i = 7;
        }

        //console.log(this.proContainerWidth +" ---------- "+ this.proContainerWrapWidth);
        if (this.getProTranslateX(i) > 0) {
          e.currentTarget.querySelector('.goods').style.transform = "translate(0,0)";
        } else if (this.getProTranslateX(i) < -(this.proContainerWidth - this.proContainerWrapWidth)) {
          e.currentTarget.querySelector('.goods').style.transform = "translate(" + (-(this.proContainerWidth - this.proContainerWrapWidth)) + "px" + ",0)";
        }
        console.log( this.proMoveDis);
      },
      aClickStart(e){
      	this.aClickStartPos = e.targetTouches[0].pageX;
      	console.log(e);
      },
      aClickEnd(e){
      	//this.aClickMoveDis =  e.targetTouches[0].pageX - this.aClickStartPos;
      	//console.log(e.targetTouches[0].pageX);
      	var href = '';
      	if(this.proMoveDis == 0){
      		console.log(e.currentTarget.href);
      		location.href = e.currentTarget.href;
      	}
      },
      clickLyh8(){
        this.$container.className="container containerAnimation";
        this.$container.style.transform = "translate3d("+ (-7.5*this.htmlFontSize) + 'px' +",0,0)"
        this.isCards = 1;
      },
      clickLyh11(){
        this.$container.className="container containerAnimation";
        this.$container.style.transform = "translate3d("+ (-7.5*2*this.htmlFontSize) + 'px' +",0,0)"
        this.isCards = 2;
      },
      clickDnh8(){
        this.$container.className="container containerAnimation";
        this.$container.style.transform = "translate3d("+ (-7.5*3*this.htmlFontSize) + 'px' +",0,0)"
        this.isCards = 3;
      },
      clickDnh11(){
        this.$container.className="container containerAnimation";
        this.$container.style.transform = "translate3d("+ (-7.5*4*this.htmlFontSize) + 'px' +",0,0)"
        this.isCards = 4;
      }
    },
    mounted() {
      this.$container = document.querySelector('.viking-four .container');
      this.cardConWidth = document.querySelector('.viking-four .container').clientWidth;
      this.htmlFontSize = parseFloat(document.documentElement.style.fontSize);
      this.windowWidth = document.body.clientWidth;
      
      this.proContainerWrapWidth = this.$el.querySelector('.goods-wrap').clientWidth;


      this.$bigWrap = document.querySelector('.viking-big-wrap');
      this.navObj = document.querySelector('.viking-slide-btn');
      this.navWidth = this.navObj.clientWidth;

    },
    // computed: {
    // 			widthGoods1(){
    // 				alert(1)
    // 				return this.lyh8P.length*((3.39+0.24)*this.htmlFontSize)-(0.24*this.htmlFontSize);
    // 			},widthGoods2(){
    // 				return this.lyh11P.length*((3.39+0.24)*this.htmlFontSize)-(0.24*this.htmlFontSize);
    // 			},widthGoods3(){
    // 				return this.dnh8P.length*((3.39+0.24)*this.htmlFontSize)-(0.24*this.htmlFontSize);
    // 			},widthGoods4(){
    // 				return this.dnh11P.length*((3.39+0.24)*this.htmlFontSize)-(0.24*this.htmlFontSize);
    // 			}
    // },
    watch: {
      isCards() {
        this.init()
      }
    },

    created() {
      //数据请求
      this.getData();


    }

}
</script>
<style scoped>
.viking-four {
  width: 100%;
  height: 100%;
  background: url('../assets/img/four/four-bg.png') top center no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  transform-style: preserve-3d;
  text-align: left;
}

.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  /* word-break: break-all; */
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

.container {
  width: 45rem;
  position: absolute;
  left: 0;
  transform: translate3d(0, 0, 0);
}

.containerAnimation {
  transition: all 0.5s linear
}

.viking-four * {
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
  line-height: 1;
}

.four-outer {
  width: 100%;
  height: 100%;
  padding-top: .19rem;
  position: relative;
  overflow: hidden;
}

.four-wrap {
  width: 7.5rem;
  position: relative;
  float: left;
  padding: 0 .24rem;
  transition: all .8s ease;
}

.four {
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

.vk-title span {
  font-size: .23rem;
  font-weight: 400;
}

.vk-text {
  text-align: left;
  font-size: .24rem;
  color: #3f3f3f;
  margin-bottom: .21rem;
  line-height: .24rem;
}

.route {
  width: 100%;
  margin-bottom: .25rem;
}

.route img {
  width: 7.02rem;
  height: 1.68rem;
  display: block;
  box-shadow: .01rem 0rem .02rem rgba(0, 0, 0, .1), -0.01rem 0rem .02rem rgba(0, 0, 0, .1), 0rem .04rem .15rem rgba(0, 0, 0, .3);
}

.route-title {
  font-size: .25rem;
  color: #080808;
  line-height: .25rem;
  text-align: left;
  margin-bottom: .06rem;
}

.route-title span {
  font-size: .18rem;
  color: #3f3f3f;
}


/* 8天莱茵河之旅 */

.vk-text1 {
  margin-bottom: .11rem;
}

.classes {
  float: right;
  width: 1.96rem;
  height: 4.75rem;
  position: relative;
  margin-bottom: .24rem;
}

.classes .line {
  width: 0;
  height: 100%;
  border-right: 2px dashed #d7194c;
  position: absolute;
  top: 0;
  left: -0.15rem;
}

.classes li {
  width: 100%;
  height: .36rem;
  padding-left: .3rem;
  margin-bottom: .29rem;
}

.classes.classes11 li {
  margin-bottom: .12rem;
}

.classes li div {
  display: block;
  font-size: .23rem;
  color: #d8194c;
  padding: .06rem .12rem;
  position: absolute;
}

.classes li div.active {
  background-color: #d8194c;
  color: #ffffff;
  border-radius: .04rem;
  box-shadow: .01rem 0rem .02rem rgba(230, 90,127, .5), -0.01rem 0rem .02rem rgba(230, 90,127, .5), 0 .04rem .05rem rgba(230, 90,127, .55);
}

.classes li div.active:before {
  content: "";
  width: 0;
  height: 0;
  border-top: .17rem solid transparent;
  border-right: .17rem solid #d8194c;
  border-bottom: .17rem solid transparent;
  position: absolute;
  top: 0;
  left: -0.3rem;
}

.classes li div span {
  display: block;
  width: .14rem;
  height: .14rem;
  background-color: #d8194c;
  border-radius: 50%;
  position: absolute;
  top: .11rem;
  left: -0.21rem;
}

.picture {
  width: 5.06rem;
  float: left;
}

.picture img {
  display: block;
  width: 5.01rem;
  height: 2.67rem;
  margin-bottom: .07rem;
}

.picture p {
  font-size: .23rem;
  color: #3f3f3f;
  line-height: .33rem;
}

.goods-nav-bar {
  width: 100%;
  height: .6rem;
  border: .02rem solid #d8194c;
  clear: both;
}

.goods-nav {
  width: 50%;
  height: 100%;
  font-size: .26rem;
  color: #d8194c;
  float: left;
  text-align: center;
  line-height: .56rem;
}

.goods-nav.active {
  background-color: #d8194c;
  color: #fff;
  box-shadow:.01rem 0rem .02rem rgba(230, 90,127, .54), -0.01rem 0rem .02rem rgba(230, 90,127, .54), 0 .04rem .08rem rgba(230, 90,127, .74);
}

.vk-text2 {
  text-align: left;
  font-size: .19rem;
  color: #d8194c;
  line-height: .42rem;
}

.goods-wrap {
  width: 100%;
  overflow-x: hidden;
}

.goods {
  height: 3.15rem;
}

.goods-content {
  position: relative;
  display: block;
  width: 3.39rem;
  height: 2.98rem;
  float: left;
  border: 1px solid #bcbcbc;
  box-shadow: .01rem 0rem .02rem rgba(0, 0, 0, .1), -0.01rem 0rem .02rem rgba(0, 0, 0, .1), 0rem .04rem .1rem rgba(0, 0, 0, .1);
}

.goods-content img {
  width: 3.37rem;
  height: 1.87rem;
  display: block;
  margin-bottom: .04rem;
}

.goods-content .goods-title {
  font-size: .23rem;
  color: #333333;
  padding: 0 .14rem;
  line-height: .3rem;
}

.goods-content .start {
  width: 100%;
  padding: 0 .14rem;
  font-size: .18rem;
  color: #626060;
  line-height: .42rem;
  text-align: left;
}

.goods-content .start span {
  font-size: .24rem;
  color: #d8194c;
  font-weight: 600;
  display: inline-block;
  float: right;
  line-height: .42rem;
}

.goods-content +.goods-content {
  margin-left: .24rem;
}

.goods-content .tag {
  width: .85rem;
  height: .31rem;
  font-size: .17rem;
  color: #fff;
  line-height: .31rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}

.goods-content .tag.team {
  background-color: #d8194c;
}

.goods-content .tag.free {
  background-color: #009b65;
}
</style>
