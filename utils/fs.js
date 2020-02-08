const fs = require('fs');
const { promisify } = require('util');

//Promisifying fs.readFile for use in async/await functions
const promiseReadFile = promisify(fs.readFile);

/*
    Takes as parameter string which contains path to file

    Returns json object from given file
 */
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