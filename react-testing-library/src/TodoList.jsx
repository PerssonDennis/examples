import * as React from "react";

export const Todo = ({ id, title }) => {
  return <li data-testid={`todo-item-${id}`}>{title}</li>;
};

const todos = [
  { id: 1, title: "t1" },
  { id: 2, title: "t2" }
];

const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
      <button>Press me</button>
    </div>
  );
};

export default TodoList