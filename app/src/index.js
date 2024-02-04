import fs from 'fs'
import { error } from 'console';
import { deflate } from 'zlib';

function treatsError(error){
    throw new Error((error.code, 'not file in directory')); // will be launched in the terminal

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
        return extractLinks(text);
    } catch (error){
        treatsError(error)
    }
}

export default takeFile;

