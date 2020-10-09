import React from "react";
import renderer from "react-test-renderer";
import Person from "../Person.component";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn()
}));

jest.mock("react-router-dom", () => ({
  useHistory: () => jest.fn()
}));

it("render person without props", () => {
  const tree = renderer.create(<Person />).toJSON();
  expect(tree).toMatchSnapshot();
});
