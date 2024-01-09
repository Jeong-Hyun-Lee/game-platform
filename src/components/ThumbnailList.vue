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
        :imageUrl="item.images[0]"
        :title="item.title"
      />
    </flicking>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Flicking } from '@egjs/vue-flicking'
import { Parallax } from '@egjs/flicking-plugins'
import Thumbnail from './Thumbnail.vue'

const parallax = new Parallax('.v-image__image', 1)

export default Vue.extend({
  name: 'ThumbnailList',
  components: {
    Flicking,
    Thumbnail,
  },
  props: ['list'],
  mounted() {
    console.log('list >>> ', this.list)
  },
})
</script>
<style lang="scss">
.thumbnail-list {
  height: 600px;
  overflow: auto;
  padding: 10px;
}

.panel .v-image {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
