var pdf = require("html-pdf")

class PDFWriter {

    static WritePDF(filename, html) {
        try{
            pdf.create(html, {}).toFile(filename, () => {})
        }catch(err){
            console.log("Erro ao criar PDF - verifique FILENAME")
            console.log(err)
        }
    }
}
module.exports = PDFWriter