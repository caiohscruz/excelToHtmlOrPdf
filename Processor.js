class Processor{

static Process(data){
    var rows = data.split("\r\n")
    var cells = []

    rows.forEach(row =>{
        var cols = row.split(",")
        cells.push(cols)
    })
      
    // console.log(cells) // - test (nº2) to abstract content into two-dimmensional array

    return cells
}
}

module.exports = Processor