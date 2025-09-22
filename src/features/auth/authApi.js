import { api } from '../../app/api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = authApi
