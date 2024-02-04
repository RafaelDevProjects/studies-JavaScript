import fs from 'fs'
import chalk from 'chalk';
import { error } from 'console';

function treatsError(error){
    throw new Error(chalk.red(error.code, 'not file in directory')); // will be launched in the terminal

};
function extractLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const extraction = [...text.matchAll(regex)];
    const results = extraction.map(extraction => ({[extraction[1]] : extraction[2]}))
    return(results);
}


async function takeFile(filePath) {
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding) 
        console.log(extractLinks(text));
    } catch (error){
        treatsError(error)
    }
}

takeFile('../readme.md')

