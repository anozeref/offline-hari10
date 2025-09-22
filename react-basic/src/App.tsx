import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Welcome from './components/welcome'
import Head from './components/header'
import Card from './components/profilecard'
// @ts-ignore
import Counter from'./components/counter'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <Head/>
    <Welcome/>
      <div className="logos">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Counter count={count} setCount={setCount} />
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {Array.from({ length: count }).map((_, i) => (
      <Card key={i} />))}
      </div>
    </>
  );
}; 

export default App