<template>
  <v-container
    class="d-flex flex-column align-center justify-center white--text"
    :style="{ height: '100%' }"
  >
    <div class="mb-10" align="center">
      <h1>{{ $t('services.info.title') }}</h1>
      <p>{{ $t('services.info.description') }}</p>
      <p>{{ $t('services.info.version', { version }) }}</p>
      <p>{{ $t('services.info.update_date', { date }) }}</p>
      <p>{{ $t('services.info.affiliate', { company: getCompany }) }}</p>
    </div>
    <v-btn
      class="light-blue darken-4 rounded-xl confirm-btn"
      @click="onClickHandler"
      :align="'center'"
      justify="center"
      width="500px"
      height="80px"
      :ripple="true"
    >
      {{ $t('common.confirm') }}
    </v-btn>
  </v-container>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ServiceInfoView',
  data() {
    return {
      version: '1.0.1',
      date: '2024-01-11',
      companyList: ['Blizzard', 'smilegate', 'Ubisoft', 'Rockstar Games'],
    }
  },
  computed: {
    getCompany() {
      return this.companyList.join(', ')
    },
  },
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
  font-size: 1.5rem;
}
</style>
