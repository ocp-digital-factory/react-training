import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

const Person = props => {
  const { fullName, phoneNumber, email, job } = props;
  const history = useHistory();
  const goToProfilePage = () => history.push(`/profile/${email}`)
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
      </TableCell>
    </TableRow>
  );
};

export default Person;
