import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../feature/post/postSlice'
import userReducer from '../feature/user/userSlice'

export const store = configureStore({
	reducer: {
		post: postReducer,
		user: userReducer,
	},
})
