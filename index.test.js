const {error} = require('./mocks/src/constants')
const File = require('./mocks/src/file')
const {rejects} = require('assert');


(async () => {
    const filePath = './mocks/mocks/emptyfile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
})()