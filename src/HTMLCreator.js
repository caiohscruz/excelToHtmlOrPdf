var Writer = require("./components/Writer")

var App = require("./components/App")

async function CreateHtml(filename, filepath, template){
    var data = await App.main(filepath,template)
    
    var writer = new Writer()
    
    await writer.Write(filename+".html", data)
}

filename="teste"
filepath="./public/users.csv"
template="./public/table.ejs"

CreateHtml(filename,filepath, template)