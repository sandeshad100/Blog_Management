import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SignUp from "./layoutComponents/SignUp";
import Title from "./layoutComponents/Title";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* <Button size="small">Subscribe</Button> */}
        <Box>
          <NavLink to={""} style={{ textDecoration: "none" }}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1, textDecoration: "none" }}
            >
              {title}
            </Typography>
          </NavLink>
        </Box>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <Box>
          <NavLink to={"login"}>
            <Button variant="outlined" size="small">
              Login
            </Button>
          </NavLink>
        </Box>
      </Toolbar>
      <Toolbar
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
