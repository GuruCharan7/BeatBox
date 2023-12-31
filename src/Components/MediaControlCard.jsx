import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';
import { Songs } from '../Data/Songs';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 110,
    width: "100%",
    backgroundColor: '#252525',
    top: 0,
    bottom: 0,

  },
  cover: {
    marginLeft: '8%',
    width: '20%',
    height: 110,
  },
  h6: {
    color: '#ffffff',
    fontSize: '17px',
    padding:'4%'
  },
  content: {
    marginLeft: '5%',
    width: '100%',

  }
}));

const MediaControlCard = ({ currentSong }) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  return (
    //<Link to='nowplaying' style={{textDecoration:'none'}}>
    <Card className={classes.root} onClick={()=>{history.push('/play')}}>
      <CardMedia
        className={classes.cover}
        image={require('../Pictures/' + currentSong.img)}
        title="Live from space album cover"
      />
      <div className={classes.details}>

          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6" className={classes.h6}>
              {currentSong.name}
            </Typography>
          </CardContent>
        
      </div>
    </Card>
    //</Link>
  );
}

export default MediaControlCard;