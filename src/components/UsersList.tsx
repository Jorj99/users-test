import React, { useCallback, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Chip, IconButton, Typography } from "@mui/material";

import { RootState } from "../store";
import User from "../interfaces/User";
import AddUserModal from "./AddUserModal";
import sxStyles from "./styles.sx";
import "./index.css";
import dotsSvg from "../assets/dots.svg";
import defaultUserImage from "../assets/defaultImage.svg";
import { deleteUserByEmail } from "../slices/usersSlice";

const UsersList: React.FC = () => {
  const users: User[] = useSelector((state: RootState) => state.users.users);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const addUserClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleDelateUser = useCallback(
    (email: string) => {
      dispatch(deleteUserByEmail(email));
    },
    [dispatch]
  );

  return (
    <Box>
      <Box sx={sxStyles.navBar}>
        <Typography variant="h1" component="h1">
          Команда
        </Typography>
        <Button variant="contained" color="primary" onClick={addUserClick}>
          Добавить пользователя
        </Button>
      </Box>
      <Box sx={sxStyles.userItemsWrapper}>
        {!!users &&
          users.map((user) => (
            <Box key={user.image} sx={sxStyles.userItem}>
              {user.image ? (
                <img src={user.image} className="photo" alt="user" />
              ) : (
                <Box sx={sxStyles.defaultImage}>
                  <img src={defaultUserImage} alt="default" />
                </Box>
              )}

              <Box sx={sxStyles.userItemContent}>
                <Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={sxStyles.userName}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={sxStyles.userEmail}
                  >
                    {user.email}
                  </Typography>
                </Box>
                <Box>
                  {user.permissions.map((permission) => (
                    <Chip
                      key={permission}
                      label={permission}
                      sx={sxStyles.chip}
                    />
                  ))}
                </Box>
              </Box>
              <IconButton onClick={() => handleDelateUser(user.email)}>
                <img src={dotsSvg} alt="Dots" />
              </IconButton>
            </Box>
          ))}
      </Box>
      <AddUserModal open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default memo(UsersList);
