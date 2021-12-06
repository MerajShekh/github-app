import React, { Fragment, useEffect, useState } from "react";

import { List, ListItem, ListItemText, Typography, Link } from "@mui/material";
import axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <List sx={{ width: "100%", maxWidth: "auto" }}>
      {repos.map((repo) => (
        <ListItem
          alignItems="flex-start"
          key={repo.id}
          sx={{ border: "1px solid lightgray", mt: "0.2rem" }}
        >
          <ListItemText
            primary={
              <Typography variant="h5" component="div" color="text.primary">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  underline="hover"
                  sx={{ cursor: "pointer" }}
                >
                  {repo.name}
                </Link>
              </Typography>
            }
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: "block" }}
                  variant="body2"
                  component="span"
                  color="text.primary"
                >
                  {repo.language}
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  color="text.primary"
                >
                  {repo.description}
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
export default Repos;
