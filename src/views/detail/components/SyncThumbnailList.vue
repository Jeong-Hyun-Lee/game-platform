<template>
  <fragment>
    <v-sheet v-if="list.length > 0" class="black">
      <flicking
        ref="mainThumbnail"
        :options="{ bounce: 30 }"
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
          <v-img
            class="panel-image black"
            :src="url"
            width="100%"
            height="100%"
            contain
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
          <v-img
            class="panel-image black"
            :src="url"
            width="100%"
            height="100%"
            contain
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

export default Vue.extend({
  name: 'SyncThumbnailList',
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
