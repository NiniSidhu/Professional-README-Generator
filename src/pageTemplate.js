//License & License Text 
const makeLicenseBadge = licenseName => {
    //If no license is selected from the list
    if (!licenseName){ 
        return '';
    }
    //If the following are selected
    if (licenseName.includes('GNU')){
        licenseName = 'GNU_General_Public_v3.0';
    }
    if (licenseName.includes('MIT')){
        licenseName = 'MIT';
    }
    if (licenseName.includes('Mozilla')){
        licenseName = 'Mozilla_Public_2.0';
    }
    if (licenseName.includes('Unlicense')){
        licenseName = 'The_Unlicense';
    }
    //returns the image of the License
    return `
![license](https://img.shields.io/badge/License-${licenseName}-blue)`

}
// The text of the License
const generateLicense = licenseText => {
    if(!licenseText){
        return '';
    }
    return `# License
${licenseText}
    
    `;
};

//Badges
const generateBadges = badgesText => {
    if(!badgesText){
        return '';
    }
    return `# Badges
${badgesText}
    
    `;
};
//Features
const generateFeatures = featuresText => {
    if(!featuresText){
        return '';
    }
    return `# Features
${featuresText}
    
    `;
};
//Contribution 
const generateContribution = contributionText => {
    if(!contributionText){
        return '';
    }
    return `# Contribution
${contributionText}
    
    `;
};
//Tests
const generateTest = testText => {
    if(!testText){
        return '';
    }
    return `# Test
${testText}
    
    `;
};
//Table of Contents 
const generateTableOfContents = tableOfContents => {
    if (tableOfContents === false){
        return '';
    }
    return `# Table of Contents
    
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [Questions?](#Questions)`;
};

const tableOfContentsLicense = license => {
    if (!license){
        return '';
    }
    return `* [License](#license)`
}
const tableOfContentsBadges = badges => {
    if (!badges){
        return '';
    }
    return `* [Badges](#badges)`
}
const tableOfContentsFeatures = feature =>{
    if (!feature){
        return '';
    }
    return `* [Features](#feature)`
}
const tableOfContentsContribution = contribution =>{
    if (!contribution){
        return '';
    }
    return `* [Contribution](#contribution)`
}
const tableOfContentsTest = test =>{
    if (!test){
        return '';
    }
    return `* [Test](#test)`
}
module.exports = pageTemplate => {
    const{ projectTitle, description, credits, installationInstructions, usageInformation, github, email, ...notRequired} = pageTemplate;

    console.log(pageTemplate);

    return `# ${projectTitle}
        ${makeLicenseBadge(notRequired.license)}

${description}

${generateTableOfContents(notRequired.confirmTableOfContents)}
${tableOfContentsLicense(notRequired.license)}
${tableOfContentsBadges(notRequired.badges)}
${tableOfContentsFeatures(notRequired.feature)}
${tableOfContentsContribution(notRequired.contribution)}
${tableOfContentsTest(notRequired.test)}

# Installation
${installationInstructions}

# Usage
${usageInformation}

# Credits
${credits}

# Questions
[Reach Me](${email})
[GitHub](https://github.com/${github})

${generateLicense(notRequired.license)}
${generateBadges(notRequired.badges)}
${generateFeatures(notRequired.feature)}
${generateContribution(notRequired.contribution)}
${generateTest(notRequired.test)}
`;
}
