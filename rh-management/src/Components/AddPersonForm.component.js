import React, { useState } from "react";
import { TextField, MenuItem, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

const emptyPerson = {
  fullName: "",
  phoneNumber: "",
  email: "",
  job: ""
};

const FormCustomInput = props => {
  const { children, ...otherProps } = props;
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
      <TextField
        fullWidth
        variant="outlined"
        required
        size="small"
        {...otherProps}
      >
        {children}
      </TextField>
    </Grid>
  );
};

const AddPersonForm = props => {
  const [newPerson, setNewPerson] = useState(emptyPerson);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NEW_PERSON", payload: { data: newPerson } });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  return (
    <form onSubmit={handleClick} onReset={() => setNewPerson(emptyPerson)}>
      <Grid container spacing={2}>
        <FormCustomInput
          label="Full Name"
          value={newPerson.fullName}
          name="fullName"
          onChange={handleInputChange}
        />
        <FormCustomInput
          label="Phone Number"
          value={newPerson.phoneNumber}
          name="phoneNumber"
          onChange={handleInputChange}
        />
        <FormCustomInput
          label="Email"
          value={newPerson.email}
          name="email"
          onChange={handleInputChange}
        />
        <FormCustomInput
          select
          label="Job"
          value={newPerson.job}
          name="job"
          onChange={handleInputChange}
        >
          <MenuItem value="">Job</MenuItem>
          <MenuItem value="UX Designer">UX Designer</MenuItem>
          <MenuItem value="Full-stack developer">Full-stack developer</MenuItem>
          <MenuItem value="Agile coach">Agile coach</MenuItem>
        </FormCustomInput>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Button fullWidth type="submit" color="primary" variant="contained">
            Add
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Button fullWidth type="reset" color="secondary" variant="contained">
            Reset
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPersonForm;
