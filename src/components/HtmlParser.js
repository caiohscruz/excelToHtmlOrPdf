var ejs = require("ejs")

class HtmlParser {
    static async Parse(table, template) {
        try{
            return await ejs.renderFile(template, {
                header: table.header,
                rows: table.rows
            })
        }catch(err){
            console.log("Erro ao usar TEMPLATE")
            console.log(err)
        }
    }
}

module.exports = HtmlParser