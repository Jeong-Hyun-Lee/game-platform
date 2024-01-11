import MockAdapter from 'axios-mock-adapter'
import { AxiosInstance } from 'axios'
import { gameList } from './gameData'
import { termsData } from './termsData'

const mockingList = [
  {
    url: '/getGameList',
    data: gameList,
  },
  {
    url: '/getTerms',
    data: termsData,
  },
]

export default (axiosInstance: AxiosInstance): void => {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 })

  mockingList.map(({ url, data }) => {
    mock.onAny(process.env.VUE_APP_BASE_API + url).reply(200, data)
  })
}
