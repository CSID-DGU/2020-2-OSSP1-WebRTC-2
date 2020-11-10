const express = require('express')

var io = require('socket.io')
({
    path: '/io/webrtc'
})

const app = express()
const port = 8080

const rooms = {}

//app.get('/',(req, res)=>res.send('Hello World!!!!'))

app.use(express.static(__dirname + '/build'))

app.get('/', (req, res, next)=>{ // default room
    //res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
    //res.setHeader("Access-Control-Allow-Origin", "https://fadcf79aabcc.ngrok.io")
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/:room', (req, res, next) => {
  res.sendFile(__dirname + '/build/index.html')
})

const server = app.listen(port, () => console.log('Example app listening on port 8080!!'))

io.listen(server)

// default namespace
io.on('connection', socket => {
    console.log('connected')
})

const peers = io.of('/webrtcPeer')

//let connectedPeers = new Map()

peers.on('connection', socket => {

    const room = socket.handshake.query.room

    rooms[room] = rooms[room] && rooms[room].set(socket.id, socket) || (new Map()).set(socket.id, socket)

    //connectedPeers.set(socket.id, socket)

    console.log(socket.id)
    socket.emit('connection-success', {
        success: socket.id,
        peerCount: rooms[room].size,
    })

    // const broadcast = () => socket.broadcast.emit('joined-peers', {
    //     peerCount: connectedPeers.size,
    // })
    const broadcast = () => {
      const _connectedPeers = rooms[room]
  
      for (const [socketID, _socket] of _connectedPeers.entries()) {
        if (socketID !== socket.id) {
          _socket.emit('joined-peers', {
            peerCount: rooms[room].size //connectedPeers.size,
          })
        }
      }
    }
    broadcast()
    
    // const disconnectedPeer = (socketID) => {socket.broadcast.emit('peer-disconnected', {
    //     peerCount: connectedPeers.size,
    //     socketID: socketID
    // })

    const disconnectedPeer = (socketID) => {
      const _connectedPeers = rooms[room]
      for (const [_socketID, _socket] of _connectedPeers.entries()) {
          _socket.emit('peer-disconnected', {
            peerCount: rooms[room].size,
            socketID
          })
      }
    }
    //connectedPeers.set(socket.id, socket)

    socket.on('disconnect', () => {
      console.log('disconnected')
      // connectedPeers.delete(socket.id)
      rooms[room].delete(socket.id)
      disconnectedPeer(socket.id)
    })

    socket.on('onlinePeers', (data) => {
        const _connectedPeers = rooms[room]
        for (const [socketID, _socket] of _connectedPeers.entries()) {
          // don't send to self
          if (socketID !== data.socketID.local) {
            console.log('online-peer', data.socketID, socketID)
            socket.emit('online-peer', socketID)
          }
        }
    })


    socket.on('offer', data => {
        const _connectedPeers = rooms[room]
        for (const [socketID, socket] of _connectedPeers.entries()) {
          // don't send to self
          if (socketID === data.socketID.remote) {
            // console.log('Offer', socketID, data.socketID, data.payload.type)
            socket.emit('offer', {
                sdp: data.payload,
                socketID: data.socketID.local
              }
            )
          }
        }
    })
    
    socket.on('answer', (data) => {
        const _connectedPeers = rooms[room]
        for (const [socketID, socket] of _connectedPeers.entries()) {
          if (socketID === data.socketID.remote) {
            console.log('Answer', socketID, data.socketID, data.payload.type)
            socket.emit('answer', {
                sdp: data.payload,
                socketID: data.socketID.local
              }
            )
          }
        }
    })

    // socket.on('offerOrAnswer', (data)=>{
    //     for(const [socketID, socket] of connectedPeers.entries()){
    //         if(socketID !== data.socketID){
    //             console.log(socketID, data.payload.type)
    //             socket.emit('offerOrAnswer', data.payload)
    //         }
    //     }
    // })
    
    socket.on('candidate', (data)=>{
        const _connectedPeers = rooms[room]
        for(const [socketID, socket] of _connectedPeers.entries()){
            if(socketID === data.socketID.remote){
              socket.emit('candidate', {
                candidate: data.payload,
                socketID: data.socketID.local
              })
            }
        }
    })
})