import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCKS_DATA from "../../components/mocks/mocksResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKS_DATA);
    },
  });
});
it("should res list for pizza text input", async () => {
  // fake fetch request use act
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchButton);

  const cardsAfterButton = screen.getAllByTestId("resCard");

  expect(cardsAfterButton.length).toBe(1);
});
it("should top rated restraurant", async () => {
  // fake fetch request use act
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restraurant",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(9);
});
