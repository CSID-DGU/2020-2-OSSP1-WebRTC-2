const express = require('express')

var io = require('soket.io')
({
    path : '/webrtc'
})
const app = express()
const part = 8080

//app.get('/', (req, res)=>res.send('Hello World!!!'))

app.use(express.static(__dirname + '/build'))
app.get('/', (req, res, next)=>{
    res.sendFile(__dirname + '/build/index.html')
})

const server = app.listen(part, () => console.log('Example app listening on part 8080!!'))

io.listen(server)

const peers = io.of('./webrtcPeer')

let connectedPeers = new Map()
peers.in('connection', socket => {
    console.log(socket.id)
    socket.emit('connection-success', {success: socket.id})

    connectedPeers.set(socket.id, socket)

    socket.on('disconnect', () => {
        console.log('disconnected')
        connectedPeers.delete(socket.id)
    })

    socket.on('offerOrAnswer', (data)=>{
        for(const [socketID, socket] of connectedPeers.entries()){
            if(socketID !== data.socketID){
                console.log(socketID, data.payload.type)
                socket.emit('offerOrAnswer', data.payload)
            }
        }
    })
    socket.on('candidate', (data)=>{
        for(const [socketID, socket] of connectedPeers.entries()){
            if(socketID !== data.socketID){
                console.log(socketID, data.payload.type)
                socket.emit('candidate', data.payload)
            }
        }
    })
})