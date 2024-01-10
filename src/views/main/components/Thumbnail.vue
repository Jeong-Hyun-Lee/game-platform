<template>
  <v-card
    class="rounded-xl"
    :class="{ 'mr-5': !isLast }"
    elevation="5"
    :width="width"
    :height="height"
    :ripple="true"
  >
    <lazy-image
      :imageUrl="imageUrl"
      :layout="'align-end'"
      cover
      :gradient="`to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)`"
    >
      <v-card-title
        v-if="title"
        class="white--text"
        :style="{
          fontSize: '1.75rem',
        }"
      >
        {{ title }}
      </v-card-title>
    </lazy-image>
  </v-card>
</template>

<script lang="ts">
import LazyImage from '@/components/LazyImage.vue'
import Vue from 'vue'

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
  },
})
</script>
<style lang="scss">
.v-skeleton-loader__image {
  height: 100%;
}
</style>
