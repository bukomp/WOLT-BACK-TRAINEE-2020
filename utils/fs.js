const fs = require('fs');
const { promisify } = require('util');


const promiseReadFile = promisify(fs.readFile);

const getFromFileJSON = async (file) => {
    try{
        const data = await promiseReadFile(file, "utf8");
        return JSON.parse(data) || null;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getFromFileJSON
};