import React, { useEffect } from "react";
import Person from "./Person.component";
import AddPersonFrom from "./AddPersonForm.component";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PersonsList = () => {
  const persons = useSelector(state => state.persons);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "PERSOND_FETCH_REQUESTED" });
  }, [dispatch]);

  return (
    <>
      <Typography variant="h5" color="primary">
        <IconButton onClick={() => history.push("/")}>
          <ArrowBack />
        </IconButton>{" "}
        Persons List
      </Typography>
      <AddPersonFrom />
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
              persons.map(person => <Person key={person.id} {...person} />)}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default PersonsList;
