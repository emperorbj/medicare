import { useState } from "react"

const Login = () => {

  const [state, setState] = useState('sign up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }
  return (
      <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-lg-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">{state === 'sign up' ? 'Create Account' : 'Login'}</p>
          <p>Please {state === 'sign up' ? 'Sign up' : 'log in'} to book appointment</p>
          { state === 'sign up' &&
          <div className="w-full">
            <p>Full Name</p>
            <input className="border border-zinc-300 mt-1 p-2 rounded-lg w-full" type="text" value={name} onChange={(e) => setName(e.target.name)} />
          </div>
          }
          <div className="w-full">
            <p>Email</p>
            <input className="border border-zinc-300 mt-1 p-2 rounded-lg w-full"  type="text" value={email} onChange={(e) => setName(e.target.email)} />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input className="border border-zinc-300 mt-1 p-2 rounded-lg w-full"  type="password" value={password} onChange={(e) => setName(e.target.password)} />
          </div>
          <button className="bg-indigo-500 text-white text-base py-2 w-full rounded-md">{state === 'sign up' ? 'Create Account' : 'Login'}</button>
          {
            state === 'sign up' ? <p>Already have an account 
              ? <span onClick={()=> setState('log in')} className="text-indigo-500 underline cursor-pointer">Login here</span></p>
              : <p>Create a new account <span onClick={()=> setState('sign up')}  className="text-indigo-500 underline cursor-pointer">Click here</span></p>
          }
        </div>
      </form>

  )
}

export default Login