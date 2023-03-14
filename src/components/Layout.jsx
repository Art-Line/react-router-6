import { Outlet, Link } from 'react-router-dom';

function Layout() {
	return (
		<>
			<header className="header">
				<div className="container">
					<ul className="main-menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/posts">Posts</Link></li>
						<li><Link to="/contact">Contact</Link></li>
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
