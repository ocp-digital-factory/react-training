import React, { useState } from "react";
import Person from "./Person.component";
import AddPersonFrom from "./AddPersonForm.component";
import data from "./constants";
import { useHistory } from "react-router-dom";

const PersonsList = () => {
  const [persons, setPersons] = useState(data);
  const history = useHistory();

  const handleAddNewPerson = newPerson => {
    setPersons([...persons, newPerson]);
  };

  return (
    <>
      <h3>
        <button onClick={() => history.go(-1)}>{"<<"}</button> Persons List
      </h3>
      <AddPersonFrom addNewPerson={handleAddNewPerson} />
      <table>
        <thead>
          <tr>
            <td>Full Name</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td>Job</td>
          </tr>
        </thead>
        <tbody>
          {persons &&
            persons.map(person => <Person key={person.email} {...person} />)}
        </tbody>
      </table>
    </>
  );
};

export default PersonsList;
