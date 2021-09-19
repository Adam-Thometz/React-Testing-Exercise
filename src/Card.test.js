import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it('renders without crashing', () => {
  render(<Card />)
})

it('matches snapshot', () => {
  const {asFragment} = render(<Card caption="Hello!!" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/1920px--127wiki.jpg" currNum={1} totalNum={3} />)
  expect(asFragment()).toMatchSnapshot()
})