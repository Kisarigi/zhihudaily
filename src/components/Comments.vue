<template>
 <div  class="home1">
    <div class="home-content" >
      <div class="header">
        <i  @click="back()" class="el-icon-arrow-left"></i>
      </div>
      <div class="comments">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
            长评论{{this.commentsNum.long_comments}}条
            </template>
            <div v-for="item in longCommentsInfo">
              <div class="mainContent">
                <div class="theAvatarContent"><img class="theAvatar" :src="item.avatar"></div>
                  <span class="author">{{item.author}}</span>
                  <div class="likes"><i class="el-icon-arrow-up"></i>{{item.likes}}</div>
                  <div class="theContent">{{item.content}}</div>
                  <div class="time">{{timetrans(item.time)}}</div>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
            短评论{{this.commentsNum.short_comments}}条
            </template>
            <div v-for="item in shortCommentsInfo">
              <div class="mainContent">
                <div class="theAvatarContent"><img class="theAvatar" :src="item.avatar"></div>
                <span class="author">{{item.author}}</span>
                <div class="likes"><i class="el-icon-arrow-up"></i>{{item.likes}}</div>
                <div class="theContent">{{item.content}}</div>
                <div class="time">{{timetrans(item.time)}}</div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
   </div>
 </div>
</template>

<script>
import axios from 'axios';
import store from '../vuex/store';



//import $ from '../libs/util.js';
export default{
  data(){
    return{
      longCommentsInfo:[],
      shortCommentsInfo:[],
    }
  },
  methods:{

    back(){
    history.go(-1);
    },
    getLong(){
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/'+this.$store.state.articleId+'/long-comments').then(res=>{
      this.longCommentsInfo=res.data.COMMENTS.comments;
     })
     axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/'+this.$store.state.articleId+'/short-comments').then(res=>{
     this.shortCommentsInfo=res.data.COMMENTS.comments;
    })
    },
    timetrans(date){
    var date = new Date(date*1000);//如果date为10位不需要乘1000
    var Y = date.getFullYear() + '年';
    var M = (date.getMonth()+1 < 10 ? +(date.getMonth()+1) : date.getMonth()+1) + '月';
    var D = (date.getDate() < 10 ?  + (date.getDate()) : date.getDate()) + '日  ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes());
    return Y+M+D+h+m;
   },
  },
  mounted(){
    this.getLong();
  },
  computed:{
    commentsNum(){
    return this.$store.state.articleInfo;
   },

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
.el-icon-arrow-up{
  font-size: 20px;
}
.likes{
  float: right;
}
.time{
  float: right;
}
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
.comments{
  margin-top: 60px;
}
.mainContent{
  margin-top: 20px;
  border-bottom: 1px solid #EBEEF5;

}
.mainContent:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0;
}
.author{
  font-size:15px;
}
.theAvatarContent{
  display: inline-block;
  width: 45px;
  height: 45px;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
}
.theAvatar{
  width:100%;
}
</style>
