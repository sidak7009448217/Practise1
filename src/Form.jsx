import React, { useState } from 'react';

function Form({ setTodos }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleClick = () => {
    if (name && date) {
      setTodos((prev) => [...prev, { name, date }]);

      // Clear input fields
      setName('');
      setDate('');
    }
  };

  return (
    <div className=' mx-auto flex justify-center items-center p-6 gap-2'>
      <input
        className='border w-96 h-10 p-4'
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter a Todo'
      />
      <input
        className='border w-48 h-10 p-4'
        type='date'
        name='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='Select a date'
      />
      <button
        className='bg-green-600 text-white w-16 h-10 p-4 rounded-md'
        onClick={handleClick}
      >Add
      </button>
    </div>
  );
}

export default Form;
