/* 
Author: Nayandeep Sidhu 
Date Created: June 28th, 2021
Project Description: This project uses node and npn to generate a professional README generator. The program will ask the user for a series of questions that will allow the user to generate a README. Some questions will be mandatory to respond to while others may be skipped. */ 

const inquirer = require('inquirer'); //To import inquirer onto our JS file
const fs = require('fs'); //To create file types -> will be used to create README.md file


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
            //Contribution Guidelines
            type: 'input',
            name: 'contibutionGuidelines',
            message: 'Please enter any Contribution Guidelines. *Required',
            validate: checkContributionGuidelines => {
                if (checkContributionGuidelines){
                    return true;
                }else{
                    console.log('Eneter Contribution Guidelines for the project. Enter N/A if none.');
                    return false; 
                }
            }
        },
        {
            //Test Instuctions
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter any Test Instructions. *Required', 
            validate: checkTestInstructions => {
                if (checkTestInstructions){
                    return true; 
                }else{
                    console.log('Enter Test Instructions for the project. Enter N/A if none.');
                    return false;
                }
            }
        },
        {
            //License 
            type: 'list',
            name: 'license',
            message: 'Please select from the list of licenses you would like to include. *Required',
            choices: ['GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
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

        }


    ])
};
