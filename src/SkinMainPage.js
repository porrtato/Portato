import React from "react";
import "./App.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import HighlightedItem from "./HighlightedItem";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import Item5 from "./Item5";

import { Link } from 'react-router-dom';

export const SkinMainPage = () => {
  return (
    <div className="SkinMainPage pageContainer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="allBlocks" container rowSpacing={3} columnSpacing={2}>
          <Grid className="selectBlock" item xs={12} md={8}>
          <Link to="/AquaTheWaterGoddess" style={{ textDecoration: 'none' }}>
            <HighlightedItem></HighlightedItem>
          </Link>
          </Grid>
          <Grid className="selectBlock" item xs={12} md={4}>
            <Item2></Item2>
          </Grid>
          <Grid className="selectBlock" item xs={12} md={3}>
            <Item3></Item3>
          </Grid>
          <Grid className="selectBlock" item xs={12} md={3}>
            <Item4></Item4>
          </Grid>
          <Grid className="selectBlock" item xs={12} md={6}>
            <Item5></Item5>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
