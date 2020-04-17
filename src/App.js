import React, { useState } from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import './global.css'

function App() {
  const [ hits, setHits] = useState(0)
  const [ errors, setErros] = useState(0)
  const [ limit, setLimit ] = useState(10)

  return (
    <div className="content">
      <Header hits={hits} errors={errors} limit={limit} setLimit={setLimit}/>
      <Main  hits={hits} errors={errors} setHits={setHits} setErrors={setErros} limit={limit}/>
    </div>
  );
}

export default App;
