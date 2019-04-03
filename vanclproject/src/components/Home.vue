<template>
    <div>
        <header>
            <i-input size="large" prefix="ios-search" color="#000"  placeholder="熊本熊" />
            <Icon type="ios-mail-outline" size="36" />
        </header>
        <main>
            <!-- //轮播图 -->
            <Carousel 
                :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
                <CarouselItem v-for="imgIb in imgIbs" :key="imgIb">
                    <div class="demo-carousel"><img :src="`../img/${imgIb}`" width="100%" alt=""></div>
                </CarouselItem>
            </Carousel>
            <!-- //导航 -->
            <div id="mIndex-nav">
                <a href="javascript:;"><img width="100%" src="../img/2018_7_9_14_59_50_8699_678x60.jpg" alt=""></a>
                <div>
                    <a href="javascript:;" v-for="imgNav in imgNavs" :key="imgNav.title">
                        <img width="60%" :src="`./img/${imgNav.imgurl}`" alt="">
                        <p>{{imgNav.title}}</p>
                    </a>
                </div>
            </div>
            <!-- //滑动频道 -->
            <div id="slideCHannel" class="Slide">
                <h3><i></i><span>专题精选</span></h3>
                <div>
                    <div ref="wid"  @touchstart='touchStart' @touchmove="touchMove('elememt',nowX,'disX')" @touchend="touchEnd('nowX','disX')" :style="'transform: translate3d('+disX+'px,0,0)'">
                        <img ref="elememt" v-for="slideCHannel in slideCHannels" height="100" :src="`./img/${slideCHannel}`" :key="slideCHannel" alt="">
                    </div>
                </div>
            </div>
            <!-- //在售 -->
            <div id="forSale" class="Slide">
                <h3><i></i><span>凡客T恤</span></h3>
                <div>
                    <div  @touchstart='touchStart' @touchmove="touchMove('forSale',forSaleX,'shiftX')" @touchend="touchEnd('forSaleX','shiftX')" :style="'transform: translate3d('+shiftX+'px,0,0)'">
                        <img ref="forSale" v-for="forSale in forSales" :src="`./img/${forSale}`" :key="forSale" alt="">
                    </div>
                </div>
                <div >
                    <div @touchstart='touchStart' @touchmove="touchMove('sells',nowsellX,'sellX')" @touchend="touchEnd('nowsellX','sellX')" :style="'transform: translate3d('+sellX+'px,0,0)'">
                        <div ref="sells" v-for="sell in sells" :key="sell.img">
                            <img :src="`./img/${sell.img}`" alt="">
                            <p>{{sell.title}}</p>
                            <span>售价：¥ {{sell.price}}</span>
                            <span>充值相当于：<em>¥ {{sell.topUp}}</em></span>
                        </div>
                        <div style="border:1px solid #DED2B5;padding-top:4.375rem">
                            <a style="width:12.5rem; font-size:1.0rem;" href="javascript:;">
                                查看更多
                                <Icon type="ios-arrow-forward" size="40" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //内容 -->
            <div class="Slide">
                <h3><i></i><span>直降市场</span></h3>
                <a href="javascript:;" v-for="detail in details" :key="detail"><img width="50%" :src="`./img/${detail}`" alt=""></a>
            </div>
            <!-- //底部 -->
            <div id="FootPostion">
                <a href="javascript:;"><img src="../img/see-all.jpg" alt=""></a>
                <a href="javascript:;"><img src="../img/ret-top.jpg" alt=""></a>
            </div>
            <div id="login">
                <a href="javascript:;">登录</a>
                <a href="javascript:;">注册</a>
            </div>
            <div id="footer">
                <div>
                    <a href="javascript:;"><img src="../img/help.jpg" alt=""></a>
                    <a href="javascript:;"><img src="../img/d2.jpg" alt=""></a>
                    <a href="javascript:;"><img src="../img/weixin.jpg" alt=""></a>
                    <a href="javascript:;"><img src="../img/pcsite.jpg" alt=""></a>
                </div>
                <h2>京ICP证100557号</h2>
            </div>
        </main>
        <footer>
            <Nav/>
        </footer>
    </div>
</template>
<script>
import Nav from './Nav.vue';

export default {
    data() {
        return {
            value2: 0,
            setting: {
                autoplay: true,
                autoplaySpeed: 2000,
                dots: 'inside',
                radiusDot: true,
                trigger: 'click',
                arrow: 'never'
            },
            //轮播图
            imgIbs:[
                'img1.jpg',
                'img2.jpg',
                'img3.jpg',
                'img4.jpg',
                'img5.jpg',
                'img6.jpg',
            ],
            //导航图
            imgNavs:[
                {
                    imgurl:'2018_1_10_15_53_37_1188_55x60.jpg',
                    title:'新品'
                },
                {
                    imgurl:'2018_1_10_15_53_37_6172_59x54.jpg',
                    title:'特惠'
                },
                {
                    imgurl:'2018_3_28_17_52_17_7914_59x59.jpg',
                    title:'T恤'
                },
                {
                    imgurl:'2018_8_24_11_37_23_9993_59x59.jpg',
                    title:'衬衫'
                },
                {
                    imgurl:'2018_7_26_14_37_13_4000_59x56.jpg',
                    title:'V团'
                }
            ],
            //滑动频道
            slideCHannels:[
                '2019_2_20_15_20_1_4928_326x206.jpg',
                '2019_2_20_15_20_6_2987_326x206.jpg',
                '2019_2_20_15_20_8_1494_326x206.jpg',
                '2019_2_20_15_20_10_6412_326x206.jpg',
                '2019_2_20_15_20_12_4918_326x206.jpg',
                '2019_2_20_15_20_13_808_326x206.jpg'
            ],
            startX:0,//开始触摸的位置
            moveX:0,//滑动时的位置
            disX:0,//移动距离
            nowX:0,
            //在售
            forSales:[
                '2019_3_6_9_59_9_7634_640x338.jpg',
                '2019_3_12_16_44_44_4253_640x338.jpg',
                '2019_3_12_16_44_49_4449_640x338.jpg',
                '2019_3_12_16_44_49_5844_640x338.jpg'
            ],
            shiftX:0,
            forSaleX:0,
            sells:[
                {
                    img:'6384519-1j201903081024520848.jpg',
                    title:'T恤 简鱼 忍不住啊 白色',
                    price:'98',
                    topUp:'45'
                },
                {
                    img:'6384520-1j201903081024568194.jpg',
                    title:'T恤 简鱼 刚刚许了一个愿望 黑色',
                    price:'98',
                    topUp:'45'
                },
                {
                    img:'6384528-1j201903081023367710.jpg',
                    title:'T恤 简鱼 忍不住啊 白色',
                    price:'98',
                    topUp:'45'
                },
                {
                    img:'6384533-1j201903081024467565.jpg',
                    title:'T恤 简鱼 忍不住啊 白色',
                    price:'98',
                    topUp:'45'
                },
                {
                    img:'6384538-1j201903111524268255.jpg',
                    title:'T恤 简鱼 忍不住啊 白色',
                    price:'98',
                    topUp:'45'
                },
                {
                    img:'6384543-1j201903111524167003.jpg',
                    title:'T恤 简鱼 忍不住啊 白色',
                    price:'98',
                    topUp:'45'
                }
            ],
            sellX:0,
            nowsellX:0,
            //内容
            details:[
                '2019_3_6_17_32_8_7379_320x605.jpg',
                '2019_3_6_17_33_31_3289_320x605.jpg',
                '2019_3_6_17_34_18_4820_320x605.jpg',
                '2019_3_15_17_44_8_9660_320x605.jpg',
                '2019_3_6_17_35_50_2276_320x605.jpg',
                '2019_3_6_17_37_15_2886_320x605.jpg'
            ]
        }
    },
    components:{
        Nav
    },
    methods:{
        touchStart:function(ev) {
            ev = ev || event;
            ev.preventDefault();
            if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                this.startX = ev.touches[0].clientX;// 记录开始位置
            }
        },
        touchMove:function(name,now,shift,ev) {
            ev = ev || event;
            ev.preventDefault();
            let imgWidth= this.$refs[name][0].offsetWidth+6;
            let divWidth= this.$refs.wid.offsetWidth-this.$refs[name].length*imgWidth
            if(ev.touches.length == 1) {
                this.moveX = ev.touches[0].clientX;
                this[shift] = this.moveX-this.startX+now;
                if(this[shift]>0){
                    this[shift] = 0;
                }else if(this[shift]<divWidth){
                    this[shift] = divWidth
                    console.log(divWidth);
                }
                // console.log(this.$refs.elememt.length*imgWidth);
                // console.log(this.startX,this.moveX,this.newX,this.disX);
            }
        },
        touchEnd:function(now,shift,ev) {
            ev = ev || event;
            ev.preventDefault();
            this[now] = this[shift];
            // console.log(this.nowX,this.disX)
        }
    }
}
</script>
<style scoped>
header{
    padding: .625rem;
    background-color: rgba(209, 207, 207, 0.2);
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}
main{
    /* height: 300.5rem; */
}
#mIndex-nav{
    padding: .75rem;
}
#mIndex-nav div{
    display: flex;
    margin-top: .75rem;
}
#mIndex-nav div a{
    width: 20%;
    text-align: center;
}
#mIndex-nav div a img{
    width: 60%;
    height: 50%;
}
#mIndex-nav div a p{
    margin-top: .375rem;
    color:#666;
}
.Slide h3{
    padding: .625rem 0;
}
.Slide h3 span{
    font-size:1.3rem;
    vertical-align: middle;
}
.Slide h3 i{
    display: inline-block;
    width: 1.2rem;
    height: 1.3rem;
    background:url(../img/2017_12_19_14_40_52_8584_26x26.jpg) no-repeat;
    vertical-align: middle;
    background-size: 1.25rem;
    margin: 0 .625rem;
}
.Slide>div{
    width:100%;
    overflow: hidden;
}
.Slide>div>div{
    display: flex;
    transition-duration: 0ms;
}
.Slide>div div img{
    margin-right:.375rem;
}
#forSale>div div img{
    height: 10.5625rem;
}
#forSale>div div div{
    text-align: center;
}
#forSale>div div div p{
    width: 8.125rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
#forSale>div div div span{
    display: block;
}
#forSale>div div div span em{
    color:#b81c22;
}
#FootPostion{
    background-color: #FAFAFA;
    display: flex;
}
#FootPostion a{
    width: 50%;
}
#FootPostion a img{
    width: 100%;
}
#login{
    background-color: #FAFAFA;
    text-align: center;
    padding:3.125rem 0;
}
#login a{
    font-size: 1.2em;
    color: #4c4c4c;
    display: inline-block;
    width: 5.25rem;
    height:1.5rem;
    text-align: center;
    line-height: 1.5rem;
}
#footer{
    background-color: #FAFAFA;
    text-align: center;
    margin-bottom: 3.125rem;
}
#footer div{
    display: flex;
    border-bottom: 1px solid #4c4d4d;
    border-top: 1px solid #4d4d4d;
}
#footer div a{
    margin: .9375rem;
    width: 20%;
}
#footer a img{
    width: 100%;
}
#footer h2{
    padding: 1rem;
    line-height: 1;
    font-size: 1.2em;
}
/* footer{
    position: fixed;
    bottom: 0;
} */
</style>

