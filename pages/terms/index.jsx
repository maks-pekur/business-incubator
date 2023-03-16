import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../../components/Hero'
import img1 from '../../public/assets/images/terms/terms_page-0001.jpg'
import img2 from '../../public/assets/images/terms/terms_page-0002.jpg'
import img3 from '../../public/assets/images/terms/terms_page-0003.jpg'
import img4 from '../../public/assets/images/terms/terms_page-0004.jpg'
import img5 from '../../public/assets/images/terms/terms_page-0005.jpg'
import img6 from '../../public/assets/images/terms/terms_page-0006.jpg'
import img7 from '../../public/assets/images/terms/terms_page-0007.jpg'
import img8 from '../../public/assets/images/terms/terms_page-0008.jpg'
import img9 from '../../public/assets/images/terms/terms_page-0009.jpg'
import img10 from '../../public/assets/images/terms/terms_page-0010.jpg'

const index = () => {
	return (
		<>
			<Head></Head>
			<Hero />
			<section className="bg-white rounded-3xl lg:p-20 p-4 sticky top-0">
				<Image
					src={img1}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img2}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img3}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img4}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img5}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img6}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img7}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img8}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img9}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
				<Image
					src={img10}
					alt="terms"
					width={1200}
					height={1000}
					className="-rotate-1 rounded-3xl"
				/>
			</section>
		</>
	)
}

export default index
