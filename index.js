/* 
Author: Nayandeep Sidhu 
Date Created: June 28th, 2021
Project Description: This project uses node and npn to generate a professional README generator. The program will ask the user for a series of questions that will allow the user to generate a README. Some questions will be mandatory to respond to while others may be skipped. */ 


const inquirer = require('inquirer'); //To import inquirer onto our JS file
const fs = require('fs'); //To create file types -> will be used to create README.md file
const { DefaultSerializer } = require('v8');

cont prompUser = () => {
    return inquirer.prompt([
        { //Project Title
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the title of the project. *Required',
            validate: titleInput => {
            if (titleInput){
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
            validate: projectDesciption => {
                if (projectDesciption){
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
            name: 'tableOfContents',
            message: 'Would you like to add a Table of Contents',
            default: true 
        },
        {
            
        }


    ])
};
