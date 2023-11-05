import { createAsyncThunk } from '@reduxjs/toolkit'
import authApi from '../../shared/api/auth'

export const loginThunk = createAsyncThunk(
	'auth/login',
	async ({ login, password }: { login: string; password: string } ) => {
		const response = await authApi.login(login, password)
		return response
	}
)


export const checkAuthThunk = createAsyncThunk(
	'auth/checkAuth',
	async () => {
				
      if(!localStorage.getItem('accessToken')) {
         return false
      }

      const response = await authApi.check()
						return response.success
	}
)
