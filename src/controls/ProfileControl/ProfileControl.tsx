import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Avatar,
  Grid,
  GridItem,
} from "@chakra-ui/react"

interface ProfileControlProps {
  isModalOpen: boolean
  onClickOutsideModal?: () => void
  onClickSave?: () => void
}

const ProfileControl = (props: ProfileControlProps) => {
  const { isModalOpen, onClickOutsideModal, onClickSave } = props

  return (
    <Modal isOpen={isModalOpen} onClose={() => console.log("ciao")}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Grid templateColumns="auto 1fr" alignItems="center" gap={4}>
            <GridItem>
              <Avatar
                size="xl"
                name="John Doe"
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
        <ModalBody>Something</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => console.log("ciao")}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProfileControl
