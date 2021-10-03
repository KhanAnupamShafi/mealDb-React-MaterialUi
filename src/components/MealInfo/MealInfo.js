import {
  ExpandMoreRounded,
  FavoriteRounded,
  MoreVert,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { red } from "@mui/material/colors";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MealInfo = () => {
  const [meal, setMeal] = useState([]);

  const {
    strInstructions,
    strMeal,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strTags,
  } = meal;

  const { idMeal } = useParams();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []); //idmeal??????????????????????????????????????????????

  //accordian

  return (
    <Card
      sx={{
        marginBottom: 10,
        display: "block",
        width: "70vw",
        transitionDuration: "0.3s",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={strMealThumb}
          sx={{ width: 320, height: 300, margin: "20px" }}
        />

        <CardContent>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {strMeal?.slice(0, 1)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
              >
                {strMeal}
              </Typography>
            }
            subheader={strTags}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ margin: "5px 20px" }}
          >
            {strInstructions}
          </Typography>
          <CardActions sx={{ textAlign: "center" }} disableSpacing>
            <Accordion
              sx={{ border: "none", boxShadow: "none", textAlign: "center" }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton aria-label="share">
                    <ExpandMoreRounded />
                  </IconButton>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteRounded />
                </IconButton>
                <IconButton aria-label="share">
                  <Typography>See Ingredients</Typography>
                </IconButton>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Stack spacing={3}>
                    <p>{strIngredient1}</p>
                    <p>{strIngredient2}</p>
                    <p>{strIngredient3}</p>
                    <p>{strIngredient4}</p>
                    <p>{strIngredient5}</p>
                    <p>{strIngredient6}</p>
                    <p>{strIngredient7}</p>
                    <p>{strIngredient8}</p>
                    <p>{strIngredient9}</p>
                    <p>{strIngredient10}</p>
                    <p>{strIngredient11}</p>
                    <p>{strIngredient12}</p>
                    <p>{strIngredient13}</p>
                    <p>{strIngredient14}</p>
                  </Stack>
                  <Stack spacing={3}>
                    <p>{strMeasure1}</p>
                    <p>{strMeasure2}</p>
                    <p>{strMeasure3}</p>
                    <p>{strMeasure4}</p>
                    <p>{strMeasure5}</p>
                    <p>{strMeasure6}</p>
                    <p>{strMeasure7}</p>
                    <p>{strMeasure8}</p>
                    <p>{strMeasure9}</p>
                    <p>{strMeasure10}</p>
                    <p>{strMeasure11}</p>
                    <p>{strMeasure12}</p>
                    <p>{strMeasure13}</p>
                    <p>{strMeasure14}</p>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardActions>
        </CardContent>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Link to="/">
          <Button variant="contained" color="secondary">
            Go Home
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default MealInfo;
