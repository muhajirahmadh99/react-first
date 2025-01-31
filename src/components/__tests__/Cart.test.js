import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestraurantMenu from "../RestraurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../../components/mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME), // Mock data
  })
);

it("should load restraurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Provider store={appStore}>
          <Header />
          <RestraurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordion = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordion);

  //find the items
  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  //find the add btns
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  //click the add btn the cart button adding in the header
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[2]);

  // Total carts is 14 + 2
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  // it's 16
  expect(screen.getAllByTestId("foodItems").length).toBe(16);
  // we clear the cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
});
