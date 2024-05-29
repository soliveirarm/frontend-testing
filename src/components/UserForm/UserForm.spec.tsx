import UserForm from "./UserForm"
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import "@testing-library/jest-dom"

describe("<UserForm/>", () => {
  it("should render two inputs and one button", () => {
    const fn = jest.fn()
    render(<UserForm onUserAdd={fn} />)
    const inputs = screen.getAllByRole("textbox")
    const button = screen.getByRole("button")

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
  })
  it("should call onUserAdd() when submitting the form", async () => {
    const fn = jest.fn()
    render(<UserForm onUserAdd={fn} />)

    const nameInput = screen.getByRole("textbox", { name: /name/i })
    const emailInput = screen.getByRole("textbox", { name: /email/i })

    await user.type(nameInput, "marie")
    await user.type(emailInput, "marie@gmail.com")

    const button = screen.getByRole("button")
    await user.click(button)

    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledWith({ name: "marie", email: "marie@gmail.com" })
  })
  it("should clear the inputs after the form is submitted", async () => {
    render(<UserForm onUserAdd={() => {}} />)

    const nameInput = screen.getByRole("textbox", { name: /name/i })
    const emailInput = screen.getByRole("textbox", { name: /email/i })

    await user.type(nameInput, "marie")
    await user.type(emailInput, "marie@gmail.com")

    const button = screen.getByRole("button")
    await user.click(button)

    expect(nameInput).toHaveValue("")
    expect(emailInput).toHaveValue("")
  })
})
