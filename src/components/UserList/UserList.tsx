import { User } from "../../types/User"

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  const renderedUsers = users.map(({ name, email }: User) => (
    <tr key={email} className="*:border *:border-violet-200 *:p-2 *:font-light">
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  ))

  if (users.length === 0) {
    return (
      <p className="text-center p-6 text-slate-500">
        No users were added just yet.
      </p>
    )
  }

  return (
    <table className="table-auto border border-spacing-2 border-slate-500 text-left m-4 shadow-md mx-auto">
      <thead>
        <tr className="bg-violet-400 text-white *:border *:border-violet-200 *:p-2 *:font-medium">
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>{renderedUsers}</tbody>
    </table>
  )
}

export default UserList
