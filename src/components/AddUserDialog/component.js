import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/UserReducer/action";

const AddUserDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    address: { city: "" },
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: name === "city" ? { ...prevUser.address, city: value } : value,
    }));
  };

  const handleSubmit = () => {
    dispatch(addUser({ ...newUser, id: Math.floor(Math.random() * 1000) }));
    handleClose();
    setNewUser({ name: "", username: "", email: "", address: { city: "" }, phone: "" });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Name" name="name" value={newUser.name} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Username" name="username" value={newUser.username} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" name="email" value={newUser.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="City" name="city" value={newUser.address.city} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone" name="phone" value={newUser.phone} onChange={handleChange} fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;
