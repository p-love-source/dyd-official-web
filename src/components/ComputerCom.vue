<template>
    <div class="computer">
        <ul class="main">
            <li id="download" class="main-one main-box" ref="download">
                <div class="head-bg" :style="{'opacity': opacityNum}"></div>
                <div class="head-box">
                    <div class="clearfix">
                        <span class="log"></span>
                        <ul class="nav clearfix">
                            <li v-for="(val,i) in navList" :key="i"  @click="navClick(i,val.idName,val.class_name)">
                                <!-- <a :href="val.idName" :class="{active: i == checkNum}">{{val.name}}</a> -->
                                <a :class="{active: i == checkNum}">{{val.name}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--下载码-->
                <div class="head">
                    <div class="text-bg"></div>
                    <div class="download-address clearfix">
                        <div class="btn-box">
                            <span class="andriodDownload" @click="andriodDownload"></span>
                            <span class="iosDownload" @click="iosDownload"></span>
                        </div>
                        <div class="code">
                            <span class="weixin-code"></span>
                            <p>扫码下载APP</p>
                        </div>
                    </div>
                    <div class="head-bottom">
                        <p>DIANYIDIAN</p>
                        <p>GOUWU</p>
                    </div>
                </div>
            </li>
            <!--平台简介-->
            <li class="main-two main-box" ref="intro" v-show="pageNum == 1">
                <div class="line" id="platform-intro"></div>
                <div class="intro clearfix">
                    <div class="intro-left">
                        <div class="intro-title"></div>
                        <p>
                            点一点购物隶属于杭州砍一砍网络科技有限公司，是聚焦于快消生鲜的精品自营电商，为消费者提供一站式购齐体验。
                        </p>
                        <p>
                            点一点购物平台涵盖
                            <span>生鲜食品、休闲零食、乳饮酒水、粮油米面、个护家清、日用百货、服饰家纺</span>
                            等精选商品，为消费者提供极致性价比的商品，让消费者拥有高品质的生活方式！
                        </p>
                    </div>
                    <div class="intro-right">
                        <span></span>
                    </div>
                </div>
            </li>
            <!--平台优势-->
            <li class="main-three main-box" ref="advantages" v-show="pageNum == 1">
                <div class="line" id="platform-advan"></div>
                <div class="advantages">
                    <div class="advan-title"></div>
                    <ul class="advan-main">
                        <li class="advan-li-first">
                            <span class="advan-icon-1"></span>
                            <p>买手精品</p>
                            <p>自建专业买手团队</p>
                            <p>精挑细选高品质商品</p>
                        </li>
                        <li>
                            <span class="advan-icon-2"></span>
                            <p>严格品控</p>
                            <p>严格的资质审核与品控管理</p>
                            <p>从源头开始严格把关确保100%正品</p>
                        </li>
                        <li>
                            <span class="advan-icon-3"></span>
                            <p>极致性价比</p>
                            <p>自营直采</p>
                            <p>好的东西真的不贵</p>
                        </li>
                        <li>
                            <span class="advan-icon-4"></span>
                            <p>一站式购齐</p>
                            <p>生活日用</p>
                            <p>点一点就购了</p>
                        </li>
                        <li class="advan-li-last">
                            <span class="advan-icon-5"></span>
                            <p>售后无忧</p>
                            <p>极速发货&nbsp;&nbsp;&nbsp;&nbsp;假一赔十</p>
                            <p>7天售后无忧</p>
                        </li>
                    </ul>
                </div>
            </li>
            <!--扫码下载-->
            <li class="main-four main-box" ref="contactus" v-show="pageNum == 1">
                <div class="line" id="contact-us"></div>
                <div class="link">
                    <div class="link-top">
                        <p class="link-title">更多方式关注点一点购物平台</p>
                    </div>
                    <ul class="link-center clearfix">
                        <li>
                            <span class="code-one"></span>
                            <p>下载点一点购物</p>
                        </li>
                        <li>
                            <span class="code-two"></span>
                            <p>关注微信小程序</p>
                        </li>
                        <li>
                            <span class="code-three"></span>
                            <p>关注微信公众号</p>
                        </li>
                        <li class="weibo">
                            <span class="code-four"></span>
                            <p>关注点一点微博</p>
                        </li>
                    </ul>
                    <div class="link-bottom">
                        <p>公司地址：浙江省杭州市萧山区协和辉丰大厦A座12层</p>
                        <p>公司电话：0571-82651323  (仅工作日)</p>
                        <p>邮编：310000</p>
                    </div>
                </div>
            </li>
            <!-- 关于我们 -->
            <li class="main-six main-box" v-show="pageNum != 1">
                <div class="about-us">
                    <div class="about-one">
                        <h3>平台介绍</h3>
                        <div>
                            <p>
                                点一点购物是杭州砍一砍网络科技有限公司与2017年3月上线的一家专注于集社交、游戏投资于一体的电商APP，用户通过发起和朋友、家人、邻居等的砍价，低价格购买商品。
                            </p>
                            <p>
                                目前平台涵盖生鲜食品、休闲零食、乳饮酒水、粮油米面、个护家清、日用百货、服饰家纺等精选商品，为消费者提供极致性价比的商品，让消费者拥有高品质的生活方式！
                            </p>
                        </div>
                    </div>
                    <div class="about-two">
                        <h3>业务模式</h3>
                        <div>
                            <p>
                                点一点购物商城是移动互联网生态圈新型社交娱乐平台APP，是一个直接对接商家及社交、游戏、投资于一体的电商APP，用户通过发起和朋友、家人、邻居等的砍价，可以以更低的价格，砍购买优质的商品。其中，通过沟通分享砍价形式的社交理念，形成了点一点独特的新社交电商思维。
                            </p>
                        </div>
                    </div>
                    <div class="about-three">
                        <h3>特色功能</h3>
                        <div>
                            <p>
                                用户通过发起和朋友、家人、邻居等的砍价，可以低价格，砍购商品，为消费者提供一站式购物体验。
                            </p>
                            <p>
                                全新的游戏+社交模式，邀请朋友砍一砍获得红包，用优惠的价格买到商品，跟好友一起购物一起玩游戏。
                            </p>
                        </div>
                    </div>
                    <div class="about-four">
                        <h3>平台优势</h3>
                        <div>
                            <p>
                                买手精品：自建专业买手团队，精挑细选高品质商品。
                            </p>
                            <p>
                                严格品控：严格的资质审核与品控管理，从源头开始严格把关，确保100%正品。
                            </p>
                            <p>
                                极致性价比：自营直采，好的东西真的不贵。
                            </p>
                            <p>
                                一站式购齐：生活用品，日用百货，点一点就购了。
                            </p>
                            <p>
                                售后无忧：急速发货，假一赔十，七天售后无忧。
                            </p>
                        </div>
                    </div>
                    <div class="about-five">
                        <h3>发展历程</h3>
                        <div>
                            <p>
                                成立于2017年3月，注册资本5000万。
                            </p>
                            <p>
                                2018年游戏点点秘境第一版上线,TapTap评分高达9.7分！
                            </p>
                            <p>
                                2019年年初正式推出手机APP【点一点购物】，产品涵盖安卓、IOS、微信小程序，提供一站式购物体验。
                            </p>
                            <p>
                                2019年7月推出【点一点购物2.0】，游戏【点点庄园】，【点点秘境】，打造电商游戏一体化平台。
                            </p>
                        </div>
                    </div>
                </div>
            </li>
            <!-- 底部 -->
            <li class="main-five main-box" ref="foot">
                <div class="foot">
                    <p>浙ICP备17033271号-2 营业执照：91330106MA28ME2761</p>
                    <p>食品经营许可证：JY13301810016601 杭州砍一砍网络科技有限公司</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "computer",
    data(){
        return {
            isClick: false,
            opacityNum: 0,
            checkNum: 0,
            navList: [
                {idx: 0, name: "APP下载", idName: "#download", class_name: "main-one"},
                {idx: 1, name: "平台简介", idName: "#platform-intro", class_name: "main-two"},
                {idx: 2, name: "平台优势", idName: "#platform-advan", class_name: "main-three"},
                {idx: 3, name: "联系我们", idName: "#contact-us", class_name: "main-four"},
                {idx: 4, name: "关于我们", idName: "#download", class_name: "main-one"}
            ],
            pageNum: 1
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods: {
        andriodDownload(){
            window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.beyondin.bargainbybargain";
            // window.console.log("前往andriod下载地");
        },
        iosDownload(){
            window.location.href = "https://itunes.apple.com/cn/app/id1447338387?mt=8";
            // window.console.log("前往ios下载地");
        },
        /**
         * 导航条跳转
         * */ 
        navClick(idx,name,othername){
            // console.log(idx,name,othername);
            // let mainNode = document.getElementsByClassName("main")[0].childNodes;
            // console.log(mainNode);
            // this.getRollingLen(mainNode);
            // let selNode = document.getElementsByClassName(othername)[0];
            // console.log(selNode.offsetHeight);
            this.pageNum = idx == 4 ? 2 : 1;
            this.isClick = true;
            let _height = document.body.clientHeight; // 页面可视区域
            this.opacityNum = idx == 0 ? 0 : 1.0;
            this.checkNum = idx;
            document.querySelector(name).scrollIntoView(true); // 锚点，不通过a标签默认的行为来跳转，这样url不会变化
        },
        /**
         * 获取导航条的滚动距离
         * */ 
        getRollingLen(nodes){
            let rlen;
            nodes.forEach(el => {
                console.log(el);
            });
        },
        getCHeight(num, bodyH){
            if(this.isClick){
                this.isClick = false;
                return;
            }
            // console.log("距离顶部的滑动距离:",num,"网页正文高度:",bodyH);
            // 600 520 493 643 146  ==> 600 1120 1613 2256 2202        
            let _ch1 = this.$refs.download.clientHeight;
            let _ch2 = this.$refs.intro.clientHeight;
            let _ch3 = this.$refs.advantages.clientHeight;
            let _ch4 = this.$refs.contactus.clientHeight;
            let _ch5 = this.$refs.foot.clientHeight;
            
            if(num < _ch1 - 70){
                this.checkNum = 0;
            }else if(num >= _ch1 - 70 && num < _ch1 + _ch2 - 70){
                this.checkNum = 1;
            }else if(num >= _ch1 + _ch2 - 70 && num < _ch1 + _ch2 + _ch3 - 70){
                this.checkNum = 2;
            }else{
                this.checkNum = 3;
            }
            if(num + bodyH == _ch1 + _ch2 + _ch3 + _ch4 + _ch5){
                this.checkNum = 3;
            }
        },
        handleScroll($event) {
            if(this.pageNum == 2){
                return;
            }
            let _scrollTop = $event.target.scrollTop;
            let _bodyH = document.body.scrollHeight;
            // console.log("距离顶部的滑动距离:",_scrollTop,"网页正文高度:",_bodyH);
            if(_scrollTop <=10){
                this.opacityNum = 0;
            }else if(_scrollTop > 10 && _scrollTop < 50){
                this.opacityNum = 0.2;
            }else if(_scrollTop > 50 && _scrollTop < 100){
                this.opacityNum = 0.4;
            }else if(_scrollTop > 100 && _scrollTop < 150){
                this.opacityNum = 0.6;
            }else if(_scrollTop > 150 && _scrollTop < 200){
                this.opacityNum = 0.8;
            }else{
                this.opacityNum = 1.0;
            }
            this.getCHeight(_scrollTop, _bodyH);
        }
    }
}
</script>

<style scoped>
    .computer {
        width: 100%;
        height: 100%;
    }
    .main {
        width: 100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .main .main-box{
        width:100%;
    }
    .main-one{
        width: 100%;
        position: relative;
        /*height: 6.0rem;*/
        background: url(../assets/image/pc/image-bigbg.png) no-repeat;
        background-size: cover;
    }
    .main-two{
        position: relative;
        height: 5.20rem;
        background: #ffffff;
    }
    .main-three{
        position: relative;
        height: 4.93rem;
        background: #F5F7FA;
    }
    .main-four{
        position: relative;
        height: 6.43rem;
        background: #ffffff;
    }
    .main-five{
        height: 1.46rem;
        background: #000000;
    }
    .head,
    .intro,
    .advantages,
    .link,
    .foot,
    .about-us{
        width: 12.00rem;
        height: 100%;
        margin: 0 auto;
    }
    .line{
        width: 100%;
        height: 0.7rem;
        position: absolute;
        top: -0.7rem;
        left: 0;
    }
    /*头部*/
    .head-bg,
    .head-box{
        width: 100%;
        height: 0.7rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 101;
        padding-top: 0.15rem;
    }
    .head-bg{
        background: #ffffff;
    }
    .head-box div{
        width: 12.0rem;
        margin: 0 auto;
    }
    .log{
        display: block;
        float: left;
        width: 1.98rem;
        height: 0.4rem;
        background: url(../assets/image/pc/image-log.png) no-repeat;
        background-size: cover;
    }
    .nav{
        float: right;
    }
    .nav li{
        float: left;
        width: 0.68rem;
        height: 0.4rem;
        margin-left: 0.7rem;
    }
    .nav li a{
        display: block;
        font-size: 0.16rem;
        color: #000000;
        line-height: 0.4rem;
    }
    .active{
        border-bottom: 0.02rem solid #000000;
        font-weight: 600;
    }
    .head{
        position: relative;
        width: 12.0rem;
        height: 6.0rem;
        margin: 0 auto;
        /*background: #FFC700;*/
    }
    .text-bg{
        position: absolute;
        left:0.8rem;
        bottom: 1.93rem;
        background: url(../assets/image/pc/image-textbg.png) no-repeat;
        background-size: cover;
        width: 4.61rem;
        height: 2.42rem;
    }
    .head-bottom {
        position: absolute;
        left: 0;
        bottom: 0.12rem;
        font-size: 0.14rem;
        color: #000000;
        line-height: 0.2rem;
    }
    .download-address{
        width: 2.32rem;
        position: absolute;
        left: 0.8rem;
        bottom: 0.8rem;
        z-index: 100;
    }
    .btn-box{
        float: left;
    }
    .btn-box span{
        display: block;
        width: 1.31rem;
        height: 0.44rem;
    }
    .andriodDownload{
        background: url(../assets/image/pc/andriod-btnbg.png) no-repeat;
        background-size: cover;
        margin-bottom: 0.1rem;
    }
    .iosDownload{
        background: url(../assets/image/pc/ios-btnbg.png) no-repeat;
        background-size: cover;
    }
    .code{
        float: right;
    }
    .code span{
        display: block;
        width: 0.81rem;
        height: 0.81rem;
        background: url(../assets/image/pc/image-qrcode-icon.png) no-repeat;
        background-size: cover;
        margin-bottom: 0.02rem;
    }
    .code p{
        font-size: 0.12rem;
        color: #000000;
        line-height: 0.17rem;
        text-align: center;
    }
    .head-bottom{

    }
    .head-bottom p{
        font-size: 0.14rem;
        color: #000000;
        line-height: 0.20rem;
    }
    /*平台简介*/
    .intro{

    }
    .intro-left{
        float: left;
        width: 7.26rem;
        padding-top: 0.8rem;
    }
    .intro-title{
        width: 3.60rem;
        height: 0.93rem;
        background: url(../assets/image/pc/image-titlebg1.png) no-repeat;
        background-size: cover;
        margin-bottom: 0.4rem;
    }
    .intro-left p{
        font-size: 0.16rem;
        color: #333333;
        text-indent: 2em;
        line-height: 0.4rem;
    }
    .intro-left p span{
        color: #FF9E00;
    }
    .intro-left p:nth-of-type(2){
        padding-top: 0.28rem;
    }
    .intro-right{
        float: right;
        width: 3.88rem;
        height: 5.20rem;
        padding-top: 0.3rem;
    }
    .intro-right span{
        display: block;
        width: 3.88rem;
        height: 4.90rem;
        background: url(../assets/image/pc/image-mobile.png) no-repeat;
        background-size: cover;
    }
    /*平台优势*/
    .advantages{
        padding-top: 0.5rem;
    }
    .advan-title{
        width: 3.11rem;
        height: 0.93rem; 
        background: url(../assets/image/pc/image-titlebg2.png) no-repeat;
        background-size: cover;
        margin:0 auto;
        margin-bottom: 0.48rem;
    }
    .advan-main{
        /*width: 100%;*/
    }
    .advan-main li{
        float: left;
    }
    .advan-main li:nth-child(1){
        width: 1.92rem;
        margin-right: 0.11rem;
    }
    .advan-main li:nth-child(2){
        width: 2.92rem;
        margin-right: 0.10rem;
    }
    .advan-main li:nth-child(3){
        width: 1.92rem;
        margin-right: 0.59rem;
    }
    .advan-main li:nth-child(4){
        width: 1.92rem;
        margin-right: 0.60rem;
    }
    .advan-main li:nth-child(5){
        width: 1.92rem;
    }
    .advan-main li p{
        text-align: center;
    }
    .advan-main li p:nth-of-type(1){
        font-size: 0.18rem;
        color: #333333;
        line-height: 0.25rem;
        padding: 0.24rem 0 0.16rem 0;
    }
    .advan-main li p:nth-of-type(2){
        font-size: 0.14rem;
        color: #999999;
        line-height: 0.2rem;
    }
    .advan-main li p:nth-of-type(3){
        font-size: 0.14rem;
        color: #999999;
        line-height: 0.2rem;
    }
    .advan-main li span{
        display: block;
        width: 1.13rem;
        height: 1.13rem;
        margin: 0 auto;
    }
    .advan-icon-1{
        background: url(../assets/image/pc/image-icon1.png) no-repeat;
        background-size: cover;
    }
    .advan-icon-2{
        background: url(../assets/image/pc/image-icon2.png) no-repeat;
        background-size: cover;
    }
    .advan-icon-3{
        background: url(../assets/image/pc/image-icon3.png) no-repeat;
        background-size: cover;
    }
    .advan-icon-4{
        background: url(../assets/image/pc/image-icon4.png) no-repeat;
        background-size: cover;
    }
    .advan-icon-5{
        background: url(../assets/image/pc/image-icon5.png) no-repeat;
        background-size: cover;
    }
    /*扫码下载*/
    .link-top{
        margin: 0 auto;
    }
    .link-top .link-title{
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.45rem;
        color: #FFC700;
        padding: 0.8rem 0 0.82rem 0;
    }
    .link .link-center{
        width: 100%;
    }
    .link-center li{
        float: left;
        width: 1.48rem;
        margin-right: 2.02rem;
    }
    .link-center .weibo{
        margin-right: 0;
    }
    .link-center li span{
        display:block;
        width: 1.48rem;
        height: 1.48rem;
        margin-bottom: 0.06rem;
    }
    .link-center li p{
        font-size: 0.2rem;
        color: #000000;
    }
    .code-one{
        background: url(../assets/image/pc/image-code1.png) no-repeat;
        background-size: cover;
    }
    .code-two{
        background: url(../assets/image/pc/image-code2.png) no-repeat;
        background-size: cover;
    }
    .code-three{
        background: url(../assets/image/pc/image-code3.png) no-repeat;
        background-size: cover;
    }
    .code-four{
        background: url(../assets/image/pc/image-code4.png) no-repeat;
        background-size: cover;
    }
    .link-bottom{
        font-size: 0.16rem;
        color: #333333;
        text-align: center;
        line-height: 0.22rem;
        padding-top: 0.80rem;
    }
    .link-bottom p:nth-child(2) {
       padding: 0.12rem 0;
    }
    /*底部*/
    .foot p{
        font-size: 0.14rem;
        line-height: 0.28rem;
        color: #ffffff;
        text-align: center;
    }
    .foot p:first-child{
        padding-top: 0.48rem;
    }

/* 关于我们 */
    .about-us {
        padding: 0.4rem 0.6rem 1.0rem;
    }
    .about-us h3 {
        font-size: 0.28rem;
        margin-bottom: 0.32rem;
    }
    .about-us p {
        font-size: 0.16rem;
        line-height: 0.32rem;
    }
    .about-us div {
        margin-bottom: 0.6rem;
    }
    .about-one div p:first-child {
        margin-bottom: 0.32rem;
    }
    .about-four div p {
        margin-bottom: 0.16rem;
    }
    .about-five div p {
        margin-bottom: 0.16rem;
    }
</style>
