import React from 'react';

function Todo({ todos, setTodos }) {
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className='w-[80%] mx-auto'>
      {todos.map((todo) => (
        <div className='flex justify-between items-center p-2 border-b-2 border-gray-400' key={todo.id}>
          <div className='w-1/3 p-4 text-center text-gray-400'>{todo.name}</div>
          <div className='w-1/3 p-4 text-center text-gray-400'>{todo.date}</div>
          <button
            className='  bg-red-600 h-8  text-white w-16 rounded-xl text-center align-middle'
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

