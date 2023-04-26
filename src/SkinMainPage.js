import React from "react";
import "./App.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import HighlightedItem from "./HighlightedItem";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import Item5 from "./Item5";

export const SkinMainPage = () => {
  return (
    <div className="SkinMainPage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid item xs={12} md={8}>
            <HighlightedItem></HighlightedItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item2></Item2>
          </Grid>
          <Grid item xs={12} md={3}>
            <Item3></Item3>
          </Grid>
          <Grid item xs={12} md={3}>
            <Item4></Item4>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item5></Item5>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
