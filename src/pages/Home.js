import React, { useState } from "react";
import { Container, Grid, Paper, InputBase, IconButton } from "@mui/material";
import Axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "./UserCard";
import { toast } from "react-toastify";
import Repos from "./Repos";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [searchString, setSearchString] = useState("");

  const fetchDetail = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/users/${searchString}`
      );
      setUserInfo(data);
      console.log(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDetail();
  };

  return (
    <Container maxWidth="md" sx={{ my: "2rem", py: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search GitHub Profiles"
              inputProps={{ "aria-label": "Search GitHub Profiles" }}
              onChange={(e) => setSearchString(e.target.value)}
            />

            <IconButton
              type="submit"
              sx={{ p: "10px", color: "green" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          {userInfo ? <UserCard user={userInfo} /> : null}
        </Grid>
        <Grid item md={6}>
          {userInfo ? <Repos repos_url={userInfo.repos_url} /> : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
