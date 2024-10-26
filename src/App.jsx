import React, { lazy } from 'react'
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Group = lazy(() => import("./pages/Group"))
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
const App = () => {
  const user = false
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat/:chatId' element={<Chat />} />
          <Route path='/group' element={<Group />} />
        </Route>

        <Route path='Login' element={<ProtectRoute user={!user}  redirect='/'>
          <Login/>
        </ProtectRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
