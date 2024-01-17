<template>
  <v-container
    class="d-flex flex-column align-center justify-center white--text"
    :style="{ height: '100%' }"
  >
    <v-row align-content="end">
      <div class="mb-10" align="center">
        <h1>{{ $t('services.unsubscribe.title') }}</h1>
        <p>{{ $t('services.unsubscribe.description') }}</p>
      </div>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          class="light-blue darken-4 rounded-xl confirm-btn"
          @click="onClickConfirmHandler"
          width="500px"
          height="80px"
          :ripple="true"
        >
          {{ $t('services.unsubscribe.btn_confirm') }}
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="light-blue darken-4 rounded-xl confirm-btn"
          @click="onClickCancelHandler"
          width="500px"
          height="80px"
          :ripple="true"
        >
          {{ $t('services.unsubscribe.btn_cancel') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ServiceUnsubscribeView',
  methods: {
    onClickConfirmHandler() {
      this.$router.back()
    },
    onClickCancelHandler() {
      // TODO: 해지 로직 추가
      console.log('해지 로직 추가 후 앱 종료 및 HKMC 홈 화면 이동')
    },
  },
})
</script>
<style lang="scss" scoped>
.confirm-btn {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
