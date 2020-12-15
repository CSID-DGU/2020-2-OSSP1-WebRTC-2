import React, {Component} from 'react'
import { Paper, Divider } from '@material-ui/core';
import Video from './Video'
import MonitorIcon from '@material-ui/icons/ScreenShare';

class Videos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rVideos: [],
      remoteStreams: [],
      selectedVideo: null,
      videoVisible: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.remoteStreams !== nextProps.remoteStreams) {

      const NoOfRemoteStreams = nextProps.remoteStreams.length

      let selectedVideo = {}

      if (NoOfRemoteStreams === 1)
        selectedVideo = { selectedVideo: nextProps.remoteStreams[0] }
      else {
        selectedVideo = this.state.selectedVideo && nextProps.remoteStreams.filter(stream => stream.id === this.state.selectedVideo.id) || []

        selectedVideo = selectedVideo.length ? {} : { selectedVideo: nextProps.remoteStreams[NoOfRemoteStreams-1] }
      }

      let _rVideos = nextProps.remoteStreams.map((rVideo, index) => {

        const _videoTrack = rVideo.stream.getTracks().filter(track => track.kind === 'video')
        // if (_videoTrack.length)
        //   _videoTrack[0].onmute = () => {
        //     alert('muted')
        //   }
        //비디오 허용일때만 비디오 보여줌
        let video = _videoTrack && (
          <Video
            videoMuted={this.videoMuted}
            videoType='remoteVideo'
            videoStream={rVideo.stream}//맨위
            frameStyle={{
              backgroundColor: '#ffffff12',
              maxWidth: 120, maxHeight: 120,
              borderRadius: 5,
              float: 'left', margin: '0 3px'
            }}
            videoStyles={{
              objectFit: 'cover',
              borderRadius: 5,
              width: 120, height: 120,
              maxWidth: 120, maxHeight: 120,
            }}
            //autoplay
          />
        ) || <div></div>

        return (
          <div
            id={rVideo.name}
            onClick={() => this.switchVideo(rVideo)}
            style={{ 
              cursor: 'pointer', display: 'inline-block'
            }}
            key={index}
          >
            {video}
          </div>
        )
      })

      this.setState({
        remoteStreams: nextProps.remoteStreams,
        rVideos: _rVideos,
        ...selectedVideo,
      })
    }
  }

  videoMuted = (rVideo) => {
    const muteTrack = rVideo.getVideoTracks()[0]
    const isSelectedVideo = rVideo.id === this.state.selectedVideo.stream.id
    if (isSelectedVideo) {
      this.setState({
        videoVisible: !muteTrack.muted
      })
    }
  }

  switchVideo = (_video) => {
    const muteTrack = _video.stream.getVideoTracks()[0]
    this.setState({
      selectedVideo: _video,
      videoVisible: !muteTrack.muted
    })
  }

  render() {
    return (
      <div style={{height: "100%", display: "grid", gridTemplateRows: "47% 3% 50%", gridTemplateColumns: "1fr"}}>
        <Paper variant="outlined" style={{
                      gridRow: "1 / 2",
                      gridColumn: "1 / 2",
                      //bottom: 0,
                      width: "100%",
                      height: "100%",
                      padding: "2vh"
        }}>
        <Video // 대장 화면 뜨는 곳
          style={{width: "100%", height: "100%"}} 
          videoType='previewVideo'
          frameStyle={{
            zIndex: 3,
            //position: 'fixed',

            //minWidth: '50vh', minHeight: '50vh',
            backgroundColor: 'black'
          }}
          videoStyles={{
            minWidth: "100%", minHeight: "100%",
            visibility: this.state.videoVisible && 'visible' || 'hidden',
          }}
          videoStream={this.state.selectedVideo && this.state.selectedVideo.stream}
        />
        </Paper>
        <Paper varient="outlined" style={{display: "flex", justifyContent: "center", width: "100%", gridRow: "2 / 3", gridColumn: "1 / 2", height: "100%"}}>
          <MonitorIcon style={{marginTop: "1vh"}}/>
        </Paper>
        <Paper variant="outlined" style={{
          gridRow: "3 / 4",
          gridColumn: "1 / 2",
          width: "100%",
          height: "100%",
          padding: "2vh"
        }}>
        <div // 사람들 화면 뜨는 곳
          style={{
            //gridRow: "2 / 3",
            //gridColumn: "1 / 2",
            zIndex: 1,
            //position: 'fixed',
            //padding: '6px 3px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            minWidth: '100%', minHeight: '100%',
            //top: 'auto',
            //right: 10,
            //left: 10,
            //whiteSpace: 'nowrap'
          }}
        >
          { this.state.rVideos }
        </div>
        </Paper>
      </div>
    )
  }

}

export default Videos