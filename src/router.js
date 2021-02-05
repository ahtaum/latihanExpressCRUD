const express = require("express")
const router = express.Router()
const controllerUtama = require("./controllers/Utama")

router.get("/", controllerUtama.halamanUtama);
router.post("/", controllerUtama.simpenData);
router.get(`/tentang`, controllerUtama.halamanTentang)

module.exports = router