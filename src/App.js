import React, { useState, useEffect } from 'react';

import generateRandomOperation from './scripts'
import './style.css'

function App() {
  const [ operation, setOperation ] = useState('');
  const [ answer, setAnswer ] = useState('');
  const [ result, setResult ] = useState(0);

  const answerField = document.getElementById('txtRes')

  function handleVerify(e) {
    e.preventDefault()

    if(answer == result) {
      answerField.style.border='1px solid #dcdce6'
      newOperation();
      setAnswer('')
    } else {
      answerField.style.border='1px solid #CD5C5C'
    }
    
    answerField.focus()
  }

  function newOperation() {
    const op = generateRandomOperation()
    setOperation(`${op.n1} x ${op.n2}`)
    setResult(op.res)
  }

  useEffect(newOperation, [])

  return (
    <main>

        <form onSubmit={handleVerify}>
          <p className="operation">{operation}</p>
          <input 
            type="number" 
            value={answer} 
            id="txtRes" 
            autoComplete="off" 
            onChange={e => setAnswer(e.target.value)}/>
          <button type="submit">Verify</button>
        </form>

    </main>
  );
}

export default App;
