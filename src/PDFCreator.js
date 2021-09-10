require("dotenv/config")
var PDFWriter = require("./components/PDFWriter")
var App = require("./components/App")

async function CreatePdf(filename, filepath, template){
    var data = await App.main(filepath,template)
        
    await PDFWriter.WritePDF(filename + ".PDF", data)
}

filename=process.env.RESULT_FILENAME
filepath=process.env.CSV_FILEPATH
template=process.env.TEMPLATE

CreatePdf(filename,filepath, template)