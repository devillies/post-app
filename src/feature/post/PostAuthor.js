import { useSelector } from 'react-redux'
import { selectAllUser } from '../user/userSlice'

import React from 'react'

const PostAuthor = ({ userId }) => {
	const users = useSelector(selectAllUser)

	const author = users.find((user) => user.id === userId)

	return <span>{author ? author.name : 'Uknown Author'}</span>
}

export default PostAuthor
