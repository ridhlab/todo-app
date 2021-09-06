import './App.css';
import { ChakraProvider, Container } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container size="sm" p={5} boxShadow="md">
        <TodoList />
      </Container>
    </ChakraProvider>
  );
}

export default App;
