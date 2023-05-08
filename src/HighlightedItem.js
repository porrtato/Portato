import React from 'react'

import Grid from '@mui/material/Grid';

import './App.css';
import './images/images.css'
import { Link } from '@mui/material';


function HighlightedItem() {
  return (

    <div className='HighlightedItem boxItem'>
      
      <h1>Aqua the water goddess</h1>
      <p>Newest Osu skin</p>
      <Grid className='contain'container spacing={2}>
        <Grid item md={7} sx={12}>
          <div className='NewSkinImage1'></div>
        </Grid>
        <Grid container direction='column' spacing={2}
          item md={3} sx={2}>
          <Grid item sm={6} sx={2}>
          <div className='NewSkinImage2'></div>
          </Grid>
          <Grid item sm={6} sx={2}>
          <div className='NewSkinImage3'></div>
          </Grid>
        </Grid>

        <Grid item md={2} sx={2}>
        <div className='NewSkinImage4'></div>
        </Grid>

      </Grid>

     
    </div>


  )
}

export default HighlightedItem