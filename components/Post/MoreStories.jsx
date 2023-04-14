import { PostPreview } from './PostPreview'

export const MoreStories = ({ posts }) => {
	if (posts[0].localeVersion) {
		posts = posts.map(post => post.localeVersion).filter(post => post)
	}

	return (
		<div className="grid lg:grid-cols-2 gap-10 md:gap-28 mb-10 md:mb-32">
			{posts.map(post => {
				return (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				)
			})}
		</div>
	)
}
