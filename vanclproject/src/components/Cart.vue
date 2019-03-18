<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h2>购物车</h2>
        </header>
        <main>
            <div id="top">
                <span>在售商品：</span>
                <Button type="error">全不选</Button>
                <Button type="error">删除</Button>
            </div>
            <div id="content">
                <div>
                    <p><input type="checkbox"></p>
                    <a href="javascript:;"><img width="84" src="../img/6384515-1j201903111526567029.jpg" alt=""></a>
                    <div>
                        <p>T恤 欧飞鸿 怒火街头2</p>
                        <p><span>颜色: 白色    尺码: M</span><Icon type="ios-trash-outline" size="24" /></p>
                        <p>
                            <span><em>￥98.00</em></span>
                            <Icon type="md-remove" size="26" />
                            <input type="text">
                            <Icon type="md-add" size="26" />
                        </p>
                    </div>
                </div>
                <div>
                    <p><input type="checkbox"></p>
                    <a href="javascript:;"><img width="84" src="../img/6384515-1j201903111526567029.jpg" alt=""></a>
                    <div>
                        <p>T恤 欧飞鸿 怒火街头2</p>
                        <p><span>颜色: 白色    尺码: M</span><Icon type="ios-trash-outline" size="24" /></p>
                        <p>
                            <span><em>￥98.00</em></span>
                            <Icon type="md-remove" size="26" />
                            <input type="text">
                            <Icon type="md-add" size="26" />
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {};
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
#top span{
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
#content>div div p{
    margin: .25rem 0;
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
</style>

