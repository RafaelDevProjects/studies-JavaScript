import fs from 'fs'

function treatsError(error){
    throw new Error((error.code, 'not file in directory')); // will be launched in the terminal

};
function extractLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const extraction = [...text.matchAll(regex)];
    const results = extraction.map(extraction => ({[extraction[1]] : extraction[2]}))
    return results.length !== 0 ? results : 'have NOT links in file';
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

