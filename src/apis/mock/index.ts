import MockAdapter from 'axios-mock-adapter'
import { gameList } from './gameData'
import { AxiosInstance } from 'axios'

const mockingList = [
  {
    url: '/getGameList',
    data: gameList,
  },
]

export default (axiosInstance: AxiosInstance): void => {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 })

  mockingList.map(({ url, data }) => {
    mock.onAny(process.env.VUE_APP_BASE_API + url).reply(200, data)
  })
}
