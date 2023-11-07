import React, { useState, ChangeEvent, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, TextField, Button } from "@mui/material";
import { Autocomplete } from "@mui/material";

import { addUser } from "../slices/usersSlice";
import sxStyles from "./styles.sx";
import { initialFormState, permissionsOptions } from "../utils/constants";
import { validationSchema } from "../utils/validationSchema";
import { Formik, Form, Field } from "formik";

interface AddUserModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [permissions, setPermissions] = useState([] as string[]);

  const handlePermissionChange = useCallback(
    (event: React.SyntheticEvent, selectedOptions: { label: string }[]) => {
      const selectedPermissions = selectedOptions.map((option) => option.label);
      const permissions = Array.from(new Set(selectedPermissions));
      setPermissions(permissions);
    },
    []
  );

  const handleSave = useCallback(
    (values: any) => {
      dispatch(addUser({ ...values, permissions }));
      handleClose();
      setPermissions([]);
    },
    [dispatch, handleClose, permissions]
  );

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={sxStyles.modal}>
        <h2>Add User</h2>
        <Formik
          initialValues={initialFormState}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSave(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="name"
                as={TextField}
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <Field
                name="email"
                as={TextField}
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Autocomplete
                multiple
                options={permissionsOptions}
                getOptionLabel={(option) => option.label}
                value={permissions.map((label) => ({ label }))}
                onChange={handlePermissionChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Permissions"
                    variant="outlined"
                    name="permissions"
                    margin="normal"
                  />
                )}
              />
              <Field
                name="image"
                as={TextField}
                fullWidth
                label="Image URL"
                variant="outlined"
                margin="normal"
              />

              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default memo(AddUserModal);
