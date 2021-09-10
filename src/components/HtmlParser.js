var ejs = require("ejs")

class HtmlParser {
    static async Parse(table, template) {
        return await ejs.renderFile(template, {
            header: table.header,
            rows: table.rows
        })
    }
}

module.exports = HtmlParser