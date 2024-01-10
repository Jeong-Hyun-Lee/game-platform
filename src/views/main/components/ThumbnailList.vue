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
      />
    </flicking>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { Flicking } from '@egjs/vue-flicking'
import Thumbnail from './Thumbnail.vue'

export default Vue.extend({
  name: 'ThumbnailList',
  components: {
    Flicking,
    Thumbnail,
  },
  props: ['list'],
  methods: {
    onClickHandler(item) {
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
