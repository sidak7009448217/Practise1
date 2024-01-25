
import { useState } from 'react'
import Form from './Form'
import Todo from './Todo'

function App() {

  const [todos , setTodos] = useState([])
  

  return  (
      <div  className=" flex flex-col justify-center items-center mb-10 p-4  bg-gray-200 shadow-xl shadow-blur text-black w-3/4 mx-auto min-h-16 rounded-xl mt-3 gap-8">
       <div className='text-4xl font-bold mt-4 text-red-700'>Todo React App</div>
       <Form setTodos={setTodos} />
       <Todo todos={todos} setTodos={setTodos} /> 
      </div>
  )
}

export default App
