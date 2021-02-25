import React from 'react'

import Demo from './components/Demo'

// import { ThemeProvider, makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles(
//   theme => ({
//     app: {
//       // width: '100vw',
//       // height: '100vh',
//       // padding: 0,
//       // margin: 0,
//       // backgroundColor: theme.palette.common.white, // switch to black for debugging
//       // backgroundColor: theme.palette.primary.light, // switch to black for debugging
//     },
//   }),
//   { name: 'App' }
// )

const App = () => {
  console.log('APP')

  return (
    // <ThemeProvider theme={theme}>
    <Demo />
    // </ThemeProvider>
  )
}

export default App
