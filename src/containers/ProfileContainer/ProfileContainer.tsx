import { ProfileControl } from "@/controls/ProfileControl"
import { ChangeEvent, useState } from "react"
interface ProfileContainerProps {
  isModalOpen: boolean
  onSuccessSubmit: () => void
}

const ProfileContainer = (props: ProfileContainerProps) => {
  const { isModalOpen, onSuccessSubmit } = props
  const [name, setName] = useState<string | undefined>(undefined)
  const [username, setUsername] = useState<string | undefined>(undefined)
  const [bio, setBio] = useState<string | undefined>(undefined)
  const [nameError, setNameError] = useState<string>("")
  const [usernameError, setUsernameError] = useState<string>("")
  const [submitError, setSubmitError] = useState<string>("")

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setName(name)
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value
    setUsername(username)
  }

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const bio = e.target.value
    setBio(bio)
  }

  const handleClickSave = async () => {
    if (!name) {
      setNameError("Display Name is required")
    } else {
      setNameError("")
    }

    if (!username) {
      setUsernameError("Username is required")
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setUsernameError("Only letters or numbers are allowed")
    } else {
      setUsernameError("")
    }

    if (!nameError && !usernameError) {
      const data = {
        name,
        username,
        bio,
      }

      try {
        const response = await fetch("http://localhost:8000/profile", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          console.log("Profile updated successfully")
          onSuccessSubmit()
        } else {
          setSubmitError("Something went wrong, try again!")
        }
      } catch (error) {
        console.log("An error occurred", error)
      }
    }
  }

  return (
    <ProfileControl
      isModalOpen={isModalOpen}
      nameError={nameError}
      usernameError={usernameError}
      submitError={submitError}
      onNameChange={handleNameChange}
      onUsernameChange={handleUsernameChange}
      onBioChange={handleBioChange}
      onClickSave={handleClickSave}
    />
  )
}

export default ProfileContainer
