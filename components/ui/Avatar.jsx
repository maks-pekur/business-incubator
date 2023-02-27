import Image from 'next/image'

export const Avatar = ({ name, picture }) => {
	return (
		<div className="flex items-center">
			<Image
				src={picture.url}
				width={48}
				height={48}
				className="rounded-full mr-4"
				alt={name}
			/>
			<div className="text-md font-bold">{name}</div>
		</div>
	)
}
