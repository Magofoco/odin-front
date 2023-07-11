import { ChangeEvent } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Avatar,
  Grid,
  GridItem,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react"

interface ProfileControlProps {
  isModalOpen: boolean
  nameError: string
  usernameError: string
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBioChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClickSave: () => void
}

const ProfileControl = ({
  isModalOpen,
  nameError,
  usernameError,
  onNameChange,
  onUsernameChange,
  onBioChange,
  onClickSave,
}: ProfileControlProps) => {
  return (
    <Modal isOpen={isModalOpen} onClose={() => console.log("Modal closed")}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Grid templateColumns="auto 1fr" alignItems="center" gap={4}>
            <GridItem>
              <Avatar
                size="xl"
                name="Shad Jahangir"
                src="/path/to/profile-image.jpg"
              />
            </GridItem>
            <GridItem>
              <Button size="sm" variant="outline">
                Update New
              </Button>
            </GridItem>
          </Grid>
        </ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired isInvalid={!!nameError}>
              <FormLabel htmlFor="displayName">Display Name</FormLabel>
              <Input
                id="displayName"
                placeholder="Enter your name"
                onChange={onNameChange}
              />
              <FormErrorMessage>{nameError}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!usernameError}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                placeholder="Enter your username"
                onChange={onUsernameChange}
              />
              <FormErrorMessage>{usernameError}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="bio">Bio</FormLabel>
              <Textarea
                id="bio"
                placeholder="Enter your bio"
                onChange={onBioChange}
                rows={4}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClickSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProfileControl
