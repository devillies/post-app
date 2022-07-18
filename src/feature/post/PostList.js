import { useSelector } from 'react-redux'

import { selectAllPost } from './postSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostList = () => {
	const posts = useSelector(selectAllPost)
	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date))

	const renderedPosts = orderedPosts.map((post) => (
		<article>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
			<p className='postCredit'>
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
		</article>
	))

	return (
		<section>
			<h2>Post</h2>
			{renderedPosts}
		</section>
	)
}

export default PostList
