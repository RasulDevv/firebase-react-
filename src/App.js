import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const App = () => {
  let auth = getAuth()
  const [data, setData] = useState({})

  const handleInput = event => {
    let newInput = {[event.target.name]: event.target.value}
    setData({...data, ...newInput})
  }
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(response => {
        console.log(response.user)
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div>
      <input onChange={e => handleInput(e)} name="email" placeholder="email..." />
      <input onChange={e => handleInput(e)} name="password" placeholder="password..." />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default App
