import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { KeyboardArrowDown, Link } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  // button: {
  //   color: "white",
  //   backgroundColor: "black",
  //   borderRadius: "20px",
  // },

  card: {
    position: "relative",
    margin: "auto",
  },
  overlay: {
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "1.2em",
    textAlign: "center",
    position: "absolute",
    top: 2,
    left: 2,

    lineHeight: 0,
  },
  tagText: {
    fontSize: "14px",
    position: "relative",
    top: 0,
    background: "rgb(0, 0, 0)" /* Fallback color */,
    backgroundColor:
      "rgba(0, 0, 0, 0.5)" /* Black background with 0.5 opacity */,

    padding: "5px 10px",
    color: "#fa5",
  },

  gridItem: {
    margin: 0,
  },

  tag: {
    borderRadius: "5px 5px 0 0",

    color: "#e4631c",
    "&:hover": {
      backgroundColor: "#f7e9e6",
      borderRadius: "8px",
      textDecoration: "underline",
    },
  },
});

const Meals = (props) => {
  const { idMeal, strMeal, strMealThumb, strArea, strTags, strInstructions } =
    props.meal;

  let history = useHistory();
  const url = `/mealInfo/${idMeal}`;
  const cardClickEvent = () => {
    history.push(url);
  };

  const classes = useStyles();

  return (
    <>
      {props.meal === null ? (
        <Grid item xs={2} sm={4} md={4}>
          <h1>No meals Found </h1>
        </Grid>
      ) : (
        <Grid item xs={4} sm={4} md={4} className={classes.gridItem}>
          <Card
            sx={{ maxWidth: 345 }}
            className={classes.card}
            onClick={cardClickEvent}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={strMealThumb}
                alt="green iguana"
              />
              <div className={classes.overlay}>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    background: "rgba(255, 167, 38, 0.5)",
                    padding: "2px 10px",
                  }}
                  variant="body2"
                  color="#212121"
                >
                  <strong>{strArea} Food</strong>
                </Typography>
                <Typography className={classes.tagText} variant="body1">
                  {strTags}
                </Typography>
              </div>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {strMeal} <Link size="small" color="primary" />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {strInstructions.slice(0, 120)} <span> </span>
                  <NavLink to={url} style={{ textDecoration: "none" }}>
                    <span
                      className={classes.tag}
                      style={{ paddingLeft: "6px" }}
                    >
                      See more
                    </span>
                  </NavLink>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant={"outlined"} color={"secondary"} fullWidth>
                Get Recipe <KeyboardArrowDown />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default Meals;
