import React from "react";
import { render } from "@testing-library/react";
import TodoList from "../TodoList";

test("it should pass title to Todo component", () => {
  const todos = [
    { id: 1, title: "t1" },
    { id: 2, title: "t2" }
  ];
  const { getAllByRole, getByText, getByTestId, getByRole } = render(<TodoList todos={todos} />);
  const todoItems = getAllByRole("listitem");
  expect(todoItems[0]).toHaveTextContent("t1");

  // Checking presence of text using a regex.
  getByText(/t1/i);
  // Checking for data-test-id with the text.
  expect(getByTestId('todo-item-1')).toHaveTextContent('t1');
  // Checking for a button with the text "Press me".
  expect(getByRole('button')).toHaveTextContent('Press me');
});
