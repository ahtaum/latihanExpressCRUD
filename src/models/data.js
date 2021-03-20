const mongoose = require(`mongoose`)
const dataSkema = new mongoose.Schema({
    // _id: {
    //     type: Object
    // },
    nama: {
        type: String
        // required: [true, 'kolom nama belum diisi']
    },
    nim: {
        type: Number,
        default: 0,
        // required: [true, 'kolom nim belum diisi'],
        // minlength:[9,'Minimun code length 5 characters'],
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