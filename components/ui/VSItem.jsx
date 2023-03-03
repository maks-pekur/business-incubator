import { AnimatePresence, motion } from 'framer-motion'

export const VSItem = ({ variant, text, width }) => {
	return (
		<AnimatePresence>
			{variant === 'left' ? (
				<motion.div
					initial={{ x: '-100%' }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					className={`bg-[var(--light-gray)] rounded-r-full flex items-center justify-end h-14`}
					style={{ width: width }}
				>
					<div className="mx-3 sm:mx-6 whitespace-nowrap">{text}</div>
					<div className={`bg-[var(--green)] rounded-full h-14 w-14`}></div>
				</motion.div>
			) : (
				<motion.div
					initial={{ x: '100%' }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					className={`bg-white rounded-l-full w-full flex-row-reverse flex items-center justify-end h-14`}
				>
					<div className="mx-3 sm:mx-6 whitespace-nowrap">{text}</div>
					<div className={`bg-[var(--green)] rounded-full h-14 w-14`}></div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
