import { AppBar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     // [theme.breakpoints.down('xs')]: {
//     //   width: '90%',
//     // },
//   },

//   image: {
//     marginLeft: '15px',
//   },
// }));

function App() {
  // const classes = useStyles();

  return (
    <div className='wrapper'>
      <AppBar className='appBar' position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Video Chat
        </Typography>
      </AppBar>

      {/* Video Palyer */}
      <VideoPlayer />

      {/* Options Component */}
      <div className='app_options'>
        <Options>
          {/* Notification Component */}
          <Notification />
        </Options>
      </div>

    </div>
  );
}

export default App;
