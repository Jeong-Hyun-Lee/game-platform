// export const gameStore = {
//   namespaced: true,
//   state: () => ({
//     gameList: [],
//   }),
//   mutations: {
//     setGameList(state, list) {
//       state.gameList = list
//     },
//   },
//   getters: {
//     getGameList(state, getters, rootState) {
//       return state.gameList
//     },
//   },
//   actions: {
//     // getList({ state, commit, rootState }) {},
//   },
// }

import { IGame } from '@/views/main/game-list'
import { Module } from 'vuex'
import { RootState } from './index'

export interface IGameStore {
  list: IGame[]
}

export const gameStore: Module<IGameStore, RootState> = {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    setList(state, list) {
      state.list = list
    },
  },
  getters: {
    getList(state, getters, rootState) {
      return state.list
    },
  },
  actions: {
    // getList({ state, commit, rootState }) {},
  },
}
