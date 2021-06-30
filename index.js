/* 
Author: Nayandeep Sidhu 
Date Created: June 28th, 2021
Project Description: This project uses node and npn to generate a professional README generator. The program will ask the user for a series of questions that will allow the user to generate a README. Some questions will be mandatory to respond to while others may be skipped. */ 

const inquirer = require('inquirer'); //To import inquirer onto our JS file
const fs = require('fs'); //To create file types -> will be used to create README.md file
const pageTemplate = require('./src/pageTemplate'); //Fetching the function from pageTemplate.js

const prompUser = () => {
    return inquirer.prompt([
        {   //Project Title
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the title of the project. *Required',
            validate: checkTitleInput => {
                if (checkTitleInput){
                    return true;
                }else{
                    console.log('Enter the project title to proceed!');
                    return false;
                }
            }
        },
        {
            //Project Description
            type: 'input',
            name: 'description',
            message: 'Please enter the description of the project. *Required',
            validate: checkProjectDesciption => {
                if (checkProjectDesciption){
                    return true;
                }else{
                    console.log('Enter the description of the project to proceed!');
                    return false; 
                }
            }
        },
        {
            //Table to Contents
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to add a Table of Contents',
            default: true 
        },
        {
            //Credits
            type: 'input',
            name: 'credits',
            message: 'Please enter any Credits. *Required',
            validate: checkCredits => {
                if (checkCredits){
                    return true;
                }else{
                    console.log('Enter Contribution Guidelines for the project.');
                    return false; 
                }
            }
        },
        {
            //Installation Instructions
            type: 'input',
            name: 'installationInstructions',
            message: 'Please provide any installation instructions if any. *Required',
            validate: checkInstallationIntructions =>{
                if (checkInstallationIntructions){
                    return true; 
                }else{
                    console.log('Enter instructions for your project. Input N/A if none.');
                    return false; 
                }
            }
        },
        {
            //Usage Information
            type: 'input',
            name: 'usageInformation',
            message: 'Please enter any Usage Information. *Required',
            validate: checkUsageInformation =>{
                if (checkUsageInformation){
                    return true;
                }else{
                    console.log('Enter Usage information for the project. Enter N/A if none.');
                    return false; 
                }
            }
        },
        {
            //Confirmation to add License
            type: 'confirm',
            name: 'checkLicense',
            message: 'Do you want to add a License?',
            default: false
        },
        {
            //License 
            type: 'list',
            name: 'license',
            message: 'Please select from the list of licenses you would like to include.',
            choices: ['GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
            when: ({checkLicense}) => {
                if (checkLicense){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            //Confrimation to add Badges
            type: 'confirm',
            name: 'confrimBadge',
            message: 'Do you want add any Badges?',
            default: false
        },
        {
            //When confirmed, add Badges
            type: 'input',
            name: 'badges',
            message: 'Please enter the Badges you want to include!',
            when: ({confirmBadge}) => {
                if (confirmBadge){
                    return true; 
                }else{
                    return false; 
                }
            }
        },
        {
            //Confirmation to add Features
            type: 'confirm',
            name: 'confirmFeature',
            message: 'Do you want to add any Features?',
            default: false
        },
        {
            //When confirmed, add Features
            type: 'input',
            name: 'feature',
            message: 'Please enter the Features you want to include!',
            when: ({confirmFeature}) =>{
                if (confirmFeature){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            //Confirmation to add Contribution Info
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Do you want to add any Contrubution Information',
            default: false,
        },
        {
            //When confirmed, add Contribution Information
            type: 'input',
            name: 'contribution',
            message: 'Please enter the Contribution information you want to include!',
            when: ({confirmContributing}) =>{
                if (confirmContributing){
                    return true;
                }else{
                    return false; 
                }
            }
        },
        {
            //Confirmation to add Tests
            type: 'confirm',
            name: 'confirmTest',
            message: 'Do you want to add any Contrubution Information',
            default: false,
        },
        {
            //When confirmed, add Tests 
            type: 'input',
            name: 'test',
            message: 'Please enter the Test information you want to include!',
            when: ({confirmTest}) =>{
                if (confirmTest){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            //GitHub Information
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub user name. *Required',
            validate: checkGithub => {
                if (checkGithub){
                    return true;
                }else{
                    console.log('Enter your GitHub username to proceed!');
                    return false; 
                }
            }
        },
        {
            //Email Address
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. *Required',
            validate: checkEmail => {
                if (checkEmail){
                    return true; 
                }else{
                    console.log('Enter your email address to proceed!');
                    return false; 
                }
            }
        }
    ])
};

prompUser()
    .then(answers => {
        const userAnswers = pageTemplate(answers);

        fs.writeFile('./files/README.md', userAnswers, err =>{
            if(err) throw err;
            console.log('Your README file has been generatred. Please check Files folder to see the generated file!');
        });
    
    });
