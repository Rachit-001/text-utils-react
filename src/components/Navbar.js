import React from "react";
// import { Link, NavLink } from "react-router-dom";
import "./style.css";
export default function Navbar(props) {
	return (
		<>
			<nav
				className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
			>
				<a className="navbar-brand" href="#">
					Text Utils
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link" to="/about">
								About
							</a>
						</li> */}
					</ul>
					<form
						className="form-inline my-2 my-lg-0 mx-2"
						style={{ cursor: "pointer" }}
					>
						<div
							className="custom-control custom-switch"
							style={{ cursor: "pointer" }}
						>
							<input
								type="checkbox"
								className="custom-control-input"
								id="customSwitchDarkMode"
								onChange={(e) => {
									props.toggleMode(e.target.checked);
								}}
								style={{ cursor: "pointer" }}
							/>
							<label
								className={`custom-control-label text-${
									props.mode === "light" ? "dark" : "light"
								}`}
								htmlFor="customSwitchDarkMode"
								style={{ cursor: "pointer" }}
							>
								Dark Mode
							</label>
						</div>
						{/* <div className="custom-control custom-switch">
							<input
								type="checkbox"
								class="custom-control-input"
								id="customSwitch2"
							/>
							<label className="custom-control-label" htmlFor="customSwitch2">
								Toggle this switch element
							</label>
						</div> */}
					</form>
				</div>
			</nav>
		</>
	);
}
