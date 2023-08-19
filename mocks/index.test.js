const {error} = require('./src/constants')
const File = require('./src/file')
const {rejects, deepStrictEqual} = require('assert');


(async () => {
    {
        const filePath = './mocks/mocks/emptyfile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }

    {
        const filePath = './mocks/mocks/fourltems-valid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }

    {
        const filePath = './mocks/mocks/threeltems-valid.csv'
        const result = await File.csvToJson(filePath);
        const expected = [{
            "id": 123, "name": "João da Silva", "profession": "Javascript Instructor", "birthDay": 1998
        }, {
            "id": 321, "name": "Xuxa da Silva", "profession": "Javascript Specialist", "birthDay": 1943
        }, {
            "id": 231, "name": "Joaozinho", "profession": "Java Developer", "birthDay": 1993
        }]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }

})()