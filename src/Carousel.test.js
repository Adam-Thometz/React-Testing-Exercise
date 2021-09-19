import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import { isElementOfType } from "react-dom/test-utils";

it('renders without crashing', () => {
  render(<Carousel />)
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it('works when you click on the left arrow', function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  
  // move forward on carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  
  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
})

it('removes the left arrow when at the beginning', function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // at the beginning of the carousel
  expect(queryByTestId("left-arrow")).toHaveClass('hidden');

  // move forward on carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  
  // one space after beginning
  expect(queryByTestId("left-arrow")).not.toHaveClass('hidden');
})

it('removes the right arrow when at the beginning', function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(queryByTestId("right-arrow")).not.toHaveClass('hidden');
  // move to end of carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // at the beginning of the carousel
  expect(queryByTestId("right-arrow")).toHaveClass('hidden');
})