// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const lightblueBoxStyles = {
  backgroundColor: 'lightblue',
}
const pinkBoxStyles = {
  backgroundColor: 'pink',
}
const orangeBoxStyles = {
  backgroundColor: 'orange',
}

function Box({className = '', style = {}, ...props}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

const smallBox = (
  <Box className="box--small" style={lightblueBoxStyles}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box--medium" style={pinkBoxStyles}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box--large" style={orangeBoxStyles}>
    large orange box
  </Box>
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
