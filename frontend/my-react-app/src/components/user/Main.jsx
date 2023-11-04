import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

function Main(props) {
  const posts = [
    "### Sample Post 1",
    "This is the first sample blog post. It may contain some **markdown** formatting.",
    "```javascript\nconsole.log('Hello, World!');\n```",
    "#### Sample Post 2",
    "This is the second sample blog post with more markdown formatting.",
    "1. Item 1",
    "2. Item 2",
    "3. Item 3",
    "#### Sample Post 3",
    "This is the third sample blog post.",
    "- Bullet point 1",
    "- Bullet point 2",
    "- Bullet point 3",
    // Add more sample posts as needed
  ];

  const title = "BlogLine";

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts?.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
