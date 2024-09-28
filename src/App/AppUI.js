import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
  const {
    loading,
    error,
    filteredTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && filteredTodos.length === 0) && <EmptyTodos/>}
        
        {filteredTodos.map(todo => (
          <TodoItem  
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text, todo.completed)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      
      { openModal && (
        <Modal>
          La funcionalidad de agregar TODO
      </Modal>
      )}

    </>
  );
}

export { AppUI };