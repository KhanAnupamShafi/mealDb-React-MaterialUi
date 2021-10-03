import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Restaurant from "./components/Restaurant/Restaurant";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import { createTheme, ThemeProvider } from "@mui/material";
import MealInfo from "./components/MealInfo/MealInfo";
import NotFound from "./components/NotFound/NotFound";

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some css that access to theme
//   }
// });

const theme = createTheme({
  palette: {
    primary: {
      main: "#f34124",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />

          <hr />

          <Switch>
            <Route exact path="/">
              <Restaurant />
            </Route>
            <Route path="/home">
              <Restaurant />
            </Route>

            <Route path="/category">
              <Category />
            </Route>

            <Route path="/service">
              <Services />
            </Route>

            <Route path="/mealInfo/:idMeal">
              <MealInfo />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
