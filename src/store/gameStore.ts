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

import { IGame } from '@/interfaces'
import { Module } from 'vuex'
import { RootState } from './index'

export interface IGameStore {
  list: IGame[]
  selectGameUrl: string
}

export const gameStore: Module<IGameStore, RootState> = {
  namespaced: true,
  state: () => ({
    list: [],
    selectGameUrl: '',
  }),
  mutations: {
    setList(state, list) {
      state.list = list
    },
    setSelectUrl(state, url) {
      state.selectGameUrl = url
    },
    resetUrl(state) {
      console.log('reset url')
      state.selectGameUrl = ''
    },
  },
  getters: {
    getList(state, getters, rootState) {
      return state.list
    },
    getSelectUrl(state, getters, rootState) {
      return state.selectGameUrl
    },
  },
  actions: {
    // getList({ state, commit, rootState }) {},
  },
}
