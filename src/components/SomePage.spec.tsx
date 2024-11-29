import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

import { SomePage } from "./SomePage";


describe("<SomePage/>", () => {

  it("can create web action", async () => {
    render(
      <SomePage/>
    );
    const button = screen.getByText("Click me");
    userEvent.click(button);
    expect(button).not.toBeDisabled();
  });

});
