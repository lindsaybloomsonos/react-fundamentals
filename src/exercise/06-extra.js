// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const textInput = React.useRef()
  const [error, setError] = React.useState(true)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(textInput.current.value)
  }

  const handleChange = event => {
    const value = event.target.value
    setError(
      value === value.toLowerCase() ? null : 'Username must be lower case',
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={textInput}
          onChange={handleChange}
        />
      </div>
      {error ? <div style={{color: 'red'}}>{error}</div> : null}
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
