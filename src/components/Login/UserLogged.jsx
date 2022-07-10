import React from 'react'
import './login.css'

const UserLogged = () => {
  return (
    <article className='loggedUser'>
      <i className="fa-solid fa-user-check"></i>
      <h2 className='logged'>You are alredy Logged</h2>
    </article>
  )
}

export default UserLogged