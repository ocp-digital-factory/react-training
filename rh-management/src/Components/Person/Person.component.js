import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import { AccountCircle, Delete } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Person = props => {
  const { id, fullName, phoneNumber, email, job } = props;
  const history = useHistory();
  const goToProfilePage = () => history.push(`/profile/${id}`);
  const dispatch = useDispatch();
  const handleDeletePerson = () =>
    dispatch({ type: "DELETE_PERSON", payload: { id } });

  return (
    <TableRow>
      <TableCell>{fullName}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{job}</TableCell>
      <TableCell>
        <IconButton onClick={goToProfilePage}>
          <AccountCircle />
        </IconButton>
        <IconButton onClick={handleDeletePerson}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Person;
