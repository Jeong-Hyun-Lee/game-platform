<template>
  <fragment>
    <flicking
      :options="{
        horizontal: true,
        circular: false,
        align: 'prev',
        bound: true,
        duration: 500,
        moveType: 'snap',
        useFractionalSize: true,
      }"
      class="parent-flicking"
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
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import Thumbnail from './Thumbnail.vue'
import { IGame } from '@/interfaces'
import { Fragment } from 'vue-fragment'

export default Vue.extend({
  name: 'ThumbnailList',
  components: {
    Thumbnail,
    Fragment,
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
.parent-flicking > .flicking-camera {
  padding: 25px;
}
</style>
