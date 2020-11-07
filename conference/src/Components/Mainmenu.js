import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import minilogo from '../image/logomini.png';
import { Participatemeeting } from './Participatemeeting';
import { Generate } from './Generate';
import Drawer from '@material-ui/core/Drawer';
import { Profile } from './Profile';
import { Explain } from './Explain';

class Mainmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participate: false,
      generate: false,
      watch: false,
      profile: false
    }
  }
  
  render() {
    const {classes} = this.props;
    const transScreen = (index) => {
      this.setState({participate: false,
                     generate: false,
                     watch: false,
                     profile: false
                     });
      if (index === 0) {
        this.setState({participate: true});
      } else if (index === 1) {
        this.setState({generate: true});
      } else if (index === 2) {
        this.setState({watch: true});
      } else if (index === 3) {
        this.setState({profile: true});
      } else {
        this.setState({participate: false,
          generate: false,
          watch: false,
          profile: false
          });
      }
    }
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar style={{backgroundColor: '#F6BB43'}} position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Welcome to Conference!
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
        <div className={classes.toolbar}>
            <img src={minilogo} onClick={() => transScreen(4)} style={{width: '100%'}}/>
        </div>
        <Divider />
        <List>
          
          {['미팅 참여하기', '미팅 개설하기', '녹화영상 보기', '프로필 변경하기'].map((text, index) => (
            <ListItem button onClick={() => transScreen(index)} key={text}>
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
           { this.state.participate === false &&
             this.state.generate === false &&
             this.state.watch === false &&
             this.state.profile === false &&
             <Explain /> }
           { this.state.participate === true && <Participatemeeting /> }
           { this.state.generate === true && <Generate /> }
           { this.state.profile === true && <Profile /> }
        </main>
      </div>
    );
  }
}

export default Mainmenu;
