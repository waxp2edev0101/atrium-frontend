import CloseIcon from '@mui/icons-material/Close'
import { Box, Modal, Slide } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../hooks'
import { SideBar } from '../pages/ClubBoard/'
import { setCurrentBoardTab, setBoardDialogOpen } from '../stores/UiStore'

export const ModalLayout = ({
  open,
  handleClose,
  children,
}: {
  open: boolean
  handleClose: AnyFunction
  children: React.ReactNode
}) => {
  const dispatch = useAppDispatch()
  // const [value, setValue] = useState(0)
  const value = useAppSelector((state) => state.ui.currentBoardTab) || 0

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setBoardDialogOpen(true))
    if (newValue >= 0) dispatch(setCurrentBoardTab(newValue))
    else console.log('invalid tab value in profile page')
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ margin: 'auto', pt: '30px', width: '80%' }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        {/* <ClubBoard onClose={handleClose} /> */}
        <Box
          height="100%"
          position="relative"
          sx={{
            outline: 'none',
          }}
        >
          <Box display="flex" justifyContent="end" position="relative">
            <Box
              sx={{
                background: '#1a1a1a',
                bottom: '0px',
                height: '10px',
                position: 'absolute',
                width: '100%',
              }}
            />
            <Box
              sx={{
                // border: '1px solid red',
                background: '#1a1a1a',

                clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)',
                color: 'white',
                display: 'flex',
                padding: '8px 12px 8px 56px',
              }}
              onClick={handleClose}
            >
              <CloseIcon sx={{ color: 'white' }} />
            </Box>
          </Box>
          <SideBar value={value} handleChange={handleChange} />
          <Box height="100%" sx={{ overflowY: 'scroll' }}>
            {children}
          </Box>
        </Box>
      </Slide>
    </Modal>
  )
}
