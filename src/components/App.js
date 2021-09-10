const Processor = require("./Processor")
var Reader = require("./ReaderCSV")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")

class App{
    
    static async main(filepath, template) {
        var reader = new Reader()
        
        var data = await reader.Read(filepath)
    
        // console.log(data) // - test (nº1) to catch file content
    
        var processedData = Processor.Process(data)
    
        // console.log(processedData) // - test (nº2) to abstract content into two-dimmensional array
    
        var table = new Table(processedData)
    
        // console.log(table.header) // - test (nº3) to abstract array on table schema
    
        console.log(`A tabela tem ${table.ColumnCount} colunas de dados`)    
        console.log(`A tabela tem ${table.RowCount} linhas de informação`)
        // - test (nº4) to count rows or columms
    
        var html = await HtmlParser.Parse(table, template)
    
        // console.log(html) // - test (nº5) to render a html table
    
        return html
    }

}
module.exports = App