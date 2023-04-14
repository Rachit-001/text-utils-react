import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Error from "./components/Error";
import { useState } from "react";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link,
// 	Outlet,
// } from "react-router-dom";
function App() {
	const [mode, setMode] = useState("light"); //dark mode is enabled or not
	// const [mode2, setMode2] = useState("light"); //dark mode is enabled or not
	const [alert, setAlert] = useState(null); //  alert state variable

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	const toggleMode = (checked) => {
		if (checked) {
			setMode("dark");
			document.body.style.backgroundColor = "#121043";
			showAlert("Dark mode has been enabled", "success");

			document.title = "Text Utils - Dark Mode";

			// to keep title change to below title every 2 seconds
			// setInterval(() => {
			// 	document.title = "Text Utils is amazing";
			// }, 2000);
			// setInterval(() => {
			// 	document.title = "This is TextUtils";
			// }, 1500);
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "success");

			document.title = "Text Utils - Light Mode";
		}
		// checked ? setMode("dark") : setMode("light");
	};
	// const toggleMode2 = (checked) => {
	// 	if (checked) {
	// 		setMode("dark2");
	// 		// background-color:	#251204
	// 		// navbar-color #7e5000
	// 		//	text-area-color: #705a35
	// 		document.body.style.backgroundColor = "#251204";
	// 		showAlert("Dark mode has been enabled", "success");
	// 	} else {
	// 		setMode("light2");
	// 		document.body.style.backgroundColor = "white";
	// 		showAlert("Light mode has been enabled", "success");
	// 	}
	// 	// checked ? setMode("dark") : setMode("light");
	// };
	return (
		<>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />

			<TextForm
				heading="Enter the Text to analyze below"
				mode={mode}
				showAlert={showAlert}
			/>

			{/* <TextForm />
			<TextForm heading={45} /> */}
		</>
	);
}

export default App;
