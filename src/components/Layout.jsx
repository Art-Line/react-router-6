import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

// const setActive = ({isActive}) => isActive ? 'active-class' : '';

function Layout() {
	return (
		<>
			<header className="header">
				<div className="container">
					{/* <ul className="main-menu">
						<li><NavLink className={setActive} to="/">Home</NavLink></li>
						<li><NavLink className={setActive} to="/posts">Posts</NavLink></li>
						<li><NavLink className={setActive} to="/contact">Contact</NavLink></li>
					</ul> */}
					<ul className="main-menu">
						<li><CustomLink to="/">Home</CustomLink></li>
						<li><CustomLink to="/posts">Posts</CustomLink></li>
						<li><CustomLink to="/contact">Contact</CustomLink></li>
					</ul>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<Outlet />
				</div>
			</main>
			<footer className="footer">
				<div className="container"></div>
			</footer>
		</>
	)
}

export default Layout;
