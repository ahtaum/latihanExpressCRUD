const cekData = function(data) {
    this.data = data
    this.errors = []
}

cekData.prototype.validasiUserInput = function() {
    if (this.data == "") {
        this.errors.push("Masukin nama provinsinya GOBLOG!!!...")
    }
}

module.exports = cekData