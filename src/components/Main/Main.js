import React, { useState, useEffect } from 'react'

import './styles.css'
import generateRandomOperation from '../../utils/scripts'

export default function Main(props) {
    const [ operation, setOperation ] = useState('');
    const [ answer, setAnswer ] = useState('');
    const [ result, setResult ] = useState(0);

    const answerField = document.getElementById('txtRes')

    function handleVerify(e) {
      e.preventDefault()
  
      if(answer == result) {
        answerField.style.border='1px solid #dcdce6'
        newOperation();
        props.setHits(props.hits + 1)
        setAnswer('')
      } else {
        answerField.style.border='1px solid #CD5C5C'
        props.setErrors(props.errors + 1)
        setAnswer('')
      }
      
      answerField.focus()
    }
  
    function newOperation() {
      const op = generateRandomOperation(props.limit)
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
    )
}