import Head from 'next/head'

const about = () => {
	return (
		<div>
			<Head>
				<meta
					name='description'
					content='learning next.js by building a simple app'
				/>
				<meta
					name='keywords'
					content='next, react, javascript, programming, web development'
				/>
				<title>About Next.js</title>
			</Head>
			<h2>Next.js is known as a Production framework for React apps.</h2>
		</div>
	)
}

export default about
