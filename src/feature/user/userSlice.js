import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: '0', name: 'Penn' },
	{ id: '1', name: 'David' },
	{ id: '2', name: 'Cyril' },
	{ id: '3', name: 'Teller' },
]

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const selectAllUser = (state) => state.user

export default userSlice.reducer
