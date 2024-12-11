import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

import { SomePage } from "./SomePage";


describe("<SomePage/>", () => {

  it("test 1", async () => {
    render(
      <SomePage/>
    );
    const button = screen.getByText("Click me");
    await userEvent.click(button);
    expect(button).not.toBeDisabled();
  });

  it("test 4", async () => {
    render(
      <SomePage/>
    );
    const button = screen.getByText("Click me");
    await userEvent.click(button);
    expect(button).not.toBeDisabled();
  });

  it("test 5", async () => {
    render(
      <SomePage/>
    );
    const input = screen.getByTestId("input");
    const button = screen.getByText("Click me");
    userEvent.type("Hello", input);
    expect(button).not.toBeDisabled();
  });

  it("test name input", async () => {
    render(
      <SomePage/>
    );
    const input = screen.getByTestId("nameinput");
    const button = screen.getByText("Click me");
    userEvent.type("Hello", input);
    expect(button).not.toBeDisabled();
  });
  

});
