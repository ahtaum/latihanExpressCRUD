const mongoose = require(`mongoose`)

const dataSkema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    usia: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error(`Error Mhamank`)
        }
    },
    jurusan: {
        type: String
    }
})

const bio = mongoose.model("posts", dataSkema) // nama tabel posts
module.exports = bio