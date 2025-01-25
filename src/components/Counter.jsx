import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-3xl">{counter.value}</h3>
      <div className='flex gap-5'>
      <button
        className="text-xl px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => dispatch({ type: 'counter/increment' })}
      >
        +
      </button>
      <button
        className="text-xl px-4 py-2 bg-gray-500 text-white rounded cursor-pointer"
        onClick={() => dispatch({ type: 'counter/decrement' })}
      >
        -
      </button>
      <button
        className="text-xl px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
        onClick={() => dispatch({ type: 'counter/reset' })}
      >
        Reset
      </button>
      </div>
    </div>
  );
}

export default Counter;
