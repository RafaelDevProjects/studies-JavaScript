import fs from 'fs'

function treatsError(error){
    throw new Error((error.code, 'not file in directory')); // will be launched in the terminal

};

// async/await
async function takeFile(filePath) {
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding) 
        console.log(text)
    } catch (error){
        treatsError(error)
    }
}

takeFile('../Libraries/readme.md')