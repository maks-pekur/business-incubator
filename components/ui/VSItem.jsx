import { AnimatePresence, motion } from 'framer-motion'

export const VSItem = ({ variant, text, width, el }) => {
	const Elem = el || motion.div
	return (
		<AnimatePresence>
			{variant === 'left' ? (
				<Elem
					initial={{ x: '-100%' }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					className={`bg-[var(--light-gray)] leading-[10px] md:leading-5 rounded-r-full flex items-center justify-end h-14`}
					style={{ width: width }}
				>
					<div className="mx-1 md:mx-3 sm:mx-6 whitespace-nowrap text-center">
						{text}
					</div>
					<div className={`bg-[var(--green)] rounded-full h-14 w-14`}></div>
				</Elem>
			) : (
				<Elem
					initial={{ x: '100%' }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					className={`bg-white leading-[10px] md:leading-5 rounded-l-full w-full flex-row-reverse flex items-center justify-end h-14`}
				>
					<div className="mx-1 sm:mx-6 md:whitespace-nowrap text-center">
						{text}
					</div>
					<div className={`bg-[var(--green)] rounded-full h-14 w-14`}></div>
				</Elem>
			)}
		</AnimatePresence>
	)
}
