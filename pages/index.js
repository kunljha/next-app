import Head from 'next/head'

const Home = () => {
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
				<title>Dev Update</title>
			</Head>
			<h1>Hello from Next.js App</h1>
		</div>
	)
}

export default Home
