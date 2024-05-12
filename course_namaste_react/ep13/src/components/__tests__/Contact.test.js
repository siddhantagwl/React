import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// grouping of test cases
describe("Contact us page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before all");
  // });

  // beforeEach(() => {
  //   // helpful when we have to do clean up tasks
  //   console.log("Before each");
  // });

  test("Should load Contact us component", () => {
    // render on JSDOm
    render(<Contact />);

    // how to check if this component is laoded or not?
    // check all the tags, heading , form, text boxes
    // whether they are laoded or not in jsdom
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  // similarly we can write another test case
  // test to see if our button is rendered on the page or not
  test("Should load button inside Contact component", () => {
    // render on JSDOm
    render(<Contact />);

    const button = screen.getByRole("button");

    // assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load Submit text inside Contact component", () => {
    // render on JSDOm
    render(<Contact />);

    // another way to find button
    const button = screen.getByText("Submit");

    // assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load message text inside Contact component", () => {
    // render on JSDOm
    render(<Contact />);

    // another way to find button
    const msgBox = screen.getByPlaceholderText("message");

    // assertion
    expect(msgBox).toBeInTheDocument();
  });

  // test can also be written as it -> just an alias
  it("Should load 2 input boxes inside Contact component", () => {
    // render on JSDOm
    render(<Contact />);

    // this returned an array and not an html element
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    // assertion
    expect(inputBoxes.length).toBe(2);
  });
});
