import React from 'react'
import AppLayout from '../components/layout/AppLayout'

const Home = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default AppLayout()(Home)
