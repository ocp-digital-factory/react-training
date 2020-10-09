import personsReducer from "../personsReducer";

test("test reducer fetch persons", () => {
  const action = {
    type: "PERSONS_FETCH_SUCCEEDED",
    payload: { data: [{ id: 1, fullName: "user name" }] }
  };
  const newState = personsReducer([], action);
  expect(newState).not.toBeNull();
  expect(newState.length).toBe(1);
  expect(newState[0].fullName).toBe("user name");
});
