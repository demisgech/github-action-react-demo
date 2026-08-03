import { screen, render } from "@testing-library/react";
import App from "@/App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render the app component", () => {
    render(<App />);

    const heading = screen.getByRole("heading");

    expect(heading).not.toBeInTheDocument();

    expect(heading).toHaveTextContent(/head/i);
  });
});
