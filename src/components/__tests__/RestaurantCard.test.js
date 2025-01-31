import { render, screen } from "@testing-library/react";
import RestraurantCard, { withOpenLabel } from "../RestraurantCard";
import MOCKS_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestraurantCard resData={MOCKS_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});



  // Higher Order Components : withOpenLabel() {homeworks}
it("should render RestaurantCard component with Open Label", () => {
  const RestraurantCardOpen = withOpenLabel(RestraurantCard);

  render(<RestraurantCardOpen resData={MOCKS_DATA} />);

  const openLabel = screen.getByText("Open");
  expect(openLabel).toBeInTheDocument();
});
