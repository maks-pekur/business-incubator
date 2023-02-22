import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		const { lanaguage } = this.props.__NEXT_DATA__.query
		return (
			<Html lang={lanaguage}>
				<Head>
					<meta
						name="google-site-verification"
						content="SB16TdykZEn6_pIqcqEj-m73nn2K-7anuDpSTDORYlA"
					/>
				</Head>
				<body className="overflow-x-hidden">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
