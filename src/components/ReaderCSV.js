const fs = require("fs")
const util = require("util")

// catch content of a csv file

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf-8")
        }catch(err){
            console.log("Erro ao usar carregar arquivo - verifique CSV_FILEPATH")
            console.log(err)
        }
    }
}
module.exports = Reader