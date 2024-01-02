/**
 * @name diffCheckText2
 * @param {string} str1
 * @param {string} str2
 * @returns {array} The array of objects containing the difference between two strings
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
