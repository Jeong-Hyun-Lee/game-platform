<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :class="{ 'mr-5': !isLast, 'on-hover': hover }"
      :elevation="5"
      :width="width"
      :height="height"
      :ripple="true"
    >
      <!-- 프로모션 기능 -->
      <template v-if="usePromotion">
        <flicking
          class="flicking-panel nested-wide pa-0"
          :options="{
            useFractionalSize: true,
            // 마우스혹은 터치로 스와이프
            // bound: true,
            // bounce: '0%',
            // moveType: 'strict',
            // nested: true,
            // 버튼을 통해서 스와이프
            disableOnInit: true,
          }"
          :plugins="plugins"
        >
          <span
            slot="viewport"
            class="flicking-arrow-prev white--text mdi mdi-48px mdi-chevron-left"
            @click.stop
          ></span>
          <span
            slot="viewport"
            class="flicking-arrow-next white--text mdi mdi-48px mdi-chevron-right"
            @click.stop
          ></span>
          <lazy-image
            v-for="(promotionUrl, index) in promotionList"
            :key="`promotion-${index}`"
            :imageUrl="promotionUrl"
            :layout="'align-end'"
            cover
            :gradient="`to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)`"
          >
          </lazy-image>
        </flicking>
      </template>

      <!-- 일반 썸네일 -->
      <lazy-image
        v-else
        :imageUrl="imageUrl"
        :layout="'align-end'"
        cover
        :gradient="`to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)`"
      >
      </lazy-image>

      <v-card-title
        v-if="title"
        class="white--text"
        :style="{
          fontSize: '1.75rem',
          position: 'absolute',
          bottom: 0,
          zIndex: 2,
        }"
      >
        {{ title }}
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import LazyImage from '@/components/LazyImage.vue'
import Vue from 'vue'
import { Arrow } from '@egjs/flicking-plugins'

export default Vue.extend({
  name: 'ThumbnailComponent',
  components: {
    LazyImage,
  },
  props: {
    title: String,
    imageUrl: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 400,
    },
    height: {
      type: [Number, String],
      default: 700,
    },
    isLast: Boolean,
    useProgress: { type: Boolean, default: false },
    usePromotion: { type: Boolean, default: false },
    promotionList: Array,
  },
  data() {
    return {
      plugins: [new Arrow()],
    }
  },
})
</script>
<style lang="scss">
.v-skeleton-loader__image {
  height: 100%;
}
.flicking-arrow-disabled {
  display: none;
}
.flicking-arrow-prev,
.flicking-arrow-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  background: #212121;
  border: 1px solid #fff;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background: #424242;
  }
}
.flicking-arrow-next {
  right: 0;
}
.on-hover {
  // do something
  transition: 0.3s ease transform;
  transform: scale(1.05);
}
.v-card {
  will-change: transform;
}
.v-card:not(.on-hover) {
  transition: 0.3s ease transform;
  transform: scale(1);
}
</style>
