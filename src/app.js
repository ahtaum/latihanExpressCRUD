const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./router")
// require(`dotenv/config`);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set("views","./tampilan")
app.set("view engine","ejs") // view engine di sistem ini hanya hbs dan ejs

app.use(`/`, router)

app.listen(9000, () => { console.log(`berjalan di PORT : 9000`); })
mongoose.connect(`mongodb+srv://adit:herlambang@cluster0.wyjwe.mongodb.net/node_crud?retryWrites=true&w=majority`, { useNewUrlParser: true }, () => {
    console.log(`Tersambung ke Database`);
});