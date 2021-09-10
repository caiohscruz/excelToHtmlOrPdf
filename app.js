const Processor = require("./Processor")
var Reader = require("./Reader")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require ("./Writer")

var reader = new Reader()
var writer = new Writer()

async function main(){
    var data = await reader.Read("./users.csv")

    // console.log(data) // - test (nº1) to catch file content

    var processedData = Processor.Process(data)

    var users = new Table(processedData)

    // console.log(users.header) // - test (nº3) to abstract array on table schema

    // console.log(users.RowCount) // - test (nº4) to count rows or columms

    var html = await HtmlParser.Parse(users)

    // console.log(html) // - test (nº5) to render a html table

    writer.Write(Date.now()+".html", html) // create html file

}

main()