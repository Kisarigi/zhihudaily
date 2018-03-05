<template>

  <div  class="sideBar" >
  <transition name="el-zoom-in-top">
  <div class="sideBar-content" v-show="showSide">
    <div class="user">
      <div class="avatar">
        <img class="image"  src="https://avatars1.githubusercontent.com/u/12209706?s=460&v=4">
      </div>
      <div class="username">Kisarigi</div>

    </div>

    <div class="menu-list">
        <div class="backhome" @click="showHome()" :class="{'background' : (currentIndex === -1)}">最新日报
        </div>
        <div v-for="(item,index) in themeList" @click="showBackground(index,item.id)" :class="{'background' : (index === currentIndex)}">
          <div class="backhome">{{item.name}}</div>

        </div>
    </div>
  </div>
 </transition>
 <transition name="el-zoom-in-top">
   <div @click="hideSide" v-show="showSide" class="mask"></div>
   </transition>
</div>

</template>

<script>

import axios from 'axios';
//import $ from '../libs/util.js';
import store from '../vuex/store'
export default{
  data(){
    return{
       themeList:[],


    }
  },

  methods:{



    getThemes(){
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/themes').then(res=>{
      this.themeList=res.data.THEMES.others;

    })
  },
    showBackground(index,id){

      this.$store.commit('setCurrentIndex',index);
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/themes/'+id).then(res=>{
      //this.$store.commit('setTopThemes',res.data.STORIES.top_stories);
      this.$store.commit('setArticle',res.data.THEMEDES);
      this.$store.commit('setShowSideBar');
    })
  },
  showHome(){
    this.$store.commit('setCurrentIndex',-1);
    axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(res=>{
    this.$store.commit('setArticle',res.data.STORIES);
    this.$store.commit('setShowSideBar');
   })

  },
  hideSide() {
     this.$store.commit('setShowSideBar');
     this.$store.commit('setHomeHidden');
   }
},

  mounted(){
    this.getThemes();
  },
  computed:{
   showSide(){
      return this.$store.state.showSide;
   },
   currentIndex(){
     return this.$store.state.currentIndex;
   }

  },
  components:{

  }

};

</script>

<style>
.sideBar{

  width: 100%;
  height: 100%;
  max-width: 768px;
  margin: 0 auto;

}
.sideBar-content {
   position: absolute;
   top: 0;
   width: 50%;
   height: 100%;
   max-width: 500px;
   background: rgb(254, 254, 254);
   z-index: 10;
   overflow-y: scroll;
}
.user{
  width: 100%;
  padding: 20px 0px 20px 20px;
  box-sizing: border-box;
  background: rgb(53, 157, 218);
}
.avatar{
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
}
.image{
  width:100%;
}
.username{
height:30px;
line-height: 30px;
display: inline-block;
vertical-align: middle;
margin-left: 20px;
font-size: 20px;
color: #fff;
}
.backhome{
padding:10px 0px 10px 20px;
font-size: 17px;
}
.background{
  border-left: 15px solid rgb(53, 157, 218);
  margin-top: 3px;
}
.mask {
  position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    max-width: 768px;
    background: rgba(0, 0, 0, 0.8);
    z-index: 6;
  }
</style>
