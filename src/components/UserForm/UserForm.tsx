import React, { useState } from "react"
import { User } from "../../types/User"

interface UserFormProps {
  onUserAdd: (user: User) => void
}

function UserForm({ onUserAdd }: UserFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onUserAdd({ name, email })
    setName("")
    setEmail("")
  }
  return (
    <form className="p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border border-slate-400 rounded p-1 shadow-md placeholder-slate-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="border border-slate-400 rounded p-1 shadow-md placeholder-slate-400"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="johndoe@proton.com"
        />
      </div>

      <button className="bg-gradient-to-r from-violet-500 to-violet-400 px-4 py-2 text-white rounded transition-all hover:scale-105">
        Add User
      </button>
    </form>
  )
}

export default UserForm
