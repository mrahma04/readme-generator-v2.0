// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === '') {
    return ``
  }
  if (license === 'MIT License') {
    return `![MIT License](https://img.shields.io/badge/license-MIT-green)`
  }
  if (license === 'GPL') {
    return `![GNU GPLv3](https://img.shields.io/badge/license-GPL-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === '') {
    return ``
  }
  if (license === 'MIT License') {
    return `[MIT](https://choosealicense.com/licenses/mit/)`
  }
  if (license === 'GPL') {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Copyright (c) ${license.name}. All rights reserved.
Licensed under the ${renderLicenseLink(license.licenseName)} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenseName)}

## ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data)}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
My [GitHub](https://github.com/${data.github})
For questions or comments, please email ${data.email}
`
}

module.exports = generateMarkdown;
