import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../../components/Hero'

const index = () => {
	return (
		<>
			<Head></Head>
			<Hero />
			<section className="sticky bg-white pb-10 rounded-3xl p-20">
				<Image src='/assets/images/terms.pdf' alt="" fill />
			</section>
		</>
	)
}

export default index
