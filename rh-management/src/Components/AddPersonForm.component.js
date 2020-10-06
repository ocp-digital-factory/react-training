import React, { useState } from "react";

const AddPersonForm = props => {
  const { addNewPerson } = props;
  const [newPerson, setNewPerson] = useState({});

  const handleClick = () => addNewPerson(newPerson);

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  }
    

  return (
    <form>
      <input
        value={newPerson.fullName}
        placeholder="Full Name"
        name="fullName"
        onChange={handleInputChange}
      />
      <input
        value={newPerson.phoneNumber}
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleInputChange}
      />
      <input
        value={newPerson.email}
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <select name="job" onChange={handleInputChange}>
        <option value="">Job</option>
        <option value="UX Designer">UX Designer</option>
        <option value="Full-stack developer">Full-stack developer</option>
        <option value="Agile coach">Agile coach</option>
      </select>
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default AddPersonForm;
