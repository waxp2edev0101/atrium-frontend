import * as React from 'react'

import { ModalLayout } from '../../components'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { setBoardDialogOpen } from '../../stores/UiStore'

import { ClubBoard } from './ClubBoard'

const ClubBoardDialog = () => {
  const dispatch = useAppDispatch()
  const boardDialogOpen = useAppSelector((state) => state.ui.boardDialogOpen)

  const handleClose = () => {
    dispatch(setBoardDialogOpen(false))
  }

  return (
    <>
      <ModalLayout open={boardDialogOpen} handleClose={handleClose}>
        <ClubBoard />
      </ModalLayout>
    </>
  )
}

export { ClubBoardDialog }
