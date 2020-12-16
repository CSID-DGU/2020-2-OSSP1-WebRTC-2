// https://www.freecodecamp.org/news/building-a-modern-chat-application-with-react-js-558896622194/

import React, { useState, useEffect, useRef } from 'react'
import DragDrop from './DragDrop'
import { Paper, TextField, Container } from'@material-ui/core';

const Chat = props => {
  const [message, setMessage] = useState('')
  const [user, setUser] = useState({ uid: 0, unickname: ""})
  const [imageZoom, setImageZoom] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const scrollToBottom = () => {
    const chat = document.getElementById("chatList");
    chat.scrollTop = chat.scrollHeight
  }

  useEffect(() => {
    scrollToBottom()
    setUser({ uid: props.user.uid, unickname: props.user.unickname })
  }, [props])

  const sendMessage = (msg) => {
    props.sendMessage(msg);
    scrollToBottom()
  }

  const handleSubmit = event => {
    if (message === '') return
    event.preventDefault();
    sendMessage({type:'text', message: { id: user.uid, sender: { uid: user.uid, unickname: user.unickname }, data: { text: message } }})
    setMessage('')
  };

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const renderMessage = (userType, data) => {
    console.log('===========', data)
    const message = data.message

    const msgDiv = data.type === 'text' && (
      <div className="msg">
        <p>{message.sender.unickname}</p>
        <div className="message"> {message.data.text}</div>
      </div>
    ) || (
      <div className="msg">
        <p>{message.sender.uid}</p>
        <img
          onClick={() => {
            setImageZoom(true)
            setSelectedImage(message.data)
          }}
          className="message"
          style={{
            width: 200,
            // height: 100
            cursor: 'pointer',
          }}
          src={message.data} />
      </div>
    )

    return (<li className={userType} >{ msgDiv }</li>)

  }

  const showEnlargedImage = (data) => {
    return (<img
      src={data}
      style={{
        backgroundColor: 'black',
        position: 'relative',
        zIndex: 100,
        display: 'block',
        cursor: 'pointer',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
        borderRadius: 20,
      }}
      onClick={() => setImageZoom(false)}
    />)
  }

  return (
    <div >
      {imageZoom && showEnlargedImage(selectedImage)}

      <Container className="chatWindow" style={{
        zIndex: 10,
        backgroundColor: "#EAF1F6",
        //position: 'absolute',
        //right: 5,
        //top: 190,
        //bottom: 140,
        overflow: 'scroll',
        //width: 350,
        height: "50vh",
    }}>
     

        <ul className="chat" id="chatList" style={{overflow : "auto"}}>
          {props.messages.map(data => (
            <Paper square elevation={2} style={{
              width: "95%", 
              float: "left",
              marginBottom: "1vh", 
              borderRadius:"10px",
              borderLeft: "15px solid transparent",
              borderRight: "0px solid transparent",
              borderBottom: "0px solid transparent",
              }}>
            <div key={data.id}>
              {user.uid === data.message.sender.uid ? renderMessage('self', data) : (renderMessage('other', data))}
            </div>
            </Paper>
          ))}
        </ul>
    </Container>
        
        
      <Paper>
        <DragDrop
          className="chatInputWrapper"
          sendFiles={(files) => {
            const reader = new FileReader()
            reader.onload = (e) => {
              //https://blog.mozilla.org/webrtc/large-data-channel-messages/
              //https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html
              const maximumMessageSize = 262118 //65535 <=== 64KiB // 16384 <=== 16KiB to be safe
              if (e.target.result.length <= maximumMessageSize)
                sendMessage({ type: 'image', message: { id: user.uid, sender: { uid: user.uid, }, data: e.target.result } })
              else
                alert('Message exceeds Maximum Message Size!')
            }

            reader.readAsDataURL(files[0])
          }}
        >
        </DragDrop>
      </Paper>
      <div>

      <form onSubmit={handleSubmit} 
        style={{
        }
        }>
          <TextField
          //전송 메세지 입력하는 곳
            className="textarea input"
            type="text"
            placeholder="보낼 메세지를 입력하세요"
            onChange={handleChange}
            value={message}
            style={{
              backgroundColor: "white",
              paddingTop:"20px",
              width:"100%"}}
          />
        </form>
      </div>
      </div>
      
    )
}

export default Chat