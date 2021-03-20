const express = require("express")
const router = express.Router()
const controllerUtama = require("./controllers/Utama")
const { check, validationResult } = require('express-validator')

router.get("/", controllerUtama.halamanUtama);

// router.post("/", controllerUtama.simpenData);

router.post("/", [
    check('nama').notEmpty().withMessage('Kolom nama harus diisi goblog'),
    check('nim').notEmpty().withMessage('kolom nim harus diisi bangsad').isLength({ min: 9 }).withMessage('karakter tidak boleh lebih dari 9')
], controllerUtama.simpenData);

router.post("/ubahData", controllerUtama.ubahData);
router.get(`/tentang`, controllerUtama.halamanTentang);

module.exports = router