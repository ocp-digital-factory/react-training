import React from "react";

const Person = props => {
  const { fullName, phoneNumber, email, job } = props;
  return (
    <tr>
      <td>{fullName}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>{job}</td>
    </tr>
  );
};

export default Person;
