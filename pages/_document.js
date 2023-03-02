import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		const { language } = this.props.__NEXT_DATA__.query
		return (
			<Html lang={language}>
				<Head></Head>
				<body className="bg-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
