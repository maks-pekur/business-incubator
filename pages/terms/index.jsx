import Head from 'next/head'
import { useState } from 'react'
import { Hero } from '../../components/Hero'

const index = () => {
	const [numPages, setNumPages] = useState(null)
	const [pageNumber, setPageNumber] = useState(1)

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages)
	}

	return (
		<>
			<Head></Head>
			<Hero />
			<section className="sticky bg-white rounded-3xl p-20"></section>
		</>
	)
}

export default index
