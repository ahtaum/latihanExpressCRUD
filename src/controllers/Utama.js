
const axios = require("axios")
const cekData = require("../penolong/cekData")
const bio = require("../models/data") // panggil model
const table = require("table")

exports.halamanUtama = async (permintaan,respon) => {
    
    let dataObj = await bio.find((err,hasil) => {
        if (err) return handleError(err)
        // hasil.forEach(function (m) {
        //     console.log(m);
        // })
        let wadah = []
        wadah.push(hasil)
        wadah.forEach(function (m) {
            console.log(m);
        })
    })

    // hasil = JSON.stringify(dataObj, null, 2)
    // penyucian = hasil.replace(/[^\w\s]/gi, '')

    // let saringData = dataObj.filter(dataHasil => dataHasil.jurusan == "Informatika")
    
    let data = {
        judul: `Daftar Corona Indonesia`,
        title: `Corona Terooosss`,
        // datanya: JSON.stringify(dataObj, null, 2)
        // datanya: penyucian
        datanya: dataObj
        // datanya : saringData
    }

    respon.render(`index`, data)

}

exports.simpenData = (permintaan,respon) => {

    let dataBio = {
        nama: permintaan.body.nama,
        usia: permintaan.body.usia,
        jurusan: permintaan.body.jurusan
    }
    
    let dataModel = new bio(dataBio)

    dataModel.save((err,data) => {
        if (err) { console.log(err); } else { 
            respon.redirect('/')
        }
    })
    
}

// exports.parseApi = (permintaan,respon) => {
//     const negara = permintaan.body.dataCorona
//     const url = `https://api.covid19api.com/dayone/country/${negara}/status/confirmed/live`
//     console.log(negara);

//     const data_cek = new cekData(permintaan.body.dataCorona)
//     data_cek.validasiUserInput()

//     if (data_cek.errors.length) {
//         console.log(`TOLOL`);
//     } else {
//         axios.get(url).then((hasilnya) => {
//             // const { CountryCode: con } = hasilnya.data
//             // respon.render(`index`, {
//             //     negaranya: `Provinsi ${hasilnya.data}`
//             // })

//             // console.log(hasilnya.data.lat);
//             console.log(hasilnya.data);
//         }).catch((error) => { console.error(error); })
//     }
// }

exports.halamanTentang = (permintaan,respon) => {
    respon.render(`tentang`, {
        namaPenulis: `Adit Herlambang`
    })
}