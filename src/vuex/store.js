import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    articleId: '',
    showSide: false,
    homeHidden: false,
    currentIndex: -1,
    topThemes: [],
    themeList:[],
    article:[],
    themeListId:0,
    articleInfo:[],

  },
  getters: {


  },

  mutations: {
    setArticleId(state, id) {
      state.articleId = id;
    },
    setThemeListId(state, id) {
      state.themeListId = id;
    },
    setShowSideBar(state) {
      state.showSide = !state.showSide;
    },
    setHomeHidden(state) {
      state.homeHidden = !state.homeHidden;
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index;
    },
    setTopThemes(state, list) {
      state.topThemes = list;
    },
    setArticle(state, list) {
      state.article = list;
    },
    setArticleInfo(state, list) {
      state.articleInfo = list;
    }

  }
});
