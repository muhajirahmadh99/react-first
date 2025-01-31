import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header Component with a login button", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // find the button
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});
it("should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // find the button
  const cartItems = screen.getByText("Cart (0 items)");
  // const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});
it("should render Header Component with a Cart items", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // find the button and use regex(routerLink) as well-> /Cart/
  const cartItems = screen.getByText(/Cart/);
  // const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});
it("should change Login btn to Logout on Click", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // find the button and use regex(routerLink) as well-> /Cart/
  const loginButton = screen.getByRole("button", { name: "Login" });
  
  //fire Click event
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
