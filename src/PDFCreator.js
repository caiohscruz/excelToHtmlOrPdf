var PDFWriter = require("./components/PDFWriter")

var App = require("./components/App")

async function CreatePdf(filename, filepath, template){
    var data = await App.main(filepath,template)
        
    await PDFWriter.WritePDF(filename + ".PDF", data)
}

filename="teste"
filepath="../public/users.csv"
template="../public/table.ejs"

CreatePdf(filename,filepath, template)