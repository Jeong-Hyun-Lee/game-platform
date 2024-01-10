<template>
  <fragment>
    <v-app-bar
      absolute
      color="white--text grey darken-4"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      height="100px"
      :style="{
        position: 'relative',
      }"
    >
      <v-toolbar-title :style="{ fontWeight: 'bold', fontSize: '2rem' }">{{
        $t('main.header')
      }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <menu-list></menu-list>
    </v-app-bar>
    <v-container>
      <div
        v-if="getList.length === 0"
        :align="'center'"
        justify="center"
        class="white--text ma-10"
      >
        Empty List
      </div>
      <thumbnail-list v-else :list="getList"></thumbnail-list>
    </v-container>
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import ThumbnailList from './components/ThumbnailList.vue'
import MenuList from './components/MenuList.vue'
import { getData } from '@/apis/request'
import { mapMutations, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'MainView',
  components: {
    ThumbnailList,
    MenuList,
  },
  async created() {
    try {
      const list = await getData('/getGameList')
      this.setList(list)
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    ...mapGetters({
      getList: 'gameStore/getList',
    }),
  },
  methods: {
    ...mapMutations({
      setList: 'gameStore/setList',
    }),
  },
})
</script>
