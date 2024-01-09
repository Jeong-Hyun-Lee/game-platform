import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import AxiosMockAdapter from './mock'
// interface APIResponse<T> {
//   statusCode: number // 상태코드 (보인 서버상태코드)
//   errorCode: number // 에러코드 (본인 서버에러코드)
//   message: string // 메시지
//   result: T // 데이터 내용
//   timestamp: Date // 시간
// }

// axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// or
// 응답 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // Access Token 추가
    // const token = '{TOKEN}'
    // const auth = token ? `Bearer ${token}` : ''
    // config.headers.common['Authorization'] = auth
    return config
  },
  (error) => Promise.reject(error),
)
// 응답 인터셉터
axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError | Error) => {
    if (axios.isAxiosError(error)) {
      // axios 에러
      const { message } = error
      // const { method, url } = error.config as AxiosRequestConfig
      const { status, statusText } = error.response as AxiosResponse
      console.error(message)

      switch (status) {
        case 401:
          break
        case 403:
          break
        case 404:
          break
        case 500:
          break
        default:
          console.log('unkouwn error')
          break
      }
    }

    return Promise.reject(error)
  },
)

export const getData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance.get<AxiosResponse<T>>(url, config)
    return response.data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

export const postData = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance.post<AxiosResponse<T>>(
      url,
      data,
      config,
    )
    return response.data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

export const putData = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance.put<AxiosResponse<T>>(
      url,
      data,
      config,
    )
    return response.data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

export const deleteData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance.delete<AxiosResponse<T>>(url, config)
    return response.data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

AxiosMockAdapter(axiosInstance)
