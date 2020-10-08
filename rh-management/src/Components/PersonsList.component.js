import React, { useState } from "react";
import Person from "./Person.component";
import AddPersonFrom from "./AddPersonForm.component";
import data from "./constants";
import { useHistory } from "react-router-dom";
import {
  Typography,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";

const PersonsList = () => {
  const [persons, setPersons] = useState(data);
  const history = useHistory();

  const handleAddNewPerson = newPerson => {
    setPersons([...persons, newPerson]);
  };

  return (
    <>
      <Typography variant="h5" color="primary">
        <IconButton onClick={() => history.push("/")}>
          <ArrowBack />
        </IconButton>{" "}
        Persons List
      </Typography>
      <AddPersonFrom addNewPerson={handleAddNewPerson} />
      <br />
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Full Name</strong>
              </TableCell>
              <TableCell>
                <strong>Phone Number</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Job</strong>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {persons &&
              persons.map(person => <Person key={person.email} {...person} />)}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default PersonsList;
