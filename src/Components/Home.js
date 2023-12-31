import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AlbumDetails from './AlbumDetails';
import Listennow from './Listennow';
import Header from './Header';
import BrowseNow from './BrowseNow';
import Sidebar from './Sidebar';
import Music from './Music';
import Song from './Song/Song';
import './Home.css';

import Subscription from './SubscriptionPage/Subscription';
import Artist from './Artist/Artist';
const Home = () => {
  const [currentSong, setCurrentSong] = useState({
    link: null,
    image: null,
    title: null,
    songData: null,
    songId:null,
    allSong:null,
  });


  return (
    <Router>
      <div className='home'>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Header currentSong={currentSong} />
            <Switch>
              <Route path="/Listen" component={Listennow} />
              <Route path="/browse" component={BrowseNow} />
              <Route path="/radio" component={Music} />
              <Route path="/subscription" component={Subscription} />
              <Route path="/artist/:id" component={Artist} />
              <Route path="/song/:id" component={Song} />
              <Route
                path="/album/:id"
                render={(props) => (
                  <AlbumDetails
                    {...props}
                    setCurrentSong={setCurrentSong}
                  />
                )}
              />
                            
              <Redirect exact from="/" to="/Listen" />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default Home;
