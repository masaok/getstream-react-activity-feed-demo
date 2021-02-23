import React, { useState, useEffect } from 'react'

import { StreamApp, StatusUpdateForm, FlatFeed } from 'react-activity-feed'
import 'react-activity-feed/dist/index.es.css'

import { getToken } from '../api'

const API_KEY = process.env.REACT_APP_API_KEY
const APP_ID = process.env.REACT_APP_APP_ID

const Demo = () => {
  console.log('DEMO')
  console.log(`API_KEY: ${API_KEY}`)
  console.log(`APP_ID: ${APP_ID}`)

  const [token, setToken] = useState('')

  useEffect(() => {
    console.log('USE EFFECT')
    const retrieveToken = async () => {
      const newToken = await getToken()
      console.log(`NEW TOKEN: ${newToken}`)
      setToken(newToken)
    }
    retrieveToken()
  }, [])

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      {token && (
        <StreamApp apiKey={API_KEY} appId={APP_ID} token={token}>
          <StatusUpdateForm />
          <FlatFeed feedGroup="user" notify />
        </StreamApp>
      )}
    </div>
  )
}

export default Demo
