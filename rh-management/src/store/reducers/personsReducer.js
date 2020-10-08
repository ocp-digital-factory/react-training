const initialState = [
  {
    fullName: "Petey Cruiser",
    phoneNumber: "202-555-0916",
    email: "PeteyCruiser@email.com",
    job: "UX Designer"
  },
  {
    fullName: "Anna Sthesia",
    phoneNumber: "202-555-0917",
    email: "AnnaSthesia@email.com",
    job: "Full-stack developer"
  },
  {
    fullName: "Paul Molive",
    phoneNumber: "202-555-0918",
    email: "PaulMolive@email.com",
    job: "Agile coach"
  }
];

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PERSON":
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default personsReducer;
