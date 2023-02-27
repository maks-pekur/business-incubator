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
			className={cn('shadow-small', {
				'hover:shadow-medium transition-shadow duration-200': slug,
			})}
		/>
	)
	return (
		<div className="-mx-5 sm:mx-0">
			{slug ? <Link href={`/posts/${slug}`}>{image}</Link> : image}
		</div>
	)
}
