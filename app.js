const Processor = require("./Processor")
var Reader = require("./Reader")
var Table = require("./Table")

var reader = new Reader()


async function main(){
    var data = await reader.Read("./users.csv")

    // console.log(data) // - test (nº1) to catch file content

    var processedData = Processor.Process(data)

    var users = new Table(processedData)

    // console.log(users.header) // - test (nº3) to abstract array on table schema

    console.log(users.RowCount)

}

main()