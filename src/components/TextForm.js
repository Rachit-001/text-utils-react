import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
// import { Outlet } from "react-router-dom"; //outlet  shared and nested routing
export default function TextForm(props) {
	// state variable using useState hoook
	// const [text, setText] = useState("Enter text here");
	const [text, setText] = useState("");
	const [bold, setBold] = useState(false);

	// function to convert text to uppercase
	const handleUpperCaseClick = () => {
		// console.log("Uppercase clicked");
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Text has been converted to UpperCase ", "success");
	};

	// function to convert text to lowercase
	const handleLowerCaseClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Text has been converted to LowerCase ", "success");
	};

	const myStyle = {
		fontWeight: "bold",
	};
	// function to find no. of sentences
	// const handleBoldClick = () => {
	// 	setBold(true);
	// 	let newText = text;
	// 	setText(newText);
	// };

	// function to clear text
	const handleClearClick = () => {
		setText("");
		setBold(false);
		props.showAlert("Text has been cleared ", "success");
	};
	// function to copy text
	const handleCopyClick = () => {
		let textCopy = document.getElementById("myTextBox");
		textCopy.select();
		navigator.clipboard.writeText(textCopy.value);
		props.showAlert("Text has been copied to Clipboard", "success");
	};

	// function to delete extra space
	const handleExtraSpaceClick = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Extra Space has been removed ", "success");
	};
	// function to delete extra space
	// const caps = (e) => {
	// 	return e.toLowerCase().charAt(0).toUpperCase() + e.toLowerCase().slice(1);
	// };
	// const handleCapitalizeClick = () => {
	// 	let newText = text.search(/[\w]/);
	// 	// newText.map((e) => {
	// 	// 	e = caps(e);
	// 	// });
	// 	setText(newText);

	// 	props.showAlert("Extra Space has been removed ", "success");
	// };

	// onchange function , function that changes text value onChange (as we type the text or edit it)
	const handleOnClick = (event) => {
		// console.log("Change clicked");
		setText(event.target.value);
	};

	return (
		<>
			<div className="container my-3">
				<div className="form-group">
					<h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
						{" "}
						{props.heading}
					</h1>
					{/* <label htmlFor="myTextBox">Enter Text Below :</label> */}
					<textarea
						className={`form-control 
				
						text-${props.mode === "light" ? "dark" : "light"}`}
						id="myTextBox"
						rows="10"
						value={text}
						onChange={handleOnClick}
						style={{
							backgroundColor: props.mode === "light" ? "white" : "#495057",
						}}
					/>
				</div>
				<button
					className="btn btn-primary mx-1 my-1"
					onClick={handleUpperCaseClick}
				>
					Convert to UpperCase
				</button>

				<button
					className="btn btn-primary mx-1 my-1"
					onClick={handleLowerCaseClick}
				>
					Convert to LowerCase
				</button>

				{/* <button className="btn btn-primary mx-1" onClick={handleBoldClick}>
					Convert to Bold
				</button> */}

				<button className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>
					Copy Text
				</button>
				<button
					className="btn btn-warning mx-1 my-1"
					onClick={handleExtraSpaceClick}
				>
					Remove Extra Space
				</button>

				<button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
					Clear Text
				</button>
				{/* <button className="btn btn-danger mx-1 my-1" onClick={handleCapitalizeClick}>
					Capitalize Text
				</button> */}
			</div>
			<div className="container my-3">
				<h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					Text Summary
				</h2>
				{/* <p> */}
				{/* {text.length} */}
				{/* {text.trim().length */}
				{/* ? text.split(" ").length */}
				{/* : text.trim().length}{" "} */}
				{/* words and {text.length} characters */}
				{/* </p> */}
				<p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					{text.trim().length
						? text
								.trim()
								.split(" ")
								.map((e) => e.trim()).length
						: text.trim().length}{" "}
					words and {text.length} characters and{" "}
					{text.split(".").length +
						text.split("?").length +
						text.split("!").length -
						3}{" "}
					sentences
				</p>
				<p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					{(text.trim().length ? text.split(" ").length : text.trim().length) *
						0.008}{" "}
					minutes to read
					{/* per word 0.008 min */}
				</p>

				<h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					Preview
				</h2>
				<p
					className={`text-${props.mode === "light" ? "dark" : "light"}`}
					style={bold ? myStyle : {}}
				>
					{text.length > 0
						? text
						: "Enter the text in above box to see its preview here"}
				</p>
			</div>

			{/* outlet */}
			{/* shared and nested routing */}
			{/* <Outlet /> */}
		</>
	);
}

TextForm.propTypes = {
	heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
	heading: "Enter the text",
};
