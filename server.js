const http = require('http')
const express = require('express')

const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=>{
    console.log('Connected with socket id = ',socket.id)

    socket.on('msg_send',(data)=>{
         // console.log('received ',data.msg)
         io.emit('msg_rcvd',data)
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(3344, ()=>{
    console.log('Server is started on http://localhost:3344')
})