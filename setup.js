#!/usr/bin/env node

import inquirer from 'inquirer'
import {exec} from 'child_process'
import { error, log } from 'console';
import { stderr, stdout } from 'process';
import fs from 'fs'



// import configs
import {tailwindConfigJS, directivesForIndexCSS} from '../auto-init/configs.js';


// Variable for mutable
let currentDirName;

//Fuction 1 ---- Frontend Dir Name inquiry
const nameOfProject = async () => {

    const {dirname} = await inquirer.prompt([
        {
            type: 'input',
            name: 'dirname',
            message: 'what should be the name of frontend dir (frontend)?',
            default: 'frontend'

        },
    ])

    return dirname;

}



// Function 2 ---- To Change or Modify or Add custom code in different files 
const modifyConfig = (filePath, NewContent) => {


    fs.writeFileSync(filePath, NewContent, 'utf8', (err) => {

        if (err) {
            console.error(`Error in Writing in ${filePath}, - ${err}`)
            return;
        }


    });



    

}


// Function 3 ---- to create React app with Vite
const createReactAppWithVite = (currentDirName) => {
    return new Promise((resolve, reject) => {
        exec(`npm create vite@latest ${currentDirName} -- --template react`, (error, stdout, stderr) => {
            if (error) {
                return reject(`Failed to create Vite app: ${error.message}`);
            }
            console.log(stdout);
            resolve();
        });
    });
}




// Function 4 ---- to install Tailwind CSS
function installTailwind(currentDirName) {
    return new Promise((resolve, reject) => {
        // Run the commands separately in sequence
        exec(`cd ${currentDirName} && npm install tailwindcss postcss autoprefixer`, (error, stdout, stderr) => {
            if (error) {
                return reject(`Tailwind CSS installation failed: ${error.message}`);
            }
            console.log(stdout);

            // Initialize Tailwind CSS
            exec(`cd ${currentDirName} && npx tailwindcss init -p`, (initError, initStdout, initStderr) => {
                if (initError) {
                    return reject(`Tailwind CSS initialization failed: ${initError.message}`);
                }
                console.log(initStdout);
                resolve();
            });
        });
    });
}


// Function 5 ---- To add directives in index.css
const addDirectivesInIndexCSS = (filePath, newContent) => {

    // read existing index.css and save in data var
    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            console.error(`Error Reading File ${err}`);
            return;
        }

        // Prepend the new content to the existing content
        const updatedContent = newContent + data;

        // Write the updatedContent to the file
        fs.writeFileSync(filePath, updatedContent, 'utf8', (err) => {
            if (err){
                console.error(`Error writing directives ${err}`);
                return;
                
            }
            
        })

    })


}





// Ask Questions
export const setup = async () => {

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'frontend',
            message: 'Would you like to create a frontend project?',
            choices: ['Yes', 'No'],
        },

        {
            type: 'list',
            name: 'tailwind',
            message: 'Would you like to add Tailwind CSS?',
            choices: ['Yes', 'No'],
        },

        {
            type: 'list',
            name: 'firebase',
            message: 'Would you like to add Firebase?',
            choices: ['Yes', 'No'],
        },

        {
            type: 'list',
            name: 'github',
            message: 'Would you like to set up GitHub Actions for CI/CD?',
            choices: ['Yes', 'No'],
        },

    ])

    // handle Frontend Creation 
    if (answers.frontend === 'Yes') {

        currentDirName = await nameOfProject();

        // Step 1 
        console.log('\nCreating React app with Vite...\n');
        await createReactAppWithVite(currentDirName);
        console.log('React app created successfully!');
        
    }



    // Install Tailwind if selected
    if (answers.tailwind === 'Yes') {

        console.log('\nInstalling Tailwind CSS...\n');
        await installTailwind(currentDirName);
        console.log(`Tailwind Installed with its configures: ${stdout} \n`);

        // Modify tailwind.config.js
        const tailwindConfigPath = `${currentDirName}/tailwind.config.js`;
        modifyConfig(tailwindConfigPath, tailwindConfigJS);
        console.log('Tailwind Config Updated in tailwind.config.js');

        // Add directives in index.css
        const indexCSSPath =  `${currentDirName}/src/index.css`;
        addDirectivesInIndexCSS(indexCSSPath, directivesForIndexCSS);
        console.log(`Tailwind - Directives added in ${currentDirName}src/index.css`);
        

    }

}





setup();