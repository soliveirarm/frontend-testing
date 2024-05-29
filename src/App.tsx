import { useState } from "react"
import { User } from "./types/User"
import UserForm from "./components/UserForm/UserForm"
import UserList from "./components/UserList/UserList"
import { mockUsers } from "./mocks/mockUsers"

function App() {
  const [users, setUsers] = useState<User[]>(mockUsers)

  const onUserAdd = (user: User) => setUsers([...users, user])

  return (
    <div>
      <header className="bg-violet-500 text-white text-center p-6 mb-6">
        <h1 className="font-bold text-2xl tracking-wide uppercase">
          Testing with Jest
        </h1>
      </header>

      <h2 className="text-xl font-medium text-center">
        Project - List of Users
      </h2>

      <main className="max-w-screen-sm mx-auto">
        <UserForm onUserAdd={onUserAdd} />
        <hr />
        <UserList users={users} />
      </main>
    </div>
  )
}

export default App
