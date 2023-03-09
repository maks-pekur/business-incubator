import { useRouter } from 'next/router'
import { PostPreview } from './PostPreview'

export const MoreStories = ({ posts }) => {
	const { locale } = useRouter()
	if (posts[0].localeVersion) {
		posts = posts.map(post => post.localeVersion).filter(post => post)
	}
	return (
		<div className="grid md:grid-cols-2 gap-10 md:gap-28 mb-10 md:mb-32">
			{posts.map(post => {
				return (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						x
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				)
			})}
		</div>
	)
}
