// import Vue from 'vue'
// import Vuex from 'vuex'

// import { gameStore } from './gameStore'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: { gameStore },
// })

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { IGameStore, gameStore } from '@/store/gameStore'

Vue.use(Vuex)
export interface RootState {
  gameStore: IGameStore
}

export default new Vuex.Store({
  modules: { gameStore },
})
