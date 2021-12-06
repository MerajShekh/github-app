import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Link,
} from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 350,
          marginTop: "1rem",
          //   justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={user.avatar_url}
            sx={{ width: 200, height: 200 }}
          />
        </Box>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            <Link
              to={user.html_url}
              target="_blank"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              {user.name}
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            {user.bio}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", color: "darkblue" }}
          >
            Followers: <strong> {user.followers}</strong>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", color: "darkblue" }}
          >
            Available for hire:{" "}
            <strong> {user.hireable ? "Yes" : "Nope"}</strong>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
