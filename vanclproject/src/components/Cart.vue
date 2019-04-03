<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h2>购物车</h2>
        </header>
        <main>
            <div id="top">
                <span class="tSpan">在售商品：</span>
                <Button type="error" @click="checkAll">全选</Button>
                <Button type="error">删除</Button>
            </div>
            {{selected}}
            <div id="content">
                <div v-for="(data,idx) in datas" :key="data.id">
                    <p><input type="checkbox" v-model="selected" :value="idx" @click="sum"></p>
                    <a href="javascript:;" style="padding:4px;"><img width="80" :src="`./img/${data.imgurl}`" alt=""></a>
                    <div>
                        <p>{{data.name}}</p>
                        <p><span>颜色: 白色    尺码: M</span><Icon type="ios-trash-outline" size="24" /></p>
                        <p>
                            <span><em>￥{{data.price}}</em></span>
                            <Icon type="md-remove" size="26" @click="minus(idx)" />
                            <input type="text" :value="data.num">
                            <Icon type="md-add" size="26" @click="add(idx)"/>
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div id="sum">
                <div>
                    <p>
                        <span>总金额：</span>
                        <span><em>¥&nbsp;{{total}}</em></span>
                    </p>
                </div>
                <Button type="error">结算（{{quantity}}）</Button>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            datas:'',
            total:0,
            quantity:0,
            selected:[]
        }
    },
    methods:{
        minus(idx){
            this.datas[idx].num--;
            this.$axios.get("http://localhost:1998/cart/update", {
                params: {
                    username:this.datas[idx].username,
                    gid:this.datas[idx].id,
                    num:this.datas[idx].num
                }
            }).then(res => {
                // console.log(res);
                this.sum()
            });
        },
        add(idx){
            this.datas[idx].num++;
            this.$axios.get("http://localhost:1998/cart/update", {
                params: {
                    username:this.datas[idx].username,
                    gid:this.datas[idx].id,
                    num:this.datas[idx].num
                }
            }).then(res => {
                // console.log(res);
                this.sum();
            });
        },
        checkAll(){
            if(this.selected.length==this.datas.length){
                this.selected = [];
                this.wdw = 'false';
            }else{
                this.selected = [];
                for(var i=0; i<this.datas.length; i++){
                    this.selected.push(i);
                }
                this.wdw = 'true';
            }
            this.sum()
        },
        sum(){
            let total = 0;
            let quantity = 0;
            for(let i=0; i<this.selected.length; i++){
                total+=this.datas[this.selected[i]].price*this.datas[i].num;
                quantity+=this.datas[this.selected[i]].num;
            }
            this.total = total;
            this.quantity = quantity;
        },
        select(idx){
            // 获取idx在数组中的位置
            let index = this.selected.indexOf(idx);
            if(index>=0){
                // 如果当前已勾选，则取消勾选
                this.selected.splice(index,1)
            }else{
                this.selected.push(idx)
            }
        }
    },
    created(){
        this.$axios.post("http://localhost:1998/cart/find", {
            username:'lala'
        }).then(res => {
            // console.log(res);
            this.datas=res.data;
            // this.sum();
            console.log(this.datas)
        });
    }
};
</script>
<style scoped>
header {
  height: 3.75rem;
  padding: 0 1.25rem;
  background: #b81c22;
}
.el-icon-arrow-left {
  font-size: 1.875rem;
  line-height: 3.75rem;
  color: #ffffff;
  float: left;
}
header h2 {
  color: #ffffff;
  font-size: 1.25rem;
  text-align: center;
  line-height: 3.75rem;
}
main{
    padding: 0 1.5rem;
}
#top{
    border-bottom: 1px solid #e3e3e3;
    padding: .1875rem 0;
}
#top .tSpan{
    color: #4c4c4c;
    font-size: .625rem;
    margin-right: 3.75rem
}
#top button{
    height: 1.25rem;
    margin-left: .3125rem;
    line-height: .625rem;
}
#content img{
    vertical-align: middle;
}
#content>div{
    border-bottom: 1px solid #e3e3e3;
    display: flex;
}
#content>div>p{
    display: flex;
    align-items: center;
}
#content>div>p input{
    width:1rem;
    height: 1rem;
}
#content>div div{
    width: 100%;
}
#content>div div p{
    margin: .25rem 0;
    width: 100%;
}
#content>div div span{
    margin-right: 2.25rem
}
#content>div div span em{
    color:#b81c22;
}
#content>div div input{
    width: 1.875rem;
    height:1.375rem;
    margin: 0 .375rem;
    text-align: center;
}
#sum{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    background: floralwhite;
    padding: 6px 0;
}
#sum div{
    margin-left:.75rem;
    margin-right: 6.25rem;
    font-size:1rem;
}
#sum div em{
    color: red;
    font-weight: bold;
}
</style>

