const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const userPrompt = async () => {
	const response = await inquirer.prompt([
		{
			type: "input",
			message: "What is the Title?",
			name: "Title",
		},
		{
			type: "input",
			message: "What is the description",
			name: "Description",
		},
		{
			type: "input",
			message: "What content?",
			name: "Content",
		},
		{
			type: "input",
			message: "How to install?",
			name: "Installation",
		},
		{
			type: "input",
			message: "What are you going to use this for?",
			name: "Usage",
		},
		{
			type: "input",
			message: "What type of License",
			name: "License",
		},
		{
			type: "input",
			message: "who contributed?",
			name: "Contribute",
		},
		{
			type: "input",
			message: "Did you test?",
			name: "Test",
		},
		{
			type: "input",
			message: "Do you have any ?",
			name: "Question",
		},
	]);
	/** Title
	 * Description
	 * Table of Contents
	 * Installation
	 * Usage
	 * License
	 * Contributing
	 * Tests
	 * Questions*/

	const queryUrl = `https://api.github.com/users/${response.Github}/repos?per_page=100`;
	await writeFileAsync(
        "./Readme.md",
		`
# ${response.Title}
> ${response.Description}
### Table of content
> ${response.Content}
## Installation
\`\` ${response.Installation}
### Usage for
** ${response.Usage}
${response.License}
${response.Contribute}
${response.Test}
${response.Question}
`,

    );
};
try {
	userPrompt().catch((error) => {
		console.log("Invalid input", error);
	});
} catch (error) {
	console.log("Invalid input", error);
}
