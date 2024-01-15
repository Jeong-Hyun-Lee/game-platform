<template>
  <iframe v-if="!!getUrl" :src="getUrl" class="game-frame"> </iframe>
  <!-- <div class="white--text">iframe 처리 예정 {{ getUrl }}</div> -->
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'GameView',
  data() {
    return {}
  },
  mounted() {
    console.log('getUrl', this.getUrl)
  },
  computed: {
    ...mapGetters({
      getUrl: 'gameStore/getSelectUrl',
    }),
  },
  methods: {
    ...mapMutations({
      resetUrl: 'gameStore/resetUrl',
    }),
  },
  created() {
    // TODO: 게임 시작 로그 전달 처리
    console.log('게임 시작 로그 전달')
  },
  beforeDestroy() {
    // TODO: 게임 종료 로그 전달 처리
    console.log('게임 종료 로그 전달')
    this.resetUrl()
  },
})
</script>
<style lang="scss" scoped>
.game-frame {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
