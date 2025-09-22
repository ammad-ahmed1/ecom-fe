import React, { useState } from 'react'
import { useLoginMutation } from '../features/auth/authApi'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  const submit = async (e) => {
    e.preventDefault()
    try{
      const res = await login({ email, password }).unwrap()
      // expected res: { token, role, userId }
      dispatch(setCredentials(res))
    }catch(err){
      console.error(err)
      alert('Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="p-2 border" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="p-2 border" />
        <button disabled={isLoading} className="px-4 py-2 bg-blue-600 text-white">Login</button>
      </form>
    </div>
  )
}
