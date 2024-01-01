import { useState } from "react";
import { diffCheckText2 } from "../helpers/diffCheckText";
import "../styles/DiffCheckText.css";

function DiffCheckText() {
	const [diff, setDiff] = useState(null);

	function handleDiffCheck() {
		const str1 =
			document.getElementById("str1").value;
		const str2 =
			document.getElementById("str2").value;

		setDiff(diffCheckText2(str1, str2));

		console.log(diff);
	}

	function handleReset() {
		document.getElementById("str1").value = "";
		document.getElementById("str2").value = "";
		setDiff(null);
	}

	return (
		<div className="diffchecker-text">
			<h1>Diff Checker</h1>
			<p>
				Enter two strings to see the differences
				between them.
			</p>

			<div className="diffchecker-text-inputs">
				<textarea
					name="str1"
					id="str1"
					cols="30"
					rows="10"
					placeholder="Enter Original Text Here"
				></textarea>

				<textarea
					name="str2"
					id="str2"
					cols="30"
					rows="10"
					placeholder="Enter Modified Text Here"
				></textarea>
			</div>

			<div className="diffchecker-text-btns">
				<button
					className="btn diffchecker-text-btn"
					onClick={handleDiffCheck}
				>
					Check
				</button>
				<button
					className="btn diffchecker-text-btn"
					type="reset"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>

			<div className="diffchecker-results">
				{diff && (
					<div className="str1">
						{diff[0].map((item, index) => {
							return (
								<p
									key={index}
									className={`text-${item.status}`}
								>
									{item.text}
								</p>
							);
						})}
					</div>
				)}

				{diff && (
					<div className="str2">
						{diff[1].map((item, index) => {
							return (
								<p
									key={index}
									className={`text-${item.status}`}
								>
									{item.text}
								</p>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default DiffCheckText;
