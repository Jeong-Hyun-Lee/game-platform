<template>
  <v-img
    :src="imageUrl"
    transition="fade-transition"
    :class="layout"
    :[backgroundSize]="true"
    :width="width"
    :height="height"
    :gradient="gradient"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" :align="'center'" justify="center">
        <v-progress-circular
          v-if="useProgress"
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
        <v-skeleton-loader
          v-else
          type="image"
          width="100%"
          height="100%"
        ></v-skeleton-loader>
      </v-row>
    </template>
    <slot></slot>
  </v-img>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LazyImage',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    layout: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
    cover: [Boolean, String],
    contain: [Boolean, String],
    gradient: String,
    useProgress: { type: Boolean, default: false },
  },
  computed: {
    backgroundSize() {
      if (this.$props.cover) {
        return 'cover'
      } else {
        return 'contain'
      }
    },
  },
})
</script>
<style lang="scss">
.v-skeleton-loader__image {
  height: 100%;
}
</style>
