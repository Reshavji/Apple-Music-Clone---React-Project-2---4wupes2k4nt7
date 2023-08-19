import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import SpinnerSvg from '../images/Loader.svg'; // Import the SVG file
import './Music.css';
function Music() {
  const [songs, setSongs] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
          headers: {
            'projectId': 'bmc60xnvc646'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setSongs(data.data);
          console.log(data);
          setLoading(false);
        } else {
          console.error('Error fetching songs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
        setError(error);
        setLoading(false);
      }
    }

    fetchSongs();
  }, []);
  if (loading) {
    return (
      <div className="loader-container">
        <object className="loader"data={SpinnerSvg} type="image/svg+xml">
          Loading...
        </object>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-container">
        <p>An error occurred: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="song-list">
      <div className='second-container'>
      <div className='top-heading'><h1>Radio</h1></div>
      <Grid container spacing={2}>
      {songs.map((song) => (
           <Grid item xs={12} sm={6} md={4} lg={3} key={songs._id}>
         <Link to={`/album/${song._id}`} className="album-cards">
          <img src={song.thumbnail} alt={song.title} className="album-imgs" />
          <h3 className='album-title' >{song.title}</h3>
          <p>Artist: {song.artist.map((artist) => artist.name).join(', ')}</p>
        </Link>
        </Grid>
      ))}
    </Grid>
    </div>
    </div>
  );
}

export default Music;
