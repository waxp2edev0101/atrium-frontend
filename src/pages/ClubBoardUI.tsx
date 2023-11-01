import { ModalLayout } from '../components'

import { ClubBoard } from './ClubBoard/ClubBoard'

export const ClubBoardUI = () => {
  const handleClose = () => {
    console.log('handle close')
  }
  return (
    <>
      <ModalLayout open={true} handleClose={handleClose}>
        <ClubBoard />
      </ModalLayout>
    </>
  )
}
