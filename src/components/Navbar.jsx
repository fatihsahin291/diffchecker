import "../styles/Navbar.css";

function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar-btns">
				<li className="nav-btn-home">
					<a href="/">Diff Checker</a>
				</li>
				<li>
					<div className="nav-btns-account">
						<a
							href="/sign-in"
							className="nav-btn-sign-in"
						>
							Sign In
						</a>
						<a
							href="/create-account"
							className="nav-btn-create-account"
						>
							Create Account
						</a>
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
