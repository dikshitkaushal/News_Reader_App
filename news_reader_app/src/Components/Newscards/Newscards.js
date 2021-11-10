import React from "react";
import Newscard from "../Newscard/Newscard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from './styles'
const Newscards = ({ articles }) => {
  const  classes=useStyles();
  return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <Newscard article={article} i={i}/>
            </Grid>
          ))}
        </Grid>
      </Grow>
  );
};

export default Newscards;
