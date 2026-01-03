import React from 'react'
import NavButtons from './commons/NavButtons'
export default function HomePage() {
  return (
    <div className='flex justify-center p-40 '>
    <div className='flex h-60 w-240 justify-evenly items-center   bg-white/10 backdrop-blur-md
  border border-white/20
  rounded-xl'>
      <NavButtons pageName='Logout'/>
      <NavButtons pageName='AdminPage(Only Admin can access)'/>
      <NavButtons pageName='Logged In Page'/>
      <NavButtons pageName='Public Api Endpoint(All User)'/>
      <NavButtons pageName='Protected Admin EndPoint'/>  
    </div>
    </div>

  )
}
