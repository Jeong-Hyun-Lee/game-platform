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
          >
            <div class="loading" :class="durationClass[duration]"></div>
          </lazy-image>
        </div>
      </flicking>
    </v-sheet>
    <div v-else :align="'center'" justify="center">no data</div>
  </fragment>
</template>

<script>
import Vue from 'vue'
import { AutoPlay, Sync } from '@egjs/flicking-plugins'
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
      duration: 10000,
      durationClass: {
        5000: 'duration-5000',
        10000: 'duration-10000',
        15000: 'duration-15000',
      },
    }
  },
  mounted() {
    this.plugins = [
      new AutoPlay({
        duration: this.duration,
        direction: 'NEXT',
      }),
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

<style scoped lang="scss">
.loading {
  will-change: transform;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: rgba(255, 255, 255, 0.3);
}
.flicking-panel.thumb.active {
  border: 1px solid #fff;
  .loading {
    transform: translateX(0);
    animation: linear slidein;
    &.duration-5000 {
      animation-duration: 5s;
    }
    &.duration-10000 {
      animation-duration: 10s;
    }
    &.duration-15000 {
      animation-duration: 15s;
    }
  }
}
@keyframes slidein {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
