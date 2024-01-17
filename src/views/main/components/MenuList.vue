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
        @click="onClickHandler(item)"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'

interface Menu {
  name: string
  path: string
}

export default Vue.extend({
  name: 'MenuList',
  data() {
    return {
      menus: [
        {
          name: this.$t('main.service_info'),
          path: '/info',
        },
        // {
        //   name: this.$t('main.service_terms'),
        //   path: '/terms',
        // },
        // {
        //   name: this.$t('main.personal_terms'),
        //   path: '/personalTerms',
        // },
        // {
        //   name: this.$t('main.announcement'),
        //   path: '/',
        // },
      ],
    }
  },
  methods: {
    onClickHandler(menu: Menu) {
      console.log('Click menu')
      this.$router.push(menu.path)
    },
  },
})
</script>
