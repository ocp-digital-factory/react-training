import React, { useState } from "react";

const AddPersonForm = props => {
  const { addNewPerson } = props;
  const [newPerson, setNewPerson] = useState({
    fullName: "", phoneNumber: "", email: "", job: ""
  });

  const handleClick = e => {
    e.preventDefault();
    addNewPerson(newPerson);
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text" value={newPerson.fullName}
        placeholder="Full Name"
        required
        name="fullName"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={newPerson.phoneNumber}
        name="phoneNumber"
        required
        placeholder="Phone Number"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={newPerson.email}
        name="email"
        required
        placeholder="Email"
        onChange={handleInputChange}
      />
      <select
        required
        value={newPerson.job}
        name="job"
        onChange={handleInputChange}
      >
        <option value="">Job</option>
        <option value="UX Designer">UX Designer</option>
        <option value="Full-stack developer">Full-stack developer</option>
        <option value="Agile coach">Agile coach</option>
      </select>
      <button type="submit">Add</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default AddPersonForm;
