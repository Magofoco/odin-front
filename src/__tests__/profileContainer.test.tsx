import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ProfileContainer } from "@/containers/ProfileContainer"

describe("ProfileContainer", () => {
  it("should display error messages when required fields are not filled", async () => {
    render(
      <ProfileContainer isModalOpen={true} onSuccessSubmit={() => undefined} />
    )

    const saveButton = screen.getByText("Save")
    fireEvent.click(saveButton)

    await waitFor(() => {
      expect(screen.getByText("Display Name is required")).toBeInTheDocument()
      expect(screen.getByText("Username is required")).toBeInTheDocument()
    })
  })

  it("should display error message when username contains symbols", async () => {
    render(
      <ProfileContainer isModalOpen={true} onSuccessSubmit={() => undefined} />
    )

    const nameInput = screen.getByTestId("display-name-input")
    const usernameInput = screen.getByTestId("username-input")
    const saveButton = screen.getByText("Save")

    fireEvent.change(nameInput, { target: { value: "Fake User" } })
    fireEvent.change(usernameInput, { target: { value: "fakeuser" } })
    fireEvent.click(saveButton)

    await waitFor(() => {
      expect(
        screen.getByText("Only letters or numbers are allowed")
      ).toBeInTheDocument()
    })
  })

  // Add more test cases based on your requirements
})
