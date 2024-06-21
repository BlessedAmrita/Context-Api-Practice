// import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className=" w-screen h-screen bg-gray-950 text-gray-500 text-xl flex flex-col justify-center items-center gap-10">
      <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </div>
  )
}

export default App