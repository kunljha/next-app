import headerStyles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Dev</span> Update
			</h1>
			<p className={headerStyles.description}>
				Get all the latest updates for the news related to Web Development
			</p>
		</div>
	)
}

export default Header
