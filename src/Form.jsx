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
    <div className='w-[75%] flex justify-between items-center p-6'>
      <input
        className='border w-1/3 h-10 p-4'
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter a Todo'
      />
      <input
        className='border w-1/3 h-10 p-4'
        type='date'
        name='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='Select a date'
      />
      <button
        className='bg-green-600 h-8 text-white w-16 rounded-xl text-center align-middle '
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
