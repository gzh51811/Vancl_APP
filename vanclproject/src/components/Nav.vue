<template>
    <div id="nav_bottom">
        <el-badge :value="typeface.num"  class="item" v-for="(typeface,idx) in typefaces" :key="typeface.name" >
          <a href="javascript:;" @click="goto(typeface)"><Icon :type="typeface.type" size="40"  @click="color(idx)" :color="typeface.color"/></a>
        </el-badge>
    </div>
</template>
<script>
export default {
    data(){
        return {
            typefaces:[
                {
                    type:'ios-home',
                    color:'red',
                    num:'',
                    name:'Home'
                },
                {
                    type:'md-apps',
                    color:'black',
                    num:'',
                    name:'CategoryPage'
                },
                {
                    type:'md-videocam',
                    color:'black',
                    num:'',
                    name:'ChannelPage'
                },
                {
                    type:'md-cart',
                    color:'black',
                    num:'1',
                    name:'Cart'
                },
                {
                    type:'md-contact',
                    color:'black',
                    num:'',
                    name:'Personal'
                }
            ]
        }
    },
    methods:{
        color(idx){
        // console.log(this.typefaces.length);
        this.typefaces.map(typeface=>typeface.color='black');
        this.typefaces[idx].color='red';
        },
        goto(typeface){
            // console.log('App:',this);
            this.$router.push({name:typeface.name});
        }
    },
}
</script>
<style scope>
    #nav_bottom{
        position: fixed;
        bottom: 0;
        display: block;
        width:100%;
        background: #ffffff;
    }
    #nav_bottom>div{
        text-align: center;
        width: 20%;
    }
</style>
