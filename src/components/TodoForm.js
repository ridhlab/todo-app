import React, { useState, useEffect, useRef } from 'react';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        {props.edit ? (
          <Flex my={4}>
            <Input
              placeholder="Update todo"
              value={input}
              onChange={handleChange}
              ref={inputRef}
              borderRadius="1rem 0 0 1rem"
            />
            <Button
              type="submit"
              borderRadius="0 1rem 1rem 0"
              bgColor="brand.900"
            >
              Update
            </Button>
          </Flex>
        ) : (
          <>
            <Flex>
              <Input
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}
                ref={inputRef}
                borderRadius="1rem 0 0 1rem"
              />
              <Button
                type="submit"
                borderRadius="0 1rem 1rem 0"
                bgColor="brand.900"
              >
                Add
              </Button>
            </Flex>
          </>
        )}
      </FormControl>
    </form>
  );
}
