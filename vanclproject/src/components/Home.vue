<template>
    <div>
        <header>
            <i-input size="large" prefix="ios-search" color="#000"  placeholder="熊本熊" />
            <Icon type="ios-mail-outline" size="36" />
        </header>
        <main>
            <!-- <Carousel>
                <CarouselItem v-for="(imgurl,idx) in imgurls" :key="idx">
                    <div class="demo-carousel"><img :src="imgurl" alt=""></div>
                </CarouselItem>
            </Carousel> -->
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(imgurl,idx) in imgurls" :key="idx">
                    <!-- <img src="../img/2019_3_12_14_19_55_4820_640x402.jpg" alt=""> -->
                    <img :src="`../img/${imgurl}`" alt="">
                </el-carousel-item>
            </el-carousel>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value2: 0,
            imgurls:[
                '2019_3_12_14_19_55_4820_640x402.jpg',
                '2019_3_15_15_53_56_5022_640x402.jpg',
                '2019_3_15_15_54_15_7593_640x402.jpg',
                '2019_3_15_15_54_34_2847_640x402.jpg',
                '2019_3_15_15_54_47_3826_640x402.jpg',
                '2019_3_15_15_55_6_3158_640x402.jpg'
            ],
            
        }
    },
    methods:{
        
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
        height: 62.5rem;
    }
</style>

