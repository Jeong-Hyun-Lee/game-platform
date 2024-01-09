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
      :plugins="[parallax]"
    >
      <!-- https://codepen.io/egjs/pen/vqYjrr -->
      <v-card
        v-for="(item, index) in imageList"
        :key="`card-${index}`"
        class="panel mr-5 rounded-xl"
        elevation="5"
        width="300"
        height="500"
        :ripple="true"
      >
        <v-img
          :src="item.href"
          transition="fade-transition"
          class="align-end"
          cover
          width="100%"
          height="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-card-title v-text="item.title" class="white--text"></v-card-title>
        </v-img>
      </v-card>
    </flicking>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Flicking } from '@egjs/vue-flicking'
import { Parallax } from '@egjs/flicking-plugins'

const parallax = new Parallax('.v-image__image', 1)

export default Vue.extend({
  name: 'ParallaxList',
  components: {
    Flicking: Flicking,
  },
  data: () => ({
    parallax,
    imageList: [
      {
        title: '벽돌깨기',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/21.jpg',
      },
      {
        title: '타워디펜스',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/22.jpg',
      },
      {
        title: '오버워치',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/23.jpg',
      },
      {
        title: '로스트아크',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/24.jpg',
      },
      {
        title: '벽돌깨기',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/25.jpg',
      },
      {
        title: '타워디펜스',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/26.jpg',
      },
      {
        title: '오버워치',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/27.jpg',
      },
      {
        title: '로스트아크',
        href: 'https://naver.github.io/egjs-infinitegrid/assets/image/28.jpg',
      },
    ],
  }),
})
</script>
<style lang="scss">
.thumbnail-list {
  height: 600px;
  overflow: auto;
  padding: 10px;
}
.panel {
  background: #ccc;
}

.panel .v-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.v-image__placeholder {
  background: #ccc;
}

.panel .v-image .v-image__image {
  top: -100%;
  bottom: -100%;
  margin: auto;
  position: absolute;
  left: 50% !important;
  transform: translate(-50%);
  width: 200%;
}
</style>
