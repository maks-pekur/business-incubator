import cn from 'classnames'
import Link from 'next/link'
import { Image } from 'react-datocms'

export const CoverImage = ({ title, responsiveImage, slug }) => {
	const image = (
		<Image
			data={{
				...responsiveImage,
				alt: `Cover Image for ${title}`,
			}}
			className={cn('shadow-small pointer-events-none', {
				'hover:shadow-md transition-all duration-200': slug,
			})}
		/>
	)
	return (
		<div className="sm:mx-0">
			{slug ? <Link href={`/posts/${slug}`}>{image}</Link> : image}
		</div>
	)
}
