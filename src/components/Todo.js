import { Flex, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <Flex
      key={index}
      justifyContent="space-between"
      my={4}
      bgColor="brand.900"
      borderRadius="1rem"
      opacity={todo.isComplete ? '40%' : '1'}
    >
      <Flex
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        px={4}
        flexBasis="100%"
        height={10}
        alignItems="center"
      >
        <Text textDecoration={todo.isComplete ? 'line-through' : 'none'}>
          {todo.text}
        </Text>
      </Flex>
      <Flex px={2} alignItems="center">
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </Flex>
      <Flex pr={3} alignItems="center">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
      </Flex>
    </Flex>
  ));
}
