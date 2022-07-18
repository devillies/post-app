import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postSlice'
import { selectAllUser } from '../user/userSlice'

const AddPostForm = () => {
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')

	const user = useSelector(selectAllUser)

	const handleTitle = (e) => setTitle(e.target.value)
	const handleContent = (e) => setContent(e.target.value)
	const handleAuthor = (e) => setUserId(e.target.value)

	const savePost = () => {
		if (title && content) {
			dispatch(postAdded(title, content, userId))
			setTitle('')
			setContent('')
			setUserId('')
		}
		return
	}

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

	const userOptions = user.map((usr) => (
		<option key={usr.key} value={usr.id}>
			{usr.name}
		</option>
	))

	return (
		<section>
			<h2>Add a New Post</h2>
			<form>
				<label htmlFor='postTitle'>Post Title</label>
				<input
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={handleTitle}
				/>
				<label htmlFor='postAuthor'>Author</label>
				<select id='postAuthor' value={userId} onChange={handleAuthor}>
					<option value=''></option>
					{userOptions}
				</select>
				<label htmlFor='postContent'>Post Content</label>
				<textarea
					id='postContent'
					name='postContent'
					value={content}
					onChange={handleContent}
				/>
				<button type='button' onClick={savePost} disabled={!canSave}>
					Save Post
				</button>
			</form>
		</section>
	)
}

export default AddPostForm
