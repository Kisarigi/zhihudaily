<template>
  <div v-show="showAuthor()">
    <div class="authorBack">
      <img :src="Author.image" class="topimage">
      <div class="authorTitle">{{Author.description}}</div>
      <div class="authorText">主题日报主编:</div>
      <div class="flexbox">
       <div class="editors" v-for="item in Author.editors">
         <img :src="item.avatar" class="edavatar">
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Author:[],
    }
  },
  methods:{
      getAuthor(){
        this.Author=this.$store.state.article;
      },
      showAuthor(){
        if(this.$store.state.currentIndex===-1){
          return false;
        }else{
          this.getAuthor();
          return true;
        }
      },
  },
  computed:{



  },
  mounted(){

  },

}

</script>

<style>
.authorBack{
  margin-top: 50px;
  background: #fff;
  padding-bottom: 20px;
}
.flexbox{
  display: flex;
  margin-top:10px;
}
.edavatar{
  width: 50px;
  height: 50px;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
}
.authorText{
  color: grey;
}
.authorTitle{
  font-style:italic;
  font-size: 20px;
}
</style>
