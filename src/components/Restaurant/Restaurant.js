import { Autocomplete, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Meals from "../Meals/Meals";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridContainer: {
    margin: "auto",
  },
});

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchQuery]);

  useEffect(() => {
    if (meals === null) {
      let newArr = [{ label: "nan" }];
      setState(newArr);
    } else {
      let newArr = [];

      newArr = [...meals];
      console.log(newArr);
      newArr.map((obj) => (obj["label"] = obj.strMeal));
      setState(newArr);
    }
  }, [meals]);

  const searchEvent = (e) => {
    const typedText = e.target.value.toLowerCase();
    setSearchQuery(typedText);
  };

  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        disablePortal
        autoComplete
        id="combo-box-demo"
        options={state}
        isOptionEqualToValue={(state, value) => state.id === value.id}
        sx={{ width: 300, margin: "auto" }}
        renderInput={(params) => (
          <TextField {...params} label="Search Food" onChange={searchEvent} />
        )}
      />
      <br />

      {/* <TextField label="Search Food" onChange={searchEvent} /> */}

      {meals === null ? (
        <h1>oops</h1>
      ) : (
        <Box
          className={classes.gridContainer}
          container
          sx={{
            flexGrow: 1,
            width: "90%",
            margin: "10px 5px",
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 3, md: 4 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            alignItems="center"
          >
            {meals?.map((meal) => (
              <Meals key={meal.idMeal} meal={meal}></Meals>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Restaurant;
