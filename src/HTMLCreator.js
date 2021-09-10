require("dotenv/config")
var Writer = require("./components/Writer")
var App = require("./components/App")

async function CreateHtml(filename, filepath, template){
    var data = await App.main(filepath,template)
    
    var writer = new Writer()
    
    await writer.Write(filename+".html", data)
}

filename=process.env.RESULT_FILENAME
filepath=process.env.CSV_FILEPATH
template=process.env.TEMPLATE

CreateHtml(filename,filepath, template)