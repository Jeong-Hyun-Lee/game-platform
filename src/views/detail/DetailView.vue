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
      <v-toolbar-title :style="{ fontWeight: 'bold', fontSize: '2rem' }">
        {{ getData.title }}
      </v-toolbar-title>
    </v-app-bar>
    <v-container class="white--text">
      <v-row>
        <v-col :style="{ overflow: 'auto' }" cols="8">
          <sync-thumbnail-list :list="getData.images" />
        </v-col>
        <v-col cols="4" class="info-container"
          >{{ getData.description }}
          <v-btn
            class="light-blue darken-4 play-btn rounded-xl"
            :align="'center'"
            justify="center"
            width="100%"
            height="80px"
            :ripple="true"
          >
            {{ $t('detail.play') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script lang="ts">
import { IGame } from '@/interfaces'
import Vue from 'vue'
import { mapGetters } from 'vuex'
import SyncThumbnailList from './components/SyncThumbnailList.vue'

export default Vue.extend({
  name: 'DetailView',
  components: {
    SyncThumbnailList,
  },
  computed: {
    ...mapGetters({
      getList: 'gameStore/getList',
    }),
    getData(): IGame {
      // 값만 비교하려고 == 사용
      return (
        this.getList.find((item: IGame) => item.id == this.$route.params.id) ||
        {}
      )
    },
  },
})
</script>
<style scoped lang="scss">
.detail-container {
  display: flex;
  flex-direction: row;
  color: #fff;
  gap: 60px;
}
.info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 2;
}
.play-btn {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
