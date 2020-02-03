const fs = require('fs');
//const { promisify } = require('util');

const readFile = fs.promises.readFile;

const getFromFileJSON = async (file) => {
    try{
        const data = await readFile(file, "utf8");
        return JSON.parse(data) || null;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getFromFileJSON
};