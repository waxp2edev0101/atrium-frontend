import axios from 'axios'

export const apiGetRequest = async (url: string) => {
  try {
    const response = await axios.get(url)
    if (response.data.error === 'Unauthorized') {
      // store.dispatch(actions.logout());
    } else {
      return response
    }
  } catch (error: any) {
    console.log(error)
    if (error.response.status === 401) {
      // store.dispatch(actions.logout());
      return error.response
    } else {
      return error.response
    }
  }
}

export const apiPostRequest = async (url: string, data = {}) => {
  try {
    const response = await axios.post(url, data)
    return response
  } catch (error: any) {
    console.log(error)
    if (error.response.status === 401) {
      // store.dispatch(actions.logout());
      return error.response
    } else {
      return error.response
    }
  }
}

export const apiPutRequest = async (url: string, data = {}) => {
  try {
    const response = await axios.put(url, data)
    return response
  } catch (error: any) {
    console.log(error)
    if (error.response.status === 401) {
      // store.dispatch(actions.logout());
      return error.response
    } else {
      return error.response
    }
  }
}

export function setupAxios(axios, store) {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { accessToken },
      } = store.getState()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err) => Promise.reject(err)
  )
}

export const apiUrl = process.env.VITE_API_URL || 'http://localhost:2567'
