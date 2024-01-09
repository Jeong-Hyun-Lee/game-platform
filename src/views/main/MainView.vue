<template>
  <fragment>
    <v-app-bar
      absolute
      color="white--text blue-grey darken-3"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      :style="{
        position: 'relative',
      }"
    >
      <v-toolbar-title :style="{ 'font-weight': 'bold' }">{{
        $t('main.header')
      }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <menu-list></menu-list>
    </v-app-bar>
    <v-container>
      <thumbnail-list :list="gameList"></thumbnail-list>
    </v-container>
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import ThumbnailList from '@/components/ThumbnailList.vue'
import MenuList from './components/MenuList.vue'

interface Game {
  id: number | string
  title: string
  url: string
  description?: string
  images?: Array<string>
}

export default Vue.extend({
  name: 'MainView',
  components: {
    ThumbnailList,
    MenuList,
  },
  created() {
    this.gameList = [
      {
        id: 1,
        title: 'P의 거짓',
        url: '',
        description: `대한민국의 게임 개발사 네오위즈 산하 스튜디오인 라운드8 스튜디오에서 개발한 3인칭 액션 RPG.
카를로 콜로디의 피노키오를 원작으로 한 다크 판타지 스타일의 소울라이크 형태를 띤 액션게임으로, 19세기 말 근대 유럽의 벨 에포크스러운 분위기를 풍기는 가상의 스팀펑크 + 디젤펑크풍의 대도시인 '크라트'에서 벌어지는 이야기를 다룬다.`,
        images: [
          'https://i.namu.wiki/i/ztgESjmkGlCY_RVtti-q0DZXYqA4O63vDl0RVqBVLsXz3pfx8y4I3kSOKiPYglFl8XKDDbJ7VtHs8Y4XK5OzEj-flfGzq2K6bnaO48xVGe2ZtmSDYaQvJMyWEOob1objPfCxE9KV1qQsHOlqOZNnCQ.webp',
        ],
      },
      {
        id: 2,
        title: '어쌔신 크리드: 오디세이',
        url: '',
        description: `유비소프트 퀘벡이 개발하고 유비소프트가 발매한 어쌔신 크리드 시리즈의 11번째 메인 시리즈 타이틀. 전작인 오리진에 이어 고대를 배경으로 하는 2번째 게임으로, 기원전 431년 고대 그리스의 펠로폰네소스 전쟁 시기를 배경으로 한다.`,
        images: [
          'https://i.namu.wiki/i/s97z4p89rc-ZEN0-uRbgATbov_Pa7KNcg51LFIpC9EVOjPHwN1Gv8l74z372dZ4xlabQaWQg_Or3_0-Z0XaOV8g6SoYKVMlwybaAp11wGxML6mH3VRN5lx1lHViQX2GCR55l0d-IWvlBwL31ByLmZQ.webp',
        ],
      },
      {
        id: 3,
        title: '오버워치 2',
        url: '',
        description: `미국의 블리자드 엔터테인먼트에서 제작한 팀 기반 멀티플레이 하이퍼 FPS 게임이다.`,
        images: [
          'https://i.namu.wiki/i/iDbSjeEtwIp0pBM7XtOlcKlbn1s330hxyYVwDE1wAixRcsTUTAQ6Vh46Btn9jy898I2WE9IWI0A_FjMaSLj40kQHGbE3MYdKvEL6pC_QBs7jJednYgZUa8tKiyyr7T2ZfmriHjSGDftQzpGFhzcYRg.webp',
        ],
      },
      {
        id: 4,
        title: '로스트아크',
        url: '',
        description: `트라이포드 스튜디오에서 개발하고 스마일게이트 RPG가 운영하는 쿼터뷰 액션 MMORPG.`,
        images: [
          'https://i.namu.wiki/i/qxP6oAimKaNXHC5oo7tYh_C3zBSytitRFynVZBTNTXarLl4CRXC_xawI27y42uXJOzocKYwtI5ceKxKLnPqXDSqcOPoNcvXyK-KHfxBKFULsBqi3BY57B8m5P78_U6-Z0uKPwkr9xdP0pPwiJxdHbg.webp',
        ],
      },
      {
        id: 5,
        title: '갓오브워',
        url: '',
        description: `플레이스테이션 스튜디오 산하의 SIE 산타모니카 스튜디오에서 개발한 갓 오브 워 시리즈의 8번째 작품이자 그리스 사가의 뒤를 잇는 북유럽 사가의 첫번째 작품.`,
        images: [
          'https://i.namu.wiki/i/-E6sW69N4D5lobbSDyfm1nlbV3AcOwUKkMEvaCxwUCp0YAHJDBhjBJH480K10fuv7ByHJwpjYtj_cFqLnTamgVo9jPj9K2cFRvf0RMy_Y3esgitl3Mjv1kRJTu0xEFD-w_6G3q9Ut9FTOcqTiXoXAg.webp',
        ],
      },
      {
        id: 6,
        title: '젤다의 전설 브레스 오브 더 와일드',
        url: '',
        description: `100년 전, 재앙 가논이 부활하여 하이랄 성을 덮쳤다. 각 종족을 대표하는 영걸들과 공주인 젤다, 용사인 링크가 가논을 저지하려 했으나 강력한 가논의 힘 앞에 링크를 제외한 모든 영걸이 전사하고 링크마저 큰 부상을 입고만다. 그 후 공주는 자신의 힘으로 가논을 하이랄성에 봉인한다. 그렇게 100년이 지난 어느 날, 링크는 기억을 잃은 채로 의문의 장소에서 눈을 떴다.`,
        images: [
          'https://i.namu.wiki/i/4vIgI97YuU1hGiaYHXUtrV8DTFGuGnFONWaAgpUX2TMdn2B4_hFOMTNaED1A7AsbX5yLVS0NYsUzcAMJ6wvS0nixnjKqwnOzHk8tEbd6vIQ0JOFymq0BsF0uzMswnI3Li1fD9CPwYTD_3cRFIyx-nQ.webp',
        ],
      },
      {
        id: 7,
        title: '철권 7',
        url: '',
        description: `대전액션게임인 철권 시리즈의 7번째 작품이자 철권 시리즈 20주년 기념 작품. 철권 태그 토너먼트 2 이후 4년만에 나온 신작으로, 철권 6으로부터 무려 8년만에 나온 넘버링 속편이다. 전편 이후 가장 오랜 기간의 공백기를 거쳐 나온 넘버링 시리즈이기도 했는데, 이 기록은 철권 8로 인해 다시 깨진다.`,
        images: [
          'https://i.namu.wiki/i/EnvgGGMCqLlHxIlSnHwZEBjBWGpErTBcIesu5Ie_l5YMy7YC_xC85K5Z5nNNngZsIlGug-juMzxfwRS-YJRGPIGtGn2zY38vn51yAf3CA2lP52HXYiu7nopX8huikPfrCFHTgTZ1jxUFDPLofJS3gg.webp',
        ],
      },
    ]
  },
  data() {
    return {
      gameList: [] as Array<Game>,
    }
  },
})
</script>
