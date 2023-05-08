import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./carouselAqua.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const AquaTheWaterGoddess = () => {
  return (
    <div className="AquaTheWaterGoddess pageContainer">
      <div className="button">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="text">
        Back to skins
        </div>
      </Link>
      </div>
      <h1>AquaTheWaterGoddess</h1>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item md={8}>
          
      <div className="Container">
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={9}
          totalSlides={5}
        >
          <div className="slideContainer">
            <Slider className="slide">
              <Slide className="slide1" index={0}>
                <div className="slideImage1"></div>
              </Slide>
              <Slide className="slide2" index={1}>
                <div className="slideImage2"></div>
              </Slide>
              <Slide className="slide3" index={2}>
                <div className="slideImage3"></div>
              </Slide>
              <Slide className="slide4" index={3}>
                <div className="slideImage4"></div>
              </Slide>
              <Slide className="slide5" index={4}>
                <div className="slideImage5"></div>
              </Slide>

            </Slider>
            <div className="buttonContainer">
              <ButtonBack className="slideButtons button">Back</ButtonBack>
              <ButtonNext className="slideButtons button">Next</ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
      </Grid>
          
      
      <Grid item md={4}>
        <div className="containerButtonsSkinpage">
          <div>
      <a href="https://drive.google.com/file/d/17Wt6AQBeERI4-Lgz3ooCSxOoo-OLPwli/view" target="blank" style={{ textDecoration: "none" }}>
      <div className="button buttonSkinpage">Download</div>
      </a>
      <a href="https://drive.google.com/file/d/1qoHqlPSnVeipxL5qBDtsYyYJ0RHGAUg9/view" target="blank" style={{ textDecoration: "none" }}>
      <div className="button buttonSkinpage">Non Weeb download</div>
      </a>
      <a href="https://osu.ppy.sh/community/forums/topics/1634037?n=1" target="blank" style={{ textDecoration: "none" }}>
      <div className="button buttonSkinpage">Osu forum</div>
      </a>
      <a href="https://drive.google.com/file/d/17Wt6AQBeERI4-Lgz3ooCSxOoo-OLPwli/view" target="blank" style={{ textDecoration: "none" }}>
      <div className="button buttonSkinpage">Preview video</div>
      </a>
      </div>
      </div>
      </Grid>
      </Grid>
      </Box>
    </div>
  );
};

export default AquaTheWaterGoddess;
