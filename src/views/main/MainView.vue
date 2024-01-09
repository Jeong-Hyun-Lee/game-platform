<template>
  <fragment>
    <v-app-bar
      absolute
      color="white--text blue-grey darken-3"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      :style="{
        position: 'relative',
      }"
    >
      <v-toolbar-title :style="{ 'font-weight': 'bold' }">{{
        $t('main.header')
      }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <menu-list></menu-list>
    </v-app-bar>
    <v-container>
      <div
        v-if="gameList.length === 0"
        align="center"
        justify="center"
        class="white--text ma-10"
      >
        Empty List
      </div>
      <thumbnail-list v-else :list="gameList"></thumbnail-list>
    </v-container>
  </fragment>
</template>

<script>
import Vue from 'vue'
import ThumbnailList from '@/components/ThumbnailList.vue'
import MenuList from './components/MenuList.vue'
// import { Game } from './game-list'
import { getData } from '@/apis/request'

export default Vue.extend({
  name: 'MainView',
  components: {
    ThumbnailList,
    MenuList,
  },
  async created() {
    try {
      this.gameList = await getData('/getGameList')
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      // gameList: [] as Array<Game>,
      gameList: [],
    }
  },
})
</script>
