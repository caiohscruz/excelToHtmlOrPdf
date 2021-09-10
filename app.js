const Processor = require("./Processor")
var Reader = require("./Reader")

var reader = new Reader()


async function main(){
    var data = await reader.Read("./users.csv")

    // console.log(data) - test (nº1) to catch file content

    var processedData = Processor.Process(data)

}

main()