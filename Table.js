class Table {

    constructor(arr) {
        this.header = arr[0]
        arr.shift() // remove firts element
        this.rows = arr
    }
}

module.exports = Table