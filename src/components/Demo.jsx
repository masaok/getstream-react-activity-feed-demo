import React, { useState, useEffect } from 'react'

import { StreamApp, StatusUpdateForm, FlatFeed } from 'react-activity-feed'
import 'react-activity-feed/dist/index.es.css'

import { getToken } from '../api'

const API_KEY = process.env.API_KEY
const APP_ID = process.env.APP_ID

const Demo = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const retrieveToken = async () => {
      const newToken = await getToken()
      setToken(newToken)
    }
    retrieveToken()
  }, [])

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <StreamApp apiKey={API_KEY} appId={APP_ID} token={token}>
        <StatusUpdateForm />
        <FlatFeed feedGroup="user" notify />
      </StreamApp>
    </div>
  )
}

export default Demo
