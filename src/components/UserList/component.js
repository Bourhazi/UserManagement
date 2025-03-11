import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import UserItemContainer from "../UserItems";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../../redux/UserReducer/action";

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({ type: FETCH_USERS_REQUEST });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.ok ? response.json() : Promise.reject("Erreur lors du chargement"))
      .then((data) => dispatch({ type: FETCH_USERS_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: FETCH_USERS_FAILURE, payload: error }));
  }, [dispatch]);

  if (loading) return <Typography variant="h6">Chargement...</Typography>;
  if (error) return <Typography variant="h6" color="error">Erreur : {error}</Typography>;

  return (
    <Container sx={{ mt: 3 }}>
      <Grid sx={{ padding: "2px" }} />
      <Grid container spacing={2}>
        {users.map((user) => (
          <UserItemContainer key={user.id} {...user} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserList;
