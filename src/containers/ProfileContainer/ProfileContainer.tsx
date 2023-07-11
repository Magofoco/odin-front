import { ProfileControl } from "@/controls/ProfileControl"
import { ChangeEvent, useState } from "react"
interface ProfileContainerProps {
  isModalOpen: boolean
}

const ProfileContainer = (props: ProfileContainerProps) => {
  const { isModalOpen } = props
  const [name, setName] = useState<string | undefined>(undefined)
  const [username, setUsername] = useState<string | undefined>(undefined)
  const [bio, setBio] = useState<string | undefined>(undefined)
  const [nameError, setNameError] = useState<string>("")
  const [usernameError, setUsernameError] = useState<string>("")

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

  const handleClickSave = () => {
    // Perform form submission or validation here
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
      console.log("ciao")
    }
  }

  return (
    <ProfileControl
      isModalOpen={isModalOpen}
      nameError={nameError}
      usernameError={usernameError}
      onNameChange={handleNameChange}
      onUsernameChange={handleUsernameChange}
      onBioChange={handleBioChange}
      onClickSave={handleClickSave}
    />
  )
}

export default ProfileContainer
