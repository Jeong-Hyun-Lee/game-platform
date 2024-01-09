<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in menus"
        :key="i"
        @click="onClickHandler(item.name)"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuList',
  data() {
    return {
      menus: [
        {
          name: this.$i18n.t('main.service_info'),
          path: '',
        },
        {
          name: this.$i18n.t('main.service_terms'),
          path: '',
        },
        {
          name: this.$i18n.t('main.personal_terms'),
          path: '',
        },
        {
          name: this.$i18n.t('main.announcement'),
          path: '',
        },
      ],
    }
  },
  methods: {
    onClickHandler(name: string) {
      console.log('Click', name)
    },
  },
})
</script>
