import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
	{
		id: '1',
		title: 'learning redux toolkit',
		content: "i've heard good things",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
	},
	{
		id: '2',
		title: 'slices....',
		content: 'the more slice is mentioned, the more i want pizza ',
		date: sub(new Date(), { minutes: 5 }).toISOString(),
	},
]

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
					},
				}
			},
		},
	},
})

export const selectAllPost = (state) => state.post

export const { postAdded } = postSlice.actions

export default postSlice.reducer
