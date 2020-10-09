const initialState = [];

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PERSON":
      return [action.payload.data, ...state];
    case "PERSONS_FETCH_SUCCEEDED":
      return [...action.payload.data];
    default:
      return state;
  }
};

export default personsReducer;
