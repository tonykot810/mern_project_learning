import React, { useState, useEffect } from 'react';
import {Container , AppBar, Typography, Grow ,Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import Posts from'./components/Posts/Posts'
import Form from'./components/Form/Form'
import memories from './images/memories.png'
import useStyles from './styles';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.AppBar} position='static' color="inherit">
        <Typography display="inline" className={classes.heading}variant='h2' align='center'>Memeories
        <img className={classes.image} src={memories} alt="memories" height="60"/>
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
}

export default App;
