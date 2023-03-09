const styles = {
	h1: 'text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl',
	h2: 'text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl',
	h3: 'text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl',
	h4: 'text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl',
}

export const Heading = ({ children, tag, classNames = '' }) => {
	const Tag = tag || 'h1'
	return <Tag className={`${styles[tag]} ${classNames}`}>{children}</Tag>
}
