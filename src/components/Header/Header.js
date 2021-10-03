import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Menu,
  Login,
  PersonAddOutlined,
  CategorySharp,
} from "@mui/icons-material";
import { blue, purple, deepPurple } from "@mui/material/colors";
import "./Header.css";
import { Box } from "@mui/system";
import brand from "../../images/brand.png";
import logo from "../../images/logo.png";

// import { ReactComponent as Logo } from "../../images/logo.svg";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div>
      <AppBar
        sx={{
          background: purple[900],
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            style={{ marginRight: "auto" }}
          >
            <Menu></Menu>
          </IconButton>

          <Box component="div" style={{ marginRight: "auto" }}>
            <img src={brand} alt="" fontSize="large" className="logo" />
            <img src={logo} alt="" fontSize="large" className="logo" />
          </Box>

          <Stack direction="row" spacing={2}>
            <NavLink
              to="/home"
              className="tags"
              activeStyle={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="tags"
              to="/category"
              activeStyle={{
                color: "#fff",
              }}
            >
              Category
            </NavLink>
            <NavLink
              className="tags"
              to="/service"
              activeStyle={{
                color: "#fff",
              }}
            >
              Our Services
            </NavLink>
          </Stack>

          <Typography style={{ marginLeft: "auto" }}>
            <Button
              sx={{
                border: "1px solid #fff",
                color: deepPurple[600],
                background: "#fff",
                "&:hover": {
                  background: purple[600],
                  color: deepPurple[50],
                  border: "1px solid #fff",
                },
              }}
              variant="outlined"
              style={{ margin: 4 }}
            >
              <Login /> Login
            </Button>
            <Button
              sx={{
                "&:hover": {
                  background: deepPurple[600],
                },
              }}
              color="inherit"
              variant="outlined"
              style={{ margin: 4 }}
            >
              <PersonAddOutlined style={{ paddingRight: 5 }} />
              SignUp
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} onClose={toggleDrawer} style={{ width: 800 }}>
        <Typography align="center" component={"span"} variant={"body2"}>
          <List>
            <ListItem>
              <Link to="/">
                <ListItemText>
                  <Button
                    sx={{
                      color: blue[800],
                      fontSize: 16,
                      verticalAlign: "sub",
                    }}
                    onClick={toggleDrawer}
                  >
                    <Home /> Home
                  </Button>
                </ListItemText>
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link to="/category">
                <ListItemText>
                  <Button
                    sx={{
                      color: blue[800],
                      fontSize: 16,
                      verticalAlign: "sub",
                    }}
                    onClick={toggleDrawer}
                  >
                    <CategorySharp /> Category
                  </Button>
                </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Typography>
      </Drawer>
    </div>
  );
};

export default Header;
