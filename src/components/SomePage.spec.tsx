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

  it("test 2", async () => {
    const user = userEvent.setUp();
    render(
      <SomePage/>
    );
    const button = screen.getByText("Click me");
    await user.click(button);
    expect(button).not.toBeDisabled();
  });
  
  it("test 3", async () => {
    const user = userEvent.setUp();
    render(
      <SomePage/>
    );
    const button = screen.getByText("Click me");
    await user.dblClick(button);
    expect(button).not.toBeDisabled();
  });

  

});
