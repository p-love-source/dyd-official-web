<template>
  <div class="mobile">
    <div class="main">
      <div class="head">
        <!--<div class="log"></div>
        <div class="platform-desc"></div>-->
        <div class="download-btn">
          <span class="btn-andriod" @click="andriodDownload"></span>
          <span class="btn-ios " @click="iosDownload"></span>
        </div>
      </div>
      <!--平台简介-->
      <div class="introduce size24">
        <div class="intro-title-bg"></div>
        <!--<img src="../assets/image/" alt="">-->
        <div class="intro-desc top">
          <p>点一点购物隶属于杭州砍一砍网络科技有限公司，是聚焦于快消生鲜的精品自营电商，为消费者提供一站式购物体验。</p>
        </div>
        <div class="intro-desc">
          <p>
            点一点购物平台涵盖
            <span class="key-points">生鲜食品、休闲零食、乳饮酒水、粮油米面、个护家清、日用百货、服饰家纺</span>
            等精选商品，为消费者提供极致性价比的商品，让消费者拥有高品质的生活方式！
          </p>
        </div>
      </div>
      <!--平台优势-->
      <div class="advantages">
        <div class="advan-title-bg"></div>
        <div class="advan-box">
          <div class="advan-main top">
              <div>
                <span class="advan-icon-1"></span>
                <p>买手精品</p>
                <p>自建专业买手团队</p>
                <p>精挑细选高品质商品</p>
              </div>
              <div>
                <span class="advan-icon-2"></span>
                <p>严格品控</p>
                <p>严格的资质审核与品控管理</p>
                <p>从源头开始严格把关确保100%正品</p>
              </div>
          </div>
          <div class="advan-main bottom">
              <div>
                <span class="advan-icon-3"></span>
                <p>极致性价比</p>
                <p>自营直采</p>
                <p>好的东西真的不贵</p>
              </div>
              <div>
                <span class="advan-icon-4"></span>
                <p>一站式购齐</p>
                <p>生活日用</p>
                <p>点一点就购了</p>
              </div>
              <div>
                <span class="advan-icon-5"></span>
                <p>售后无忧</p>
                <p>极速发货&nbsp;&nbsp;&nbsp;&nbsp;假一赔十</p>
                <p>7天售后无忧</p>
              </div>
          </div>
        </div>
      </div>
      <!--扫码下载-->
      <div class="link">
          <div class="link-top">
            <p class="link-title">更多方式关注点一点购物平台</p>
          </div>
          <div class="link-center">
            <div class="link-center-box top">
              <div>
                <span class="code-one"></span>
                <p>下载点一点购物</p>
              </div>
              <div>
                <span class="code-two"></span>
                <p>关注微信小程序</p>
              </div>
            </div>
            <div class="link-center-box bottom">
              <div>
                <span class="code-three"></span>
                <p>关注微信公众号</p>
              </div>
              <div>
                <span class="code-four"></span>
                <p>关注点一点微博</p>
              </div>
            </div>
          </div>
          <div class="link-bottom size24 black33">
            <p>公司地址：浙江省杭州市萧山区协和辉丰大厦A座12层</p>
            <p>公司电话：0571-82651323  (仅工作日)</p>
            <p>邮编：310000</p>
          </div>
      </div>
      <div class="foot size24 white">
        <p> <a href="http://www.beian.miit.gov.cn"> 浙ICP备17033271号</a> </p>
        <p>营业执照：91330106MA28ME2761</p>
        <p>食品经营许可证：JY13301810016601</p>
        <p>杭州砍一砍网络科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile",
  data(){
    return {

    }
  },
  mounted(){
    // 开启了eslint 严格模式
    // window.console.log("组件加载完成");
    console.log('11',document.querySelector('.foot').offsetTop);
    
  },
  methods: {
    andriodDownload(){
      window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.beyondin.bargainbybargain";
      // window.console.log("前往andriod下载地址");
    },
    iosDownload(){
      window.location.href = "https://itunes.apple.com/cn/app/id1447338387?mt=8";
      // window.console.log("前往ios下载地址");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mobile {
    width: 100%;
    height: 100%;
  }
  .main {
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    /*display: flex;
    flex-direction: column;*/
  }
  /*头部*/
  .head{
    width: 100%;
    height:5.62rem;
    background: url(../assets/image/mobile/image-bigbg2.jpg) no-repeat;
    background-size: cover;
    padding: 0.4rem 0 0 0.4rem;
    position: relative;
  }
  .download-btn{
    width: 4.44rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0.4rem;
    bottom:0.4rem;
  }
  .download-btn span{
    width: 2.02rem;
    height: 0.68rem;
  }
  .btn-andriod{
    background: url(../assets/image/mobile/andriod-btnbg.png) no-repeat;
    background-size: cover;
  }
  .btn-ios{
    background: url(../assets/image/mobile/ios-btnbg.png) no-repeat;
    background-size: cover;
  }
  /*平台简介*/
  .introduce{
    width: 100%;
    /*height:5.24rem;*/
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0.4rem 0.52rem;
  }
  .intro-title-bg{
    width:4.1rem;
    height:1.2rem;
    background: url(../assets/image/mobile/image-titlebg1.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 0.20rem;
  }
  .introduce .top{
    padding-bottom: 0.54rem;
  }
  .introduce p{
    line-height: 0.4rem;
  }
  .intro-desc p{
    text-indent: 2em;
  }
  .key-points{
    color: #FF9E00;
  }
  /*平台优势*/
  .advantages{
    width: 100%;
    height:9.20rem;
    background: #F5F7FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.28rem 0 1.50rem;
  }
  .advan-title-bg{
    width: 3.56rem;
    height: 1.2rem;
    background: url(../assets/image/mobile/image-titlebg2.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 0.46rem;
  }
  .advan-box{
    width: 100%;
  }
  .advan-box .top{
    padding: 0 0.62rem 0.76rem 1.16rem;
  }
  .advan-box .bottom{
    padding: 0 0.54rem;
  }
  .advan-main{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .advan-main div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .advan-main div span{
    width: 1.44rem;
    height: 1.44rem;
  }
  .advan-icon-1{
    background: url(../assets/image/mobile/image-icon1.png) no-repeat;
    background-size: cover;
  }
  .advan-icon-2{
    background: url(../assets/image/mobile/image-icon2.png) no-repeat;
    background-size: cover;
  }
  .advan-icon-3{
    background: url(../assets/image/mobile/image-icon3.png) no-repeat;
    background-size: cover;
  }
  .advan-icon-4{
    background: url(../assets/image/mobile/image-icon4.png) no-repeat;
    background-size: cover;
  }
  .advan-icon-5{
    background: url(../assets/image/mobile/image-icon5.png) no-repeat;
    background-size: cover;
  }
  .advan-main div p:nth-of-type(1){
    font-size: 0.28rem;
    line-height: 0.4rem;
    color: #333333;
    padding-bottom: 0.1rem;
  }
  .advan-main div p:nth-of-type(2){
    font-size: 0.20rem;
    color: #999999;
    line-height: 0.28rem;
  }
  .advan-main div p:nth-of-type(3){
    font-size: 0.20rem;
    color: #999999;
    line-height: 0.28rem;
  }
  /*扫码下载*/
  .link{
    width: 100%;
    height:9.22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .link-top{
      width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0.4rem;
  }
  .link-top .link-title{
    font-size: 0.44rem;
    color: #FFC700;
    padding-bottom: 0.1rem;
  }
  /*.link-top span{
    width: 1.2rem;
    height: 0.04rem;
    background: #FFC700;
  }*/
  .link-center{
    width: 100%;
    padding: 0.6rem 1.2rem 0.58rem;
  }
  .link-center .top{
    padding-bottom: 0.8rem;
  }
  .link-center-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .link-center-box div{
    width: 1.78rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .link-center-box div span{
    width: 1.6rem;
    height: 1.6rem;
  }
  .code-one{
    background: url(../assets/image/mobile/image-code1.png) no-repeat;
    background-size: cover;
  }
  .code-two{
    background: url(../assets/image/mobile/image-code2.png) no-repeat;
    background-size: cover;
  }
  .code-three{
    background: url(../assets/image/mobile/image-code3.png) no-repeat;
    background-size: cover;
  }
  .code-four{
    background: url(../assets/image/mobile/image-code4.png) no-repeat;
    background-size: cover;
  }
  .link-center-box div p{
    font-size: 0.24rem;
    color: #000000;
    line-height: 0.34rem;
    padding-top: 0.1rem;
  }
  .link-bottom{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .link-bottom p:nth-child(1){
    padding-bottom: 0.2rem;
  }
  .link-bottom p:nth-child(2){
    padding-bottom: 0.2rem;
  }
  .link-bottom p:nth-child(3){
    padding-bottom: 0.4rem;
  }
  /*底部*/
  .foot{
    width: 100%;
    height:1.98rem;
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.22rem;
  }
  .foot p{
    line-height: 0.36rem;
  }
  .foot p a {
      text-decoration:none;
      color: #fff;
  }
</style>
