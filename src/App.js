import React from 'react';
import Button from '@material-ui/core/Button';
import 
{ AppBar, Container, 
  Toolbar, IconButton, 
  Typography, Box, Paper, 
  Grid, Card, CardMedia, 
  CardContent, CardActions,
   DialogTitle, 
   DialogContent, DialogContentText, 
   } 
  from '@material-ui/core';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
overlay:{
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundOverlay: "rgba(0,0,0,.3)"
},
mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
},
cardMedia: {
  padding: "30.25%"
},
cardContent:{
  flexGrow: 1
},
cardGrid:{
  marginTo: theme.spacing(4)
}

}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) =>{
    setValue(newValue);
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" 
          color="inherit" aria-laabel="menu" className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>P_WebDev</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
              <Dialog open={open} onClose={handleClose} aria-labelleby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Log in to see videos</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Adress"
                      type="email"
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Log in</Button>
                  </DialogActions>
              </Dialog>

          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>

    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
        <Container fixed>
          <div className={classes.overlay}/>
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography
              component="h1"
              variant = "h3"
              color="inherit"
              gutterBottom>
                P_WebDev Blog
              </Typography>
              <Typography
              variant="h5"
              color="inherit"
              paragraph>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley
              </Typography>
              <Button variant="contained" color="secondary">
                Learn more
              </Button>
            </div>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              P_WebDev
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley
            </Typography>
            <div className={classes.mainButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item> 
                      <Button variant="contained" color="primary">Start Now</Button>
                    </Grid>
                    <Grid item> 
                      <Button variant="outlined" color="primary">Learn more</Button>
                    </Grid>
                </Grid>
            </div>
          </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography className={classes.cardBottom}>
                            Blog post
                          </Typography>
                          <Typography >
                            Blog post Lorem Ipsum is simply dummy
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button >
                          <Button size="small" color="primary">
                            Edit
                          </Button >
                          <LayerIcon/>
                          <PlayCircleFilledIcon/>
                        </CardActions>
                    </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant="h6" align="center" gatterBottom>Footer</Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon/>}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon/>}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon/>}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon/>}
        />
          

      </BottomNavigation>
      <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
        P_WebDev Developer Blog React.js Material Ui site
      </Typography>
    </footer>

    </>
  );
}

export default App;
