import { ProfileControl } from "@/controls/ProfileControl"

interface ProfileContainerProps {
  isModalOpen: boolean
  onClickModal?: () => void
  onClickSave?: () => void
}

const ProfileContainer = (props: ProfileContainerProps) => {
  const { isModalOpen, onClickModal, onClickSave } = props

  return <ProfileControl isModalOpen={isModalOpen} />
}

export default ProfileContainer
