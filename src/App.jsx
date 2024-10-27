import React, { lazy } from 'react'
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Group = lazy(() => import("./pages/Group"))
const NotFound = lazy(() => import("./pages/NotFound"))
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
const App = () => {
  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path='/' element={<Home name={"gandu"} />} />
          <Route path='/chat/:chatId' element={<Chat />} />
          <Route path='/group' element={<Group />} />
        </Route>

        <Route path='Login' element={<ProtectRoute user={!user}  redirect='/'>
          <Login/>
        </ProtectRoute>} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
