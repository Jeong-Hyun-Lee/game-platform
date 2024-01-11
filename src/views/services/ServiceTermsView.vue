<template>
  <v-container
    class="d-flex flex-column white--text"
    :style="{ height: '100%' }"
  >
    <div class="mb-10">
      <h1>{{ $t('services.terms.title') }}</h1>
    </div>
    <v-textarea
      label=""
      no-resize
      rows="18"
      :value="terms"
      color="#fff"
      readonly
      outlined="false"
      dark
      :loading="isLoading"
    ></v-textarea>
    <div class="d-flex flex-rows align-center justify-end">
      <p class="mb-0" :style="{ marginRight: '20px' }">
        {{ $t('services.terms.description') }}
      </p>

      <v-btn
        class="light-blue darken-4 rounded-lg confirm-btn"
        @click="onClickHandler"
        width="100px"
        height="50px"
        :ripple="true"
      >
        {{ $t('services.agree') }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { getData } from '@/apis/request'

export default Vue.extend({
  name: 'ServiceTermsView',
  async created() {
    try {
      this.isLoading = true
      this.terms = await getData('/getTerms')
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
  },
  data: () => ({
    isLoading: false,
    terms: '',
  }),
  methods: {
    onClickHandler() {
      this.$router.back()
    },
  },
})
</script>

<style lang="scss" scoped>
.confirm-btn {
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
