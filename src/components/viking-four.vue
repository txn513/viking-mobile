<template>
  <div class="viking-four">
    <div class="four-outer">
      <!-- container -->
      <div class="container" style="left:0">
        <!-- 精彩航线 -->
        <div class="four-wrap" v-if="isHide==0">
          <div class="four">
            <h3 class="vk-title">精彩航线 &nbsp;全年出发</h3>
            <p class="vk-text">蓝色多瑙 &nbsp;浪漫莱茵</p>
            <div class="route clearfix">
              <h4 class="route-title">8天莱茵河之旅丨 <span>四国游 &nbsp;(阿姆斯特丹——巴塞尔)</span></h4>
              <img src="../assets/img/four/route-1-8.png" alt="">
            </div>
            <div class="route clearfix">
              <h4 class="route-title">11天莱茵河经典之旅丨 <span>四国游 &nbsp;(阿姆斯特丹——巴塞尔)</span></h4>
              <img src="../assets/img/four/route-1-11.png" alt="">
            </div>
            <div class="route clearfix">
              <h4 class="route-title">8天多瑙河之旅丨 <span>四国游 &nbsp;(维也纳——布达佩斯)</span></h4>
              <img src="../assets/img/four/route-2-8.png" alt="">
            </div>
            <div class="route clearfix">
              <h4 class="route-title">11天多瑙河之旅丨 <span>五国游 &nbsp;(维也纳——布达佩斯)</span></h4>
              <img src="../assets/img/four/route-2-11.png" alt="">
            </div>
          </div>
        </div>

        <!-- 8天莱茵河之旅 -->
        <div class="four-wrap" v-if="isHide==1">
          <div class="four">
            <h3 class="vk-title">8天莱茵河之旅 <span>(阿姆斯特丹→←巴塞尔)</span></h3>
            <p class="vk-text vk-text1">四国游丨荷兰 &nbsp;德国 &nbsp;法国 &nbsp;瑞士</p>
            <ul class="classes clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">阿姆斯特丹<span v-show="isClassesActive!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">科隆<span v-show="isClassesActive!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">莱茵河中上游<span v-show="isClassesActive!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">海德堡<span v-show="isClassesActive!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">斯特拉斯堡<span v-show="isClassesActive!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">琉森<span v-show="isClassesActive!=5"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(6)" :class="{'active':isClassesActive == 6}">巴塞尔<span v-show="isClassesActive!=6"></span></div>
              </li>
            </ul>

						<div class="picture clearfix">
							<img v-show="isClassesActive == 0" src="../assets/img/four/lyh-8-1.png" alt="">
							<img v-show="isClassesActive == 1" src="../assets/img/four/lyh-8-2.png" alt="">
							<img v-show="isClassesActive == 2" src="../assets/img/four/lyh-8-3.png" alt="">
							<img v-show="isClassesActive == 3" src="../assets/img/four/lyh-8-4.png" alt="">
							<img v-show="isClassesActive == 4" src="../assets/img/four/lyh-8-5.png" alt="">
							<img v-show="isClassesActive == 5" src="../assets/img/four/lyh-8-6.png" alt="">
							<img v-show="isClassesActive == 6" src="../assets/img/four/lyh-8-7.png" alt="">

							<p>瓦豪地区指的是梅尔克到克雷姆斯这一段30公里的多瑙河流域。拥有世界上最美丽的河沿风光,这里有青山之巅的古堡与修道院、静待成熟的不讨园、隐秘的村落小镇，如细碎的钻石散落在幽幽山谷。我们将带您漫步在施皮茨小镇，这里有着大片葡萄梯田，品尝当地红酒。</p>
						</div>

						<div class="goods-nav-bar">
							<div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
							<div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
						</div>
						<p class="vk-text2">性价比和满意度最高 &nbsp;28人精品小团 &nbsp;特配中文领队</p>
						<div class="goods" v-show="isGoodsActive == 0">
							<a href="" class="goods-content mRight">
								<div class="tag">跟团游</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag">跟团游</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>

						<!-- 自由行 -->
						<div class="goods" v-show="isGoodsActive == 1">
							<a href="" class="goods-content mRight">
								<div class="tag">自由行</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag">自由行</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>



          </div>
        </div>

				<!-- 11天莱茵河之旅 -->
				<div class="four-wrap" v-if="isHide==2">
          <div class="four">
            <h3 class="vk-title">11天莱茵河之旅 <span>(阿姆斯特丹→←巴塞尔)</span></h3>
            <p class="vk-text vk-text1">四国游丨荷兰 &nbsp;德国 &nbsp;法国 &nbsp;瑞士</p>
            <ul class="classes classes11 clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">阿姆斯特丹<span v-show="isClassesActive!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(8)" :class="{'active':isClassesActive == 8}">小孩堤防<span v-show="isClassesActive!=8"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">科隆<span v-show="isClassesActive!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">莱茵河中上游<span v-show="isClassesActive!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">海德堡<span v-show="isClassesActive!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(7)" :class="{'active':isClassesActive == 7}">巴登巴登<span v-show="isClassesActive!=7"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">斯特拉斯堡<span v-show="isClassesActive!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">琉森<span v-show="isClassesActive!=5"></span></div>
              </li>
               <li>
                <div style="width:1.8rem" @click="changeClassesActive(9)" :class="{'active':isClassesActive == 9}">伯尔尼/格鲁耶<span v-show="isClassesActive!=9"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(6)" :class="{'active':isClassesActive == 6}">巴塞尔<span v-show="isClassesActive!=6"></span></div>
              </li>
            </ul>

						<div class="picture clearfix">
							<img v-show="isClassesActive == 0" src="../assets/img/four/lyh-8-1.png" alt="">
							<img v-show="isClassesActive == 1" src="../assets/img/four/lyh-8-2.png" alt="">
							<img v-show="isClassesActive == 2" src="../assets/img/four/lyh-8-3.png" alt="">
							<img v-show="isClassesActive == 3" src="../assets/img/four/lyh-8-4.png" alt="">
							<img v-show="isClassesActive == 4" src="../assets/img/four/lyh-8-5.png" alt="">
							<img v-show="isClassesActive == 5" src="../assets/img/four/lyh-8-6.png" alt="">
							<img v-show="isClassesActive == 6" src="../assets/img/four/lyh-8-7.png" alt="">
							<img v-show="isClassesActive == 7" src="../assets/img/four/lyh-8-8.png" alt="">
							<img v-show="isClassesActive == 8" src="../assets/img/four/lyh-8-9.png" alt="">
							<img v-show="isClassesActive == 9" src="../assets/img/four/lyh-8-10.png" alt="">

							<p>瓦豪地区指的是梅尔克到克雷姆斯这一段30公里的多瑙河流域。拥有世界上最美丽的河沿风光,这里有青山之巅的古堡与修道院、静待成熟的不讨园、隐秘的村落小镇，如细碎的钻石散落在幽幽山谷。我们将带您漫步在施皮茨小镇，这里有着大片葡萄梯田，品尝当地红酒。</p>
						</div>

						<div class="goods-nav-bar">
							<div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
							<div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
						</div>
						<p class="vk-text2">维京游轮深圳合作授权 &nbsp;丰富出境游轮服务经验</p>
						<div class="goods" v-show="isGoodsActive == 0">
							<a href="" class="goods-content mRight">
								<div class="tag">跟团游</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag">跟团游</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>

						<!-- 自由行 -->
						<div class="goods" v-show="isGoodsActive == 1">
							<a href="" class="goods-content mRight">
								<div class="tag">自由行</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag">自由行</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>



          </div>
        </div>

        <!-- 8天多瑙河之旅 -->

        <div class="four-wrap" v-if="isHide==3">
          <div class="four">
            <h3 class="vk-title">8天多瑙河之旅 <span>(维也纳→←布达佩斯)</span></h3>
            <p class="vk-text vk-text1">四国游丨奥地利 &nbsp;德国 &nbsp;斯伐洛克 &nbsp;匈牙利</p>
            <ul class="classes clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">维也纳<span v-show="isClassesActive!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">瓦豪河谷<span v-show="isClassesActive!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">慕尼黑<span v-show="isClassesActive!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">萨尔斯堡<span v-show="isClassesActive!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">布拉迪斯拉发<span v-show="isClassesActive!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">布达佩斯<span v-show="isClassesActive!=5"></span></div>
              </li>
            </ul>

						<div class="picture clearfix">
							<img v-show="isClassesActive == 0" src="../assets/img/four/dnh-8-1.png" alt="">
							<img v-show="isClassesActive == 1" src="../assets/img/four/dnh-8-2.png" alt="">
							<img v-show="isClassesActive == 2" src="../assets/img/four/dnh-8-3.png" alt="">
							<img v-show="isClassesActive == 3" src="../assets/img/four/dnh-8-4.png" alt="">
							<img v-show="isClassesActive == 4" src="../assets/img/four/dnh-8-5.png" alt="">
							<img v-show="isClassesActive == 5" src="../assets/img/four/dnh-8-6.png" alt="">

							<p>瓦豪地区指的是梅尔克到克雷姆斯这一段30公里的多瑙河流域。拥有世界上最美丽的河沿风光,这里有青山之巅的古堡与修道院、静待成熟的不讨园、隐秘的村落小镇，如细碎的钻石散落在幽幽山谷。我们将带您漫步在施皮茨小镇，这里有着大片葡萄梯田，品尝当地红酒。</p>
						</div>

						<div class="goods-nav-bar">
							<div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
							<div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
						</div>
						<p class="vk-text2">性价比和满意度最高 &nbsp;28人精品小团 &nbsp;特配中文领队</p>
						<div class="goods" v-show="isGoodsActive == 0">
							<a href="" class="goods-content mRight">
								<div class="tag team">跟团游</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag team">跟团游</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>

						<!-- 自由行 -->
						<div class="goods" v-show="isGoodsActive == 1">
							<a href="" class="goods-content mRight">
								<div class="tag free">自由行</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag free">自由行</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>



          </div>
        </div>


        <!-- 11天多瑙河之旅 -->

        <div class="four-wrap" v-if="isHide==4">
          <div class="four">
            <h3 class="vk-title">11天多瑙河之旅 <span>(维也纳→←布达佩斯)</span></h3>
            <p class="vk-text vk-text1">五国游丨奥地利 &nbsp;德国 &nbsp;捷克 &nbsp;斯伐洛克 &nbsp;匈牙利</p>
            <ul class="classes classes11 clearfix">
              <li class="line"></li>
              <li>
                <div @click="changeClassesActive(0)" :class="{'active':isClassesActive == 0}">维也纳<span v-show="isClassesActive!=0"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(1)" :class="{'active':isClassesActive == 1}">瓦豪河谷<span v-show="isClassesActive!=1"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(2)" :class="{'active':isClassesActive == 2}">慕尼黑<span v-show="isClassesActive!=2"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(3)" :class="{'active':isClassesActive == 3}">萨尔斯堡<span v-show="isClassesActive!=3"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(6)" :class="{'active':isClassesActive == 6}">克鲁姆洛夫<span v-show="isClassesActive!=6"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(4)" :class="{'active':isClassesActive == 4}">布拉迪斯拉发<span v-show="isClassesActive!=4"></span></div>
              </li>
              <li>
                <div @click="changeClassesActive(5)" :class="{'active':isClassesActive == 5}">布达佩斯<span v-show="isClassesActive!=5"></span></div>
              </li>
            </ul>

						<div class="picture clearfix">
							<img v-show="isClassesActive == 0" src="../assets/img/four/dnh-8-1.png" alt="">
							<img v-show="isClassesActive == 1" src="../assets/img/four/dnh-8-2.png" alt="">
							<img v-show="isClassesActive == 2" src="../assets/img/four/dnh-8-3.png" alt="">
							<img v-show="isClassesActive == 3" src="../assets/img/four/dnh-8-4.png" alt="">
							<img v-show="isClassesActive == 4" src="../assets/img/four/dnh-8-5.png" alt="">
							<img v-show="isClassesActive == 5" src="../assets/img/four/dnh-8-6.png" alt="">
							<img v-show="isClassesActive == 6" src="../assets/img/four/dnh-8-7.png" alt="">

							<p>瓦豪地区指的是梅尔克到克雷姆斯这一段30公里的多瑙河流域。拥有世界上最美丽的河沿风光,这里有青山之巅的古堡与修道院、静待成熟的不讨园、隐秘的村落小镇，如细碎的钻石散落在幽幽山谷。我们将带您漫步在施皮茨小镇，这里有着大片葡萄梯田，品尝当地红酒。</p>
						</div>

						<div class="goods-nav-bar">
							<div :class="{'active':isGoodsActive == 0}" @click="changeGoodsActive(0)" class="goods-nav">跟团游 &nbsp;浪漫法式露台房</div>
							<div :class="{'active':isGoodsActive == 1}" @click="changeGoodsActive(1)" class="goods-nav">自由行</div>
						</div>
						<p class="vk-text2">维京游轮深圳合作授权 &nbsp;丰富出境游轮服务经验</p>
						<div class="goods" v-show="isGoodsActive == 0">
							<a href="" class="goods-content mRight">
								<div class="tag team">跟团游</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag team">跟团游</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
						</div>

						<!-- 自由行 -->
						<div class="goods" v-show="isGoodsActive == 1">
							<a href="" class="goods-content mRight">
								<div class="tag free">自由行</div>	
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
							<a href="" class="goods-content">
							<div class="tag free">自由行</div>
								<img src="../assets/img/four/lyh-8-1.png" alt="">
								<p class="goods-title ellipsis">维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特维京河轮 8天莱茵河之旅，巴塞尔-阿姆斯丹特</p>
								<div class="start">
									深圳出发 <span>&yen;1408起X12期</span>
								</div>
							</a>
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
export default {
  data() {
      return {

        isHide: 1,
        isCards: 0,
        isClassesActive: 0,
        isGoodsActive: 0,
        msg: "viking-four.vue"
      }
    },
    methods: {
      changeClassesActive(i) {
        this.isClassesActive = i;
      },
      changeGoodsActive(i){
      	this.isGoodsActive = i;
      }
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
  background-color: #b81b48;
  width: .32rem;
}

.container {
  width: 45rem;
  position: absolute;
  left: 0;
  transition: all .3s ease;
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
  box-shadow: 1px 0px 2px rgba(0, 0, 0, .1), -1px 0px 2px rgba(0, 0, 0, .1), 0px 4px 15px rgba(0, 0, 0, .3);
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
.classes.classes11 li{
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
  border-radius: .04rem
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

.picture{
	width: 5.06rem;
	float: left;
}

.picture img{
	display: block;
	width: 5.01rem;
	height: 2.67rem;
	margin-bottom: .07rem;
}
.picture p{
	font-size: .23rem;
	color: #3f3f3f;
	line-height: .33rem;
}

.goods-nav-bar{
	width: 100%;
	height: .6rem;
	border: .02rem solid #d8194c;
	clear: both;
}
.goods-nav{
	width: 50%;
	height: 100%;
	font-size: .26rem;
	color: #d8194c;
	float: left;
	text-align: center;
	line-height: .56rem;
}
.goods-nav.active{
	background-color: #d8194c;
	color: #fff;
	box-shadow: 1px 0px 2px rgba(0, 0, 0, .1), -1px 0px 2px rgba(0, 0, 0, .1), 0px 4px 20px rgba(0, 0, 0, .2);
}

.vk-text2{
	text-align: left;
	font-size: .19rem;
	color: #d8194c;
	line-height: .42rem;
}

.goods{
	width: 100%;
	height: 3rem;
}
.goods-content{
	position: relative;
	display: block;
	width: 3.39rem;
	height: 2.98rem;
	float: left;
	border: 1px solid #bcbcbc;
	box-shadow: 1px 0px 2px rgba(0, 0, 0, .1), -1px 0px 2px rgba(0, 0, 0, .1), 0px 4px 20px rgba(0, 0, 0, .2);
}
.goods-content img{
	width: 3.37rem;
	height: 1.87rem;
	display: block;
	margin-bottom: .04rem;
}
.goods-content .goods-title{
	font-size: .23rem;
	color: #333333;
	padding: 0 .14rem;
	line-height: .3rem;
}

.goods-content .start{
	width: 100%;
	padding: 0 .14rem;
	font-size: .18rem;
	color: #626060;
	line-height: .42rem;
	text-align: left;
}
.goods-content .start span{
	font-size: .24rem;
	 color: #d8194c;
	 font-weight: 600;
	 display: inline-block;
	 float: right;
	 line-height: .42rem;
}
.goods-content.mRight{
	margin-right: .24rem;
}
.goods-content .tag{
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
.goods-content .tag.team{
	background-color: #d8194c;
}
.goods-content .tag.free{
	background-color: #009b65;
}


</style>
