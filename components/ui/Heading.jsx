const styles = {
	h1: 'text-[26px] lg:text-[40px]',
	h2: 'text-[24px] lg:text-[36px]',
	h3: 'text-[18px] lg:text-[30px]',
	h4: 'text-[10px] lg:text-[20px]',
}

export const Heading = ({ children, tag, classNames = '' }) => {
	const Tag = tag || 'h1'
	return <Tag className={`${styles[tag]} ${classNames}`}>{children}</Tag>
}
