import { Box, Typography, Grid } from '@mui/material'

import { Button } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { IFile } from '../../../types/model'
import { Community as Container } from '../styled'

export const MediaPanel = ({ data }: { data?: IFile[] }) => {
  return (
    <Container height="100%">
      <Box height="100%">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">media</Typography>
          <Box>
            <Button
              className="primary outlined"
              color={palette.secondary.light}
            >
              view all
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: '390px',
            overflowY: 'scroll',
          }}
          mt="32px"
          pr="24px"
        >
          <Grid container spacing={1}>
            {data &&
              data.length &&
              data.map((media: IFile, key: number) => (
                <Grid item lg={3} key={key}>
                  <Box width="100%" height="136px" margin="0px">
                    <img
                      src={media.fullPath}
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
