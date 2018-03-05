<template>
  <div id="aaa">
    <div class="listTime">{{getListTime}}</div>
 <div class="articleList">
   <div v-for="item in showArticle.stories" class="list">
     <div class="story" @click="showArticlePage(item.id)">
      <span class="titletext">{{item.title}}</span>
      <img :src="item.images" class="articleListimage">
    </div>
   </div>
   <transition name="el-zoom-in-bottom">
   <el-button @click="getNextDay" v-show="showButton" class="next1"type="primary" icon="el-icon-caret-bottom"></el-button>
   </transition>
  </div>
  </div>
</template>

<script>
import store from '../vuex/store';
import axios from 'axios';

export default {
  data(){
    return{
      allArticle:[],
      showButton:false,
    }
  },
  methods:{
     getNextDay(){
        axios.get('https://zhihu-daily.leanapp.cn/api/v1/before-stories/'+this.getLastTime).then(res=>{
         this.$store.commit('setArticle',res.data.STORIES);
         window.scrollTo(0,0);
          })
     },
    showArticlePage(id) {
         // 跳转到动态路由
         this.$router.push('/article/' + id);
         // 更新文章的 id
         this.$store.commit('setArticleId', id);
       },
    handleScroll(){
      let  atemp=document.documentElement.clientHeight||document.body.clientHeight;
      let  btemp=document.documentElement.scrollTop||document.body.scrollTop;
      let  ctemp=document.documentElement.scrollHeight||document.body.scrollHeight;
      if(atemp+btemp==ctemp){
        //document.documentElement.clientHeight+document.documentElement.scrollTop==document.documentElement.scrollHeight
        //当滚动条到达底部时 弹出
        if(this.$store.state.currentIndex==-1){
         this.showButton=true;
        }
        // axios.get('https://zhihu-daily.leanapp.cn/api/v1/before-stories/'+this.getLastTime).then(res=>{
        // this.$store.commit('setArticle',res.data.STORIES);
        //   })
      }else{
        this.showButton=false;
      }
      //  console.log(document.documentElement.clientHeight);   943
      //  console.log(document.documentElement.scrollHeight); 2076
      //  console.log(document.documentElement.scrollTop);   1133
    },
  },
  computed:{
    showArticle(){
       return this.$store.state.article;
     },
     getLastTime(){
       return this.$store.state.article.date;
     },
     getListTime(){
       if(this.$store.state.currentIndex==-1){
         let a=this.$store.state.article.date;
         if(typeof a==='string'){
           return a.slice(4,6)+"月"+a.slice(6,8)+"日"+"  消息日报"
         }
     }else{
       return "今日日报"
     }
   }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);
    //绑定滚动事件
  },
}
</script>
<style>
.listTime{
  background:#fff;
  margin-bottom: 20px;
  font-size: 20px;
  font-style:oblique;

}
.next1{
position:fixed;
left: calc( 50% - 30px);
bottom:1%;
width:60px;
}
.articleList {
  margin-top: 10px;
  width:100%;
  background: rgba(240, 240, 240, 0.8);
}
.list {
  margin: 0 10px;
}
.story {
  display: flex;
  justify-content:space-between;
  width: 100%;
  margin-bottom: 8px;
  padding: 14px 14px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #ccc;
}
.articleListimage {
  flex: 0 0 auto;
  height: 75px;
}
</style>
