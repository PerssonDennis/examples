import * as React from 'react';

export const Todo = ({ id, title }) => {
  return <li data-testid={id}>{title}</li>;
};

const todos = [
  { id: 1, title: 't1' },
  { id: 2, title: 't2' },
];

const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
};

export default TodoList;
