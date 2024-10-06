import { useState } from 'react';
import './App.css';

function App() {
 const[count,setcount]=useState(0);
 function decreaseHandler(){
  setcount(count-1);
 }
  function incrementHandler(){
    setcount(count+1);
  }
  function resetCount(){
    setcount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151]">
      <div className='text-orange-300 text-2xl font-medium'>Increment & Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-indigo-500'> 
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 text-5xl border-[#bfbfbf]'>-</button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={incrementHandler} className='border-l-2 text-center w-20 text-5xl border-[#bfbfbf]'>+</button>
      </div>
      <button onClick={resetCount} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
    </div>
  );
}

export default App;