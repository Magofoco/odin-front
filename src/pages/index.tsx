import { useState } from "react"

import { Button, Heading, HStack } from "@chakra-ui/react"
import { ProfileContainer } from "@/containers/ProfileContainer"

export default function Home() {
  const [isModalProfileOpen, setIsModalProfileOpen] = useState<boolean>(false)

  const handleClickEdit = () => {
    setIsModalProfileOpen(true)
  }

  return (
    <HStack justifyContent="center" height="100vh">
      <Heading as="h1" fontSize="3xl">
        <Button onClick={() => handleClickEdit()}>Edit</Button>
        <ProfileContainer isModalOpen={isModalProfileOpen} />
      </Heading>
    </HStack>
  )
}
