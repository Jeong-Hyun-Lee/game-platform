<template>
  <v-container class="thumbnail-list">
    <flicking
      :options="{
        horizontal: true,
        circular: false,
        align: 'prev',
        bound: true,
        duration: 500,
        moveType: ['snap', { count: 4 }],
        autoResize: true,
      }"
    >
      <Thumbnail
        v-for="(item, index) in list"
        :key="`card-${index}`"
        :imageUrl="item.thumbnail"
        :title="item.title"
        @click.native="onClickHandler(item)"
        :usePromotion="item.usePromotion"
        :promotionList="item.images"
      />
    </flicking>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Thumbnail from './Thumbnail.vue'
import { IGame } from '@/interfaces'

export default Vue.extend({
  name: 'ThumbnailList',
  components: {
    Thumbnail,
  },
  props: ['list'],
  methods: {
    onClickHandler(item: IGame) {
      this.$router.push({
        path: `/detail/${item?.id}`,
      })
    },
  },
})
</script>
<style lang="scss">
.panel .v-image {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
@/interfaces
