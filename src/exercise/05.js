// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const lightblueBoxStyles = {
  backgroundColor: 'lightblue',
  fontStyle: 'italic',
}
const pinkBoxStyles = {
  backgroundColor: 'pink',
  fontStyle: 'italic',
}
const orangeBoxStyles = {
  backgroundColor: 'orange',
  fontStyle: 'italic',
}

const smallBox = (
  <div className="box box--small" style={lightblueBoxStyles}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box box--medium" style={pinkBoxStyles}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box box--large" style={orangeBoxStyles}>
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
