import React from "react";
import TableCell  from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Person = props => {
  const { fullName, phoneNumber, email, job } = props;
  return (
    <TableRow>
      <TableCell>{fullName}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
};

export default Person;
