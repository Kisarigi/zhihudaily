<template>
 <div  class="home1">
    <div class="home-content" >
      <div class="header">
        <i  @click="back()" class="el-icon-arrow-left"></i>
        <div class="text">文章详情</div>
        <i  class="el-icon-edit-outline" @click="showComments" ><span class="qipao">{{this.commentsNum}}  </span></i>
        <i  class="el-icon-caret-top"><span class="goodNum">{{this.thinkGoodNum}} </span></i>
      </div>
      <div class="content-wrapper">
        <img class="articleimg" :src="this.articleInfo.image">
        <div class="article" v-html="this.articleInfo.body"></div>
      </div>
   </div>
 </div>
</template>
<script>
import axios from 'axios';
import store from '../vuex/store';
export default{
  data(){
    return{
    articleInfo:'',
    commentsNum:0,
    thinkGoodNum:0,
    }
  },
  methods:{
    back(){
    history.go(-1);
    },
    getArticleInfo(){
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/'+this.$store.state.articleId).then(res=>{
      this.articleInfo=res.data.CONTENTS;
     })
     axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/extra/'+this.$store.state.articleId).then(res=>{
     this.commentsNum=res.data.DES.comments;
     this.thinkGoodNum=res.data.DES.popularity;
     this.$store.commit('setArticleInfo',res.data.DES);
    })
   },
    showComments(){
    this.$router.push('/article/comments/' + this.$store.state.articleId);
    }
  },
  mounted(){
   this.getArticleInfo();
  },
  computed:{

  },
  components:{

  },
  deactivated(){
    this.$destroy()
  },

};


</script>

<style>
@import '../common/css/news_qa.auto.css';
.home1{
  width:100%;
  max-width:768px;
  margin:0 auto;
}
.home-content{
  width:100%;
}
.header{
  display: flex;
  position: fixed;
  justify-content:space-between;
  top: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  height: 50px;
  align-items: center;
  color: #fff;
  z-index: 3;
  background: rgb(53, 157, 218);
}
.el-icon-arrow-left{
  flex: 0 0 50px;
  width: 50px;
  padding: 15px 0;
  text-align: center;
  font-size: 25px;
}
.el-icon-caret-top{
  flex: 0 0 50px;
  width: 50px;
  padding: 15px 0;
  text-align: center;
  font-size: 25px;
}
.el-icon-edit-outline{
  flex: 0 0 50px;
  width: 50px;
  padding: 15px 0;
  text-align: center;
  font-size: 25px;
}
.text{
  white-space:nowrap;
}
.article{
}
.articleimg{
  margin-top: 70px;
  left: 0;
  width: 100%;
}
.content-wrapper {
   width: 100%;
   max-width: 768px;
}
.qipao{
  font-size: 15px;
}
.goodNum{
  font-size: 17px;
}
</style>
