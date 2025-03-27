import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, tripleIncrement, input } from './slices/counterSlice'

function App() {
  const count = useSelector((state) => state.counterSlice.value);

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement())
  };

  const handleTripleIncrement = () => {
    dispatch(tripleIncrement())
  };

  const handleInput = () => {
    const numberValue = Number(inputValue);
    if (!isNaN(numberValue)) {
      dispatch({ type: 'counter/input', payload: numberValue });
    }
    setInputValue('');
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className='cnt-div'>count is {count}</div>
        <div className='btns-div'>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleTripleIncrement}>+3</button>
          <div className='input-div'>
            <input
              className='input'
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleInput}>Process</button>
          </div>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
