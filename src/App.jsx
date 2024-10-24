import React,{lazy} from 'react'
const Home = lazy(()=> import ("./pages/Home"))
const Login = lazy(()=> import("./pages/Login"))
const Chat = lazy(()=>import("./pages/Chat"))
const Group = lazy(()=>import ("./pages/Group"))
import { BrowserRouter , Routes, Route } from 'react-router-dom'
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
   <Route  path='/' element={<Home/>}/>
   <Route  path='Login' element={<Login/>}/>
   <Route path='/chat/:chatId' element = {<Chat/>} />
   <Route path='/group' element={<Group/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
