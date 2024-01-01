/**
 * @name LevenshteinDistance
 * @param {*} str1
 * @param {*} str2
 * @returns {number} The number of changes required to convert str1 to str2
 * @description This function is used to check the difference between two strings
 */
export default function diffCheckTest(
	str1 = "",
	str2 = ""
) {
	const track = Array(str2.length + 1)
		.fill(null)
		.map(() => Array(str1.length + 1).fill(null));
	for (let i = 0; i <= str1.length; i += 1) {
		track[0][i] = i;
	}
	for (let j = 0; j <= str2.length; j += 1) {
		track[j][0] = j;
	}
	for (let j = 1; j <= str2.length; j += 1) {
		for (let i = 1; i <= str1.length; i += 1) {
			const indicator =
				str1[i - 1] === str2[j - 1] ? 0 : 1;
			track[j][i] = Math.min(
				track[j][i - 1] + 1, // deletion
				track[j - 1][i] + 1, // insertion
				track[j - 1][i - 1] + indicator // substitution
			);
		}
	}
	return track[str2.length][str1.length];
}

console.log(diffCheckTest("hello", "helle"));

/**
 * @name diffCheckText2
 * @input1 str1
 * @input2 str2
 * @output1  {string, status(same, different, added)}[] for str1
 * @output2  {string, status(same, different, added)}[] for str2
 * @description This function is used to check the difference between two strings
 */

export function diffCheckText2(str1, str2) {
	if (str1.length === 0 && str2.length === 0) {
		return [
			[
				{
					text: "inputs are empty",
					status: "deleted",
				},
			],
			[
				{
					text: "inputs are empty",
					status: "deleted",
				},
			],
		];
	}
	const str1Array = str1.split(" ");
	const str2Array = str2.split(" ");
	const str1Length = str1Array.length;
	const str2Length = str2Array.length;
	const resultstr1 = [];
	const resultstr2 = [];

	let i = 0;
	let j = 0;
	while (i < str1Length && j < str2Length) {
		if (str1Array[i] === str2Array[j]) {
			resultstr1.push({
				text: str1Array[i],
				status: "same",
			});
			resultstr2.push({
				text: str2Array[j],
				status: "same",
			});
			i += 1;
			j += 1;
		} else if (str1Array[i] < str2Array[j]) {
			resultstr1.push({
				text: str1Array[i],
				status: "deleted",
			});
			i += 1;
		} else {
			resultstr2.push({
				text: str2Array[j],
				status: "added",
			});
			j += 1;
		}

		if (i === str1Length) {
			while (j < str2Length) {
				resultstr2.push({
					text: str2Array[j],
					status: "added",
				});
				j += 1;
			}
		}

		if (j === str2Length) {
			while (i < str1Length) {
				resultstr1.push({
					text: str1Array[i],
					status: "deleted",
				});
				i += 1;
			}
		}
	}

	return [resultstr1, resultstr2];
}

console.log(
	diffCheckText2("hello world", "hello worlg")
);

function diffCheckText3(str1, str2) {
	if (str1.length === 0 && str2.length === 0) {
		return [
			[
				{
					text: "inputs are empty",
					status: "deleted",
				},
			],
			[
				{
					text: "inputs are empty",
					status: "deleted",
				},
			],
		];
	}

	const str1Array = str1.split(" ");
	const str2Array = str2.split(" ");
	const str1Length = str1Array.length;
	const str2Length = str2Array.length;
	const resultstr1 = [];
	const resultstr2 = [];

	let i = 0;
	let j = 0;

	for (i = 0; i < str1Length; i++) {
		for (j = 0; j < str2Length; j++) {
			for (
				let k = 0;
				k < str1Array[i].length;
				k++
			) {
				if (str1Array[i][k] === str2Array[j][k]) {
					resultstr1.push({
						text: str1Array[i][k],
						status: "same",
					});
					resultstr2.push({
						text: str2Array[j][k],
						status: "same",
					});
				} else {
					resultstr1.push({
						text: str1Array[i][k],
						status: "deleted",
					});
					resultstr2.push({
						text: str2Array[j][k],
						status: "added",
					});
				}
			}
		}
	}

	return [resultstr1, resultstr2];
}

console.log(
	diffCheckText3("hello world", "hello worlg")
);
