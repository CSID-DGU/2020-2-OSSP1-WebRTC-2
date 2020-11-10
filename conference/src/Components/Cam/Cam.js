import React, {Component} from 'react';
import io from 'socket.io-client'
import Video from './Video.js'
import Videos from './Videos.js'

//import './App.css';

class Cam extends Component{
  constructor(props){
    super(props)

    this.state={
      localStream: null,
      remoteStream: null,

      remoteStreams: [],
      peerConnections:{},
      selectedVideo:null,

      status: 'Please wait...',

      pc_config: {
        "iceServers": [
          {
            urls : 'stun:stun.l.google.com:19302'
          }
        ]
      },

      sdpConstraints: {
        'mandatory': {
            'OfferToReceiveAudio': true,
            'OfferToReceiveVideo': true
        }
      },

    }

    this.serviceIP = '/webrtcPeer' //ngrok안함
    
    //this.localVideoref = React.createRef()
    //this.remoteVideoref = React.createRef()

    this.socket = null
    //this.candidates = []

  }
  componentDidMount=()=>{

    this.getLocalStream()
    
    this.socket = io.connect(//여기 바꿈
      this.serviceIP,
      {
        path: '/webrtc', //io추가함 다시 안함
        query: {}
      }
    )

    this.socket.on('connection-success', success=>{
      console.log(success)
    })

    this.socket.on('offerOrAnswer', (sdp)=>{
      this.textref.value = JSON.stringify(sdp)

      this.pc.setRemoteDescription(new RTCSessionDescription(sdp))
    })

    this.socket.on('candidate', (candidate) => {
      //this.candidate = [...this.candidate, candidate]
      this.pc.addIceCandidate(new RTCIceCandidate(candidate))
    })

    this.socket.on('online-peer', socketID => {
      console.log('connected peers...', socketID)
    })

    //const pc_config = null

    // const pc_config = {
    //   "iceServers":[
    //       // {
    //       //     urls : 'stun:[STUN-IP]:[PORT]',
    //       //     'credentials':'[YOR CREDENTIALS]',
    //       //     'username': '[USERNAME]'
    //       // }
    //       {
    //           urls : 'stun:stun.l.goggle.com:19302'
    //       }
    //   ]
    // }

    this.pc = new RTCPeerConnection(this.state.pc_config)

    this.pc.onicecandidate = (e) => {
      if (e.candidate){
        this.sendToPeer('candidate', e.candidate)
      } 
    }

    this.pc.oniceconnectionstatechange = (e) => {
      console.log(e)
    }

    // this.pc.onaddstream = (e) => {
    //   this.remoteVideoref.current.srcObject = e.stream
    // }

    this.pc.ontrack = (e) => {
      debugger
      //여기 바꿈
      //this.remoteVideoref.current.srcObject = e.streams[0]

      this.setState({
        remoteStream:e.streams[0]
      })
    }

    // const success = (stream) => {
    //   window.localStream = stream
    //   //this.localVideoref.current.srcObject = stream
    //   this.pc.addStream(stream);
    //   this.setState({
    //     localStream: stream
    //   })

    // }

    // const failure = (e) => {
    //   console.log('getUserMedia Error: ', e)
    // }

    // const constraints = {
    //   //여기바꿈
    //   audio: false,
    //   video: true,

    //   options:{
    //     mirror: true,
    //   }
    // }

    // navigator.mediaDevices.getUserMedia(constraints)
    // .then(success)
    // .catch(failure)

  }

  getLocalStream = () => {
    const success = (stream) => {
      window.localStream = stream
      //this.localVideoref.current.srcObject = stream
      this.pc.addStream(stream);
      this.setState({
        localStream: stream
      })

      this.whoisOnline()

    }

    const failure = (e) => {
      console.log('getUserMedia Error: ', e)
    }

    const constraints = {
      //여기바꿈
      audio: false,
      video: true,

      options:{
        mirror: true,
      }
    }

    navigator.mediaDevices.getUserMedia(constraints)
    .then(success)
    .catch(failure)
  }

  whoisOnline=()=>{
    //내가 online인거 다른 peer들이 알게 함
    this.sendToPeer('onlinePeers',null,this.socket.id)
  }

  sendToPeer = (messageType, payload, socketID) => {
    this.socket.emit(messageType, {
      socketID,
      payload
    })
  }

  createOffer = () => {
    console.log('Offer')
    this.pc.createOffer(this.state.sdpConstraints)
    .then(sdp => {
      //console.log(JSON.stringify(sdp))
      
      this.pc.setLocalDescription(sdp)

      this.sendToPeer('offerOrAnswer',sdp)
    })
  }

  createAnswer = () => {
    console.log('Answer')
    this.pc.createAnswer(this.state.sdpConstraints)
    .then(sdp => {
      //console.log(JSON.stringify(sdp))
      this.pc.setLocalDescription(sdp)

      this.sendToPeer('offerOrAnswer', sdp)
    })
  }

  setRemoteDescription = () => {
    const desc = JSON.parse(this.textref.value)

    this.pc.setRemoteDescription(new RTCSessionDescription(desc))
  }

  addCandidate = () => {
    // const candidate = JSON.parse(this.textref.value)
    // console.log('Adding candidate: ', candidate)

    // this.pc.addIceCandidate(new RTCIceCandidate(candidate))

    this.candidates.forEach(candidate => {
      console.log(JSON.stringify(candidate))
      this.pc.addIceCandidate(new RTCIceCandidate(this.candidate))
    });
  }

  render(){

    console.log(this.state.localStream)

    return(
      <div>
        <Video  //local video
          videoStyles={{
            zIndex:2,
            position: 'fixed',
            right: 0,
            width: 200, height: 200,
            margin: 5, backgroundColor: 'black'
          }
          }
          //ref={this.localVideoref}
          videoStream = {this.state.localStream}
          autoPlay muted>
        </Video>
        <Video  //remote video
          videoStyles={{
            zIndex: 1,
            position: 'fixed',
            bottom:0,
            minWidth: '100%',
            minHeight: '100%',
            backgroundColor: 'black'
          }
          }
          //ref={this.remoteVideoref}
          videoStream = {this.state.remoteStream}
          autoPlay>
        </Video>

        <div>
          <Videos
            switchVideo = {() => {}}
            remoteStream = {this.state.remoteStreams}
          ></Videos>
        </div>

        <br/>

        <div style= {{zIndex: 1, position: 'fixed'}}>
          <button onClick = {this.createOffer}>Offer</button>
          <button onClick = {this.createAnswer}>Answer</button>

          <br/>
          <textarea ref={ref=>{this.textref = ref}}/>

        </div>
        
        {/* <br/>
        <button onClick = {this.setRemoteDescription}>Set Remote Desc</button>
        <button onClick = {this.addCandidate}>Add Candidate</button> */}
      </div>
      
    );
  }
}

export default Cam;



// import React, {Component} from 'react';
// import io from 'socket.io-client'
// //import './App.css';

// class Cam extends Component{
//   constructor(props){
//     super(props)

//     this.localVideoref = React.createRef()
//     this.remoteVideoref = React.createRef()

//     this.socket = null
//     this.candidates = []

//   }
//   componentDidMount=()=>{
    
//     this.socket = io(
//       '/webrtcPeer',
//       {
//         path: '/webrtc',
//         query: {}
//       }
//     )

//     this.socket.on('connection-success', success=>{
//       console.log(success)
//     })

//     this.socket.on('offerOrAnswer', (sdp)=>{
//       this.textref.value = JSON.stringify(sdp)

//       this.pc.setRemoteDescription(new RTCSessionDescription(sdp))
//     })

//     this.socket.on('candidate', (candidate) => {
//       //this.candidate = [...this.candidate, candidate]
//       this.pc.addIceCandidate(new RTCIceCandidate(candidate))
//     })

//     //const pc_config = null

//     const pc_config = {
//       "iceServers":[
//           // {
//           //     urls : 'stun:[STUN-IP]:[PORT]',
//           //     'credentials':'[YOR CREDENTIALS]',
//           //     'username': '[USERNAME]'
//           // }
//           {
//               urls : 'stun:stun.l.goggle.com:19302'
//           }
//       ]
//     }

//     this.pc = new RTCPeerConnection(pc_config)

//     this.pc.onicecandidate = (e) => {
//       if (e.candidate){
//         this.sendToPeer('candidate', e.candidate)
//       } 
//     }

//     this.pc.oniceconnectionstatechange = (e) => {
//       console.log(e)
//     }

//     this.pc.onaddstream = (e) => {
//       this.remoteVideoref.current.srcObject = e.stream
//     }

//     const success = (stream) => {
//       window.localStream = stream
//       this.localVideoref.current.srcObject = stream
//       this.pc.addStream(stream)
//     }

//     const failure = (e) => {
//       console.log('getUserMedia Error: ', e)
//     }

//     const constraints = {
//       audio: false,
//       video: true,
//     }

//     navigator.mediaDevices.getUserMedia(constraints)
//     .then(success)
//     .catch(failure)

//   }

//   sendToPeer = (messageType, payload) => {
//     this.socket.emit(messageType, {
//       socketID: this.socket.id,
//       payload
//     })
//   }

//   createOffer = () => {
//     console.log('Offer')
//     this.pc.createOffer({offerToReceiveVideo: 1})
//     .then(sdp => {
//       //console.log(JSON.stringify(sdp))
//       this.pc.setLocalDescription(sdp)

//       this.sendToPeer('offerOrAnswer',sdp)
//     })
//   }

//   createAnswer = () => {
//     console.log('Answer')
//     this.pc.createAnswer({offerToReceiveVideo: 1})
//     .then(sdp => {
//       //console.log(JSON.stringify(sdp))
//       this.pc.setLocalDescription(sdp)

//       this.sendToPeer('offerOrAnswer', sdp)
//     })
//   }

//   setRemoteDescription = () => {
//     const desc = JSON.parse(this.textref.value)
//     this.pc.setRemoteDescription(new RTCSessionDescription(desc))
//   }

//   addCandidate = () => {
//     // const candidate = JSON.parse(this.textref.value)
//     // console.log('Adding candidate: ', candidate)

//     // this.pc.addIceCandidate(new RTCIceCandidate(candidate))

//     this.candidates.forEach(candidate => {
//       console.log(JSON.stringify(candidate))
//       this.pc.addIceCandidate(new RTCIceCandidate(this.candidate))
//     });
//   }

//   render(){

//     return(
//       <div>
//         <video
//           style={{
//             width: 240, height: 240,
//             margin: 5, backgroundColor: 'black'
//           }
//           }
//           ref={this.localVideoref} 
//           autoPlay></video>
//         <video
//           style={{
//             width: 240, height: 240,
//             margin: 5, backgroundColor: 'black'
//           }
//           }
//           ref={this.remoteVideoref} 
//           autoPlay></video>
//         <br/>
//         <button onClick = {this.createOffer}>Offer</button>
//         <button onClick = {this.createAnswer}>Answer</button>
//         <br/>
//         <textarea ref={ref=>{this.textref = ref}}/>
//         {/* <br/>
//         <button onClick = {this.setRemoteDescription}>Set Remote Desc</button>
//         <button onClick = {this.addCandidate}>Add Candidate</button> */}
//       </div>
      
//     );
//   }
// }

// export default Cam;
