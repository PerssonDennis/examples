import React from 'react';
import { shallow } from 'enzyme';
import TodoList, { Todo } from '../TodoList';

it('should pass title to Todo component', () => {
  const todos = [
    { id: 1, title: 't1' },
    { id: 2, title: 't2' },
  ];
  const wrapper = shallow(<TodoList todos={todos} />);
  const firstTodo = wrapper.find(Todo).at(0);
  expect(firstTodo.prop('title')).toEqual('t1');
});
