class Processor{

// abstract content to two-dimmensional array

static Process(data){
    var rows = data.split("\r\n")
    var cells = []

    rows.forEach(row =>{
        var cols = row.split(",")
        cells.push(cols)
    })
      
    return cells
}
}

module.exports = Processor