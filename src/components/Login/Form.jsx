import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 1500)
      })
    reset({
      email: '',
      password: ''
    })
    
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <h2 className="login__title">Log In</h2>
      <ul className="login__test">
        <li className="flex-login">
          <b className="login-b">Email: </b>jestrada@gmail.com
        </li>
        <li className="flex-login">
          <b className="login-b">Password:    </b>pass1234
        </li>
      </ul>
      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">Email</label>
          <input 
            type="email"
            className="login__input" 
            id="login-email"
            {...register('email')}
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">Password</label>
          <input 
            type="password" 
            className="login__input" 
            id="login-pass"
            {...register('password')}
          />
        </li>
      </ul>
      <div>
        {
          isErrorLogin && 'Bad credentials, try again'
        }
      </div>
      <button>Login</button>
    </form>
  )
}

export default Form