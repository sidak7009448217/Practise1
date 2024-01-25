import React from 'react'
import { useRef } from 'react'

function Form ({setTodos}) {
    
    const nameref = useRef()
    const dateref = useRef()

    const handleClick = () => {
        
        console.log(nameref.current.value,dateref.current.value)
        const obj = {
            name : nameref.current.value,
            date : dateref.current.value,
            id : Math.random()
        }
        setTodos((prev) => ([...prev, obj]));
    
        nameref.current.value = "";
        dateref.current.value = "";
        
    }



  return (
    <div className='w-[80%] flex justify-between items-center  gap-2'>
        <input ref={nameref} className='border flex-grow h-10 p-4 rounded-md' type="text" name="name" placeholder='Enter a Todo' />
        <input ref={dateref} className='border  h-10 p-4 rounded-md' type="date" name="date" placeholder='Enter a Todo' />
        <button className='bg-green-600 h-10 text-white flex-grow rounded-md text-center align-middle ' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Form