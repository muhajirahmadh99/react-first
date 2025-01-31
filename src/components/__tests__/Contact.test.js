import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("beforeAll");
  // });
  // beforeEach(() => {
  //   console.log("beforeEach");
  // });
  // afterAll(() => {
  //   console.log("afterAll");
  // });
  // afterEach(() => {
  //   console.log("afterEach");
  // });

  // use test or it
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  it("should load 2 input name contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
