<template>
  <div class="swiper" v-show="showSwiper" >
  <el-carousel :interval="3000" arrow="never" height="250px">
    <el-carousel-item v-for="item in showTop" :key="item" >
      <div @click="toArticle(item.id)">
        <h3 >{{item.title}}</h3>
        <img :src="item.image" class="topimage">
      </div>
    </el-carousel-item>
  </el-carousel>

</div>
</template>

<script>
export default {
  data(){
    return{
      topThemes:[]
    }
  },
  methods:{
     toArticle(id){
       this.$router.push('/article/' + id);
       // 更新文章的 id
       this.$store.commit('setArticleId', id);
     }
  },
  computed:{
    showTop(){
       return this.$store.state.topThemes;
     },
    showSwiper(){
      if(this.$store.state.currentIndex===-1){
        return true;
      }else{
        return false;
      }
    },

  },
  mounted(){

  },

}

</script>

<style>
.swiper{
top:40px;

}
.el-carousel__item h3 {
  color: #fffafa;
  font-size: 20px;
  opacity: 0.75;
  position:absolute;
  bottom: 1px;
  left: 50px;

}
.topimage{
  width:100%;
}

</style>
