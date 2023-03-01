const styles = {
	h1: 'text-[48px] lg:text-[72px]',
	h2: 'text-[32px] lg:text-[56px]',
	h3: 'text-[24px] lg:text-[42px]',
	h4: 'text-[18px] lg:text-[28px]',
}

export const Heading = ({ children, tag, classNames = '' }) => {
	const Tag = tag || 'h1'
	return <Tag className={`${styles[tag]} ${classNames}`}>{children}</Tag>
}
