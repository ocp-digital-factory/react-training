const initialState = [];

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PERSONS_FETCH_SUCCEEDED":
      return [...action.payload.data];
    default:
      return state;
  }
};

export default personsReducer;
