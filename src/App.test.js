import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import  mockFetch  from "./mock/MockFetch";

test("Test - Render header", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(
    /Letter App - ReactJS and JavaScript/
  );
});

test("Test - Render button", () => {
  render(<App />);
  expect(
    screen.getByRole("button", { name: "CHANGE FORMAT" })
  ).toBeInTheDocument();
});

test("Test - Mock Fetch API", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
