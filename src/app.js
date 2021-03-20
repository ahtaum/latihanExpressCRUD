const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { Socket } = require("net")
const router = require("./router")
const http = require("http").createServer(app)
const io = require("socket.io")(http)
// require(`dotenv/config`);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set("views","./tampilan")
app.set("view engine","ejs") // view engine di sistem ini hanya hbs dan ejs

app.use(`/`, router)

io.sockets.on('connection', (socket) => {
    socket.emit('message', { message: 'Selamat Datang' })
    socket.on('send', (data) => {
        io.sockets.emit('message', data)
    })
})

app.listen(9000, () => { console.log(`berjalan di PORT : 9000`); })
mongoose.connect(`mongodb+srv://adit:herlambang@cluster0.wyjwe.mongodb.net/node_crud?retryWrites=true&w=majority`, { useNewUrlParser: true }, () => {
    console.log(`Tersambung ke Database`);
});