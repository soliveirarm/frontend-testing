import { render, screen } from "@testing-library/react"
import UserList from "./UserList"
import { mockUsers } from "../../mocks/mockUsers"
import "@testing-library/jest-dom"

const renderComponent = () => render(<UserList users={mockUsers} />)

describe("<UserList/>", () => {
  it("should render one user per line", () => {
    renderComponent()
    const tableRowName = screen.getByRole("cell", { name: "Jane" })
    const tableRowEmail = screen.getByRole("cell", { name: "jane@jane.com" })

    expect(tableRowName).toBeInTheDocument()
    expect(tableRowEmail).toBeInTheDocument()
  })
  it("should render the name and email of each user", () => {
    renderComponent()

    for (const user of mockUsers) {
      const userName = screen.getByRole("cell", { name: user.name })
      const userEmail = screen.getByRole("cell", { name: user.email })

      expect(userName).toBeInTheDocument()
      expect(userEmail).toBeInTheDocument()
    }
  })
  it("should not render the table if there are no users in the list, but render a paragraph instead", () => {
    render(<UserList users={[]} />)

    const paragraph = screen.getByText(/No users were added just yet./i)
    const table = screen.queryByRole("table")

    expect(paragraph).toBeInTheDocument()
    expect(table).not.toBeInTheDocument()
  })
})
