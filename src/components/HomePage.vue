<template>
 <div  class="home">
    <div class="home-content" >
      <div class="header">
        <i  @click="showSideBar" class="el-icon-menu">
        </i>
        <div class="text">知乎日报</span>
        </div>
        <i  @click="showSetting"class="el-icon-more">
        </i>
      </div>

       <sideBar></sideBar>
       <swiper></swiper>
       <author></author>
       <articleList ></articleList>

   </div>

 </div>
</template>
<script>
import axios from 'axios';
import store from '../vuex/store';


import articleList from './ArticleList';
import sideBar from './SideBar';
import swiper from './Swiper';
import author from './Author';
//import $ from '../libs/util.js';
export default{
  data(){
    return{

    }
  },
  methods:{

      showSideBar(){
      this.$store.commit('setShowSideBar');
      window.scrollTo(0,0);
      },
      getTopThemes(){
        axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(res=>{
        this.$store.commit('setTopThemes',res.data.STORIES.top_stories);
        this.$store.commit('setArticle',res.data.STORIES);
       })
      },

  },
  mounted(){
     this.getTopThemes();
  },
  computed:{
    homeHidden(){
       return this.$store.state.homeHidden;
    },
    showBoth(){
       return this.$store.state.showBoth;
    },
  },
  components:{
    articleList,
    sideBar,
    swiper,
    author,
  }

};


</script>

<style>

.home{
  width:100%;
  max-width:768px;
  margin:0 auto;
  background: rgba(240, 240, 240, 0.8);
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
.el-icon-menu{
  flex: 0 0 50px;
  width: 50px;
  padding: 15px 0;
  text-align: center;
  font-size: 25px;
}
.el-icon-more{

  flex: 0 0 50px;
  width: 50px;
  padding: 15px 0;
  text-align: center;
  font-size: 25px;
}
.text{

  white-space:nowrap;
}

</style>
