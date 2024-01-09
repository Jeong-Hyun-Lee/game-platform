<template>
  <v-card
    class="rounded-xl"
    :class="{ 'mr-5': !isLast }"
    elevation="5"
    :width="width"
    :height="height"
    :ripple="true"
  >
    <v-img
      :src="imageUrl"
      transition="fade-transition"
      class="align-end"
      cover
      width="100%"
      height="100%"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
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
      <v-card-title v-if="title" class="white--text"> {{ title }}</v-card-title>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThumbnailComponent',
  props: {
    title: String,
    imageUrl: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 300,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    isLast: Boolean,
    useProgress: { type: Boolean, default: false },
  },
  data: () => ({}),
})
</script>
<style lang="scss">
.v-skeleton-loader__image {
  height: 100%;
}
</style>
