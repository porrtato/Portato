import React from 'react'

import Grid from '@mui/material/Grid';

import './App.css';
import './images/images.css'


const styles = {
  item1: {
    backgroundColor: '#FBEC39',
    height: '100px',
  },
  innerGrid: {
    height: '40px',
    backgroundColor: '#F6546A',
  },
  item4: {
    backgroundColor: '#A4ACDA',
    height: '100px',
  },
  item5: {
    backgroundColor: '#2A009D',
    height: '100px',
    color: '#ffffff',
  },
};

function HighlightedItem() {
  return (

    <div className='HighlightedItem boxItem'>
      <h1>Aqua the water goddess</h1>
      <p>Newest Osu skin</p>
      <Grid className='contain'container spacing={2}>
        <Grid item md={6}>
          <div className='testImage'></div>
        </Grid>
        

        <Grid item md={6}>
        <div className='testImage'></div>
        </Grid>

      </Grid>

      
    </div>

  )
}

export default HighlightedItem