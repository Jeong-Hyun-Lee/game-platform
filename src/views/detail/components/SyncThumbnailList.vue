<template>
  <fragment>
    <v-sheet v-if="list.length > 0" class="black">
      <flicking
        ref="mainThumbnail"
        :options="{ bounce: 30, moveType: ['strict'] }"
        :plugins="plugins"
      >
        <div
          class="flicking-panel full has-background-primary"
          v-for="(url, index) in list"
          :key="index"
          :style="{
            width: '100%',
            height: '500px',
          }"
        >
          <lazy-image
            :imageUrl="url"
            class="panel-image black"
            contain
            useProgress
          />
        </div>
      </flicking>
      <flicking
        ref="subThumbnail"
        :options="{ bound: true, bounce: 30, moveType: 'freeScroll' }"
      >
        <div
          class="flicking-panel thumb has-background-primary"
          v-for="(url, index) in list"
          :key="index"
          :style="{
            width: '200px',
            height: '140px',
          }"
        >
          <lazy-image
            :imageUrl="url"
            class="panel-image black"
            contain
            useProgress
          />
        </div>
      </flicking>
    </v-sheet>
    <div v-else :align="'center'" justify="center">no data</div>
  </fragment>
</template>

<script>
import Vue from 'vue'
import { Sync } from '@egjs/flicking-plugins'
import LazyImage from '@/components/LazyImage.vue'

export default Vue.extend({
  name: 'SyncThumbnailList',
  components: {
    LazyImage,
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      plugins: [],
    }
  },
  mounted() {
    this.plugins = [
      new Sync({
        type: 'index',
        synchronizedFlickingOptions: [
          {
            flicking: this.$refs.mainThumbnail,
            isSlidable: true,
          },
          {
            flicking: this.$refs.subThumbnail,
            isClickable: true,
            activeClass: 'active',
          },
        ],
      }),
    ]
  },
})
</script>

<style>
.flicking-panel.thumb.active {
  border: 1px solid #fff;
}
</style>
