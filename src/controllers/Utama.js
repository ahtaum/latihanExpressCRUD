
const axios = require("axios")
const cekData = require("../penolong/cekData")
const bio = require("../models/data") // panggil model
const table = require("table")
const { body, validationResult } = require('express-validator');

exports.halamanUtama = async (permintaan,respon) => {
    
    let dataObj = await bio.find((err,hasil) => {
        if (err) return handleError(err)
        // let wadah = []
        // wadah.push(hasil)
        // wadah.forEach(function (m) {
        //     console.log(m);
        // })
        console.log(`data berhasil ditampilkan`);
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

    const errors = validationResult(permintaan);
    console.log(errors);
    if (!errors.isEmpty()) {
        return respon.status(400).json({ errors: errors.array() });
    }

    let dataBio = {
        nama: permintaan.body.nama,
        nim: permintaan.body.nim,
        jurusan: permintaan.body.jurusan
    }
    
    let dataModel = new bio(dataBio)

    dataModel.save((err,data) => {
        if (err) {
            // return respon.status(400).json({ errors: err });
            console.log(err); 
        } else { 
            respon.redirect('/')
        }
    })
    
}

exports.ubahData = (permintaan,respon) => {
    
    let dataDariClient = {
        nama: permintaan.body.namaOrang,
        jurusan: permintaan.body.jurusannya
    }

    let dataModel = new bio(dataDariClient)

    dataModel.update(permintaan.body.idObjek, dataDariClient, (err,data) => {
        if (err) { console.log(err); } else { 
            respon.redirect('/')
            console.log(dataDariClient);
         }
    })

    // dataModel.findByIdAndUpdate({_id: permintaan.body.idObjek}, dataDariClient, (err,data) => {
    //     if (err) { console.log(err); } else {
    //         respon.redirect('/')
    //         console.log(data);
    //     }
    // })

    // dataModel.updateMany({"created": false}, {_id: permintaan.body.idObjek}, dataDariClient, (err,data) => {
    //     if (err) { console.log(err); } else {
    //         respon.redirect('/')
    //         console.log(dataDariClient);
    //     }
    // })

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
        namaPenulis: `Adit Herlambang`,
        title: `Tentang Saya`
    })
}

exports.validate = (method) => {
    switch (method) {
        case 'simpenData': {
            return [
                body('nama', 'kolom nama harus diisi').exists(),
                body('usia', 'kolom usia harus diisi').exists()
            ];
        }
    }
}