// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return ` missing something :)`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
  return(
  `## license
  
  The license being used is: ${license}`

  )}

  return ''
  }

  // const TOC = `## Table of Contents` = () => {

  // if (data.installation !== '') { TOC += `
  // * [Installation](#installation)` };

  // if (data.usage !== '') { TOC += `
  // * [Usage](#usage)` };

  // if (data.contributing !== '') { TOC += `
  // * [Contributing](#contributing)` };

  // if (data.tests !== '') { TOC += `
  // * [Tests](#tests)` };
  // }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ${renderLicenseBadge(data.license)}
  ## Description
   ${data.description}
  ## Table of Contents
   ${data.contents}
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License
   ${data.license}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
   ${data.contributing}
  ## Tests
   ${data.tests}
  ## Questions?
  github.com/${data.username}
   ${data.questions}
`; 

}

module.exports = generateMarkdown;
