<template>
  <v-card
    :class="{ 'mr-5': !isLast }"
    elevation="5"
    :width="width"
    :height="height"
    :ripple="true"
  >
    <!-- 프로모션 기능 -->
    <template v-if="usePromotion">
      <flicking
        class="flicking-panel nested-wide"
        :options="{
          bound: true,
          moveType: ['strict'],
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
  background: #050505;
  border: 1px solid #fff;
  z-index: 1;
}
.flicking-arrow-next {
  right: 0;
}
</style>
