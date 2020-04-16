import React, { useState } from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import './global.css'

function App() {
  const [ hits, setHits] = useState(0)
  const [ errors, setErros] = useState(0)

  return (
    <div className="content">
      <Header hits={hits} errors={errors}/>
      <Main  hits={hits} errors={errors} setHits={setHits} setErrors={setErros}/>
    </div>
  );
}

export default App;
