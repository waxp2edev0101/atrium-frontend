import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import SendIcon from '@mui/icons-material/Send'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { Box, Typography, Popper } from '@mui/material'
import { useState, useCallback, useRef } from 'react'
import ScrollableFeed from 'react-scrollable-feed'

import { Button, AdornmentInput, EmptyBox } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import type { TSnack } from '../../../stores/AppStore'
import { openSnack } from '../../../stores/AppStore'
import type { IComment } from '../../../types/model'
// import avatar from '../images/avatar-3.png'

export const Comment = ({ data }: { data: IComment }) => {
  return (
    <Box display="flex" gap="8px" p="12px 4px">
      <Box py="10px">
        <img
          src={data.author?.avatar}
          alt=""
          width="45px"
          height="45px"
          style={{ borderRadius: 45 }}
        />
      </Box>
      <Box
        p="12px"
        sx={{ background: `${palette.background.paper}`, width: '100%' }}
      >
        <Typography variant="caption">{data.body}</Typography>
      </Box>
    </Box>
  )
}

export const Comments = (props: {
  data: IComment[]
  createComment: (body: string) => void
  preview?: boolean
}) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const pickerRef = useRef<HTMLDivElement>(null)

  const addEmoji = (e: any) => {
    let sym = e.unified.split('-')
    let codesArray: any[] = []
    sym.forEach((el: string) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setValue(value + emoji)
  }

  const handleCreate = () => {
    if (value) {
      props.createComment(value)
      setValue('')
    } else {
      const snack: TSnack = {
        content: 'Please fill in the comment',
        open: true,
        type: 'warning',
      }
      dispatch(openSnack(snack))
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handlePopperOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (Boolean(anchorEl)) setAnchorEl(null)
      else setAnchorEl(event.currentTarget)
    },
    [anchorEl]
  )
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined
  return (
    <Box p="30px" border={`1px solid ${palette.background.default}`} mt="48px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">comments</Typography>
        <Button className="primary" sx={{ border: 1 }}>
          see all
        </Button>
      </Box>
      <Box
        mt="12px"
        sx={{
          maxHeight: 200,
          // overflowY: 'scroll',
        }}
      >
        <ScrollableFeed>
          {props.data && props.data.length > 0 ? (
            <>
              {props.data.map((item: IComment, key: number) => (
                <Comment data={item} key={key} />
              ))}
            </>
          ) : (
            <EmptyBox>No Commnet Yet</EmptyBox>
          )}
        </ScrollableFeed>
      </Box>
      <Box display={props.preview ? 'none' : 'flex'} gap="12px">
        <Box
          sx={{
            border: `1px solid ${palette.background.default}`,
            padding: '13px',
          }}
          onClick={handlePopperOpen}
        >
          <SentimentSatisfiedAltIcon sx={{ color: 'white' }} />
        </Box>
        <AdornmentInput
          variant="default"
          label="type here..."
          value={value}
          onChange={handleChange}
          // adornment={<SendIcon onClick={handleCreate} />}
          adornment={<SendIcon />}
          onClick={handleCreate}
          onSend={handleCreate}
        />
      </Box>
      <Box>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement={`top-start`}
          sx={{ zIndex: 10000 }}
        >
          <Box pb={2} ref={pickerRef}>
            <Picker data={data} onEmojiSelect={addEmoji} />
          </Box>
        </Popper>
      </Box>
    </Box>
  )
}
