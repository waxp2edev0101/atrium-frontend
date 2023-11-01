import { apiPostRequest, apiGetRequest } from '../utils'

export const login = async (payload: {}) => {
  return await apiPostRequest(`${process.env.VITE_API_URL}/auth/login`, payload)
}

export const getUserByToken = async () => {
  return await apiGetRequest(`${process.env.VITE_API_URL}/auth/me`)
}

export const signup = async (payload: any) => {
  return await apiPostRequest(
    `${process.env.VITE_API_URL}/auth/signup`,
    payload
  )
}

export const getUserById = async (payload: string) => {
  return await apiGetRequest(`${process.env.VITE_API_URL}/user/${payload}`)
}
