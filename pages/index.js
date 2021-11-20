import Head from 'next/head'
import Articles from '../components/Articles'

const Home = ({ articles }) => {
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
			<Articles articles={articles} />
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}

export default Home
