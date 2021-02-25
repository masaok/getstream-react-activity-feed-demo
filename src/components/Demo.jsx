import React, { useState, useEffect } from 'react'

import { StreamApp, StatusUpdateForm, FlatFeed } from 'react-activity-feed'
import 'react-activity-feed/dist/index.es.css'

import { getToken } from '../api'

import { connect } from 'getstream'
// or if you are on commonjs
// const { connect } = require('getstream');
// Instantiate new client with a user token

const API_KEY = process.env.REACT_APP_API_KEY
const APP_ID = process.env.REACT_APP_APP_ID

const Demo = () => {
  console.log('DEMO')
  console.log(`API_KEY: ${API_KEY}`)
  console.log(`APP_ID: ${APP_ID}`)

  const [token, setToken] = useState('')
  const [client, setClient] = useState(null)

  useEffect(() => {
    console.log('USE EFFECT')
    const retrieveToken = async () => {
      const newToken = await getToken()
      console.log(`NEW TOKEN: ${newToken}`)
      setToken(newToken)
    }
    retrieveToken()
  }, [])

  useEffect(() => {
    console.log('TOKEN EFFECT')
    if (token) {
      const client = connect(API_KEY, token, APP_ID)
      setClient(client)
    }
  }, [token])

  useEffect(() => {
    console.log('CLIENT EFFECT')
    if (client) {
      // Create the user: https://getstream.io/activity-feeds/docs/javascript/users_create/
      // Error: "You do not have permission to do this"
      // Status: 403, code 17, NotAllowedException
      // console.log('CREATE USER with getOrCreate')
      // client.user('john-doe').getOrCreate({
      //   name: 'John Doe',
      //   occupation: 'Software Engineer',
      //   gender: 'male',
      // })

      // Instantiate a feed object server side
      // https://getstream.io/activity-feeds/docs/javascript/adding_activities/?language=javascript#adding-activities:-basic
      // console.log('CREATE USER SERVER SIDE')
      // const user1 = client.feed('user', 'john-doe')

      // Client-side: Instantiate a feed for feed group 'user', user id '1'
      // and a security token generated server side
      // https://getstream.io/activity-feeds/docs/javascript/adding_activities/?language=javascript#adding-activities:-basic
      // Error: "Don't impersonate other users", Status 403, Code 17, "NotAllowedException"
      console.log('CREATE USER CLIENT SIDE')
      const user1 = client.feed('user', 'test-user-1', token)

      // // Create a new activity
      const activity = { actor: 1, verb: 'tweet', object: 1, foreign_id: 'tweet:1' }
      user1.addActivity(activity)
    }
  }, [client])

  // Timeline Feed
  // https://getstream.io/react-activity-feed/tutorial/
  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      {token && (
        <StreamApp apiKey={API_KEY} appId={APP_ID} token={token}>
          <StatusUpdateForm />
          {/* <FlatFeed feedGroup="user" notify /> */}
          <FlatFeed feedGroup="user" />
        </StreamApp>
      )}
    </div>
  )
}

export default Demo
