import { useState } from "react"

import { Button, Heading, HStack } from "@chakra-ui/react"
import { ProfileContainer } from "@/containers/ProfileContainer"

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

  const handleClickEdit = () => {
    setIsProfileOpen(true)
  }

  return (
    <HStack justifyContent="center" height="100vh">
      <Heading as="h1" fontSize="3xl">
        <Button onClick={() => handleClickEdit()}>Edit</Button>
        <ProfileContainer isModalOpen={isProfileOpen} />
      </Heading>
    </HStack>
  )
}
