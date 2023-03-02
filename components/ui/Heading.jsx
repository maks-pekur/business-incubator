const styles = {
	h1: 'text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl',
	h2: 'text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl',
	h3: 'text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl',
	h4: 'text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl',
}

export const Heading = ({ children, tag, classNames = '' }) => {
	const Tag = tag || 'h1'
	return <Tag className={`${styles[tag]} ${classNames}`}>{children}</Tag>
}
