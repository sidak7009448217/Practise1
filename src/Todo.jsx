import React from 'react';

function Todo({ todos, setTodos }) {
  const handleDelete = (name) => {
    setTodos((prev) => prev.filter((p) => p.name !== name));
  };

  return (
    <div className='w-[75%] mx-auto'>
      {todos.map((todo) => (
        <div className='flex justify-between items-center p-6' key={todo.name}>
          <div className='w-1/3 p-4 text-gray-400'>{todo.name}</div>
          <div className='w-1/3 p-4 text-gray-400'>{todo.date}</div>
          <button
            className='bg-red-600 h-8 text-white w-16 rounded-xl text-center align-middle'
            onClick={() => handleDelete(todo.name)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

