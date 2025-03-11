import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import AddUserDialog from "./component";
import { addUser } from "../../redux/UserReducer/action";

const AddUserDialogContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add User
      </Button>
      <AddUserDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default AddUserDialogContainer;
