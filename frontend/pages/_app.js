import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.css'
import createEmotionCache from '../utility/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import darkTheme from '../styles/theme/darkTheme'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [user, setUser] = useState({})
  const [jwt, setJWT] = useState({})
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userData')))
    setJWT(localStorage.getItem('jwt'))
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} user={user} jwt={jwt} />{' '}
      </ThemeProvider>{' '}
    </CacheProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
