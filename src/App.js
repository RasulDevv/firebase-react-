import { useState } from "react"

const App = () => {
  const [data, setData] = useState({})

  const handleInput = event => {
    let newInput = {[event.target.name]: event.target.value}
    setData({...data, ...newInput})
  }
  const handleSubmit = () => {

  }

  return (
    <div>
      <input onChange={e => handleInput(e)} name="email" placeholder="email..." />
      <input onChange={e => handleInput(e)} name="password" placeholder="password..." />
      <button >submit</button>
    </div>
  )
}

export default App
