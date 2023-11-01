import { TextField, Box, Typography, Grid } from '@mui/material'
import { getPreviewFromContent } from 'link-preview-js'
// import { getLinkPreview } from 'link-preview-js'
import { useState, useEffect } from 'react'

import { palette } from '../../../MuiTheme'
import { apiGetRequest, apiUrl, isValidUrl } from '../../../utils'

import type { TPostContent } from './ArticleBuilder'

const domain = 'https://twitter.com'

type TPreviewData = {
  contentType: string
  description: string
  favicons: string[]
  images: string[]
  mediaType: string
  siteName: string
  title: string
  url: string
  videos: string[]
}
export const PostLink = ({
  data,
  index,
  handleChange,
}: {
  data: TPostContent
  index: number
  handleChange: AnyFunction
}) => {
  const [previewData, setPreviewData] = useState<TPreviewData>()
  useEffect(() => {
    if (isValidUrl(data.value)) {
      getPreviewByLink()
    }
  }, [data])
  const getSubdomain = (link: string) => {
    const index = link.indexOf(domain)
    if (index > -1) return link.slice(domain.length)
  }
  const getPreviewByLink = async () => {
    const subdomain = getSubdomain(data.value as string)
    if (!subdomain) return
    // console.log(subdomain)
    try {
      const res = await getPreviewByProxy(subdomain)
      console.log(res)
      setPreviewData(res as TPreviewData)
    } catch (e) {
      console.log('error: ', e)
    }
  }
  const getPreviewByProxy = async (subdomain) => {
    const res = await apiGetRequest(`${apiUrl}/proxy${subdomain}`)
    return getPreviewFromContent({ ...res, url: domain })
  }
  return (
    <>
      <TextField
        value={data.value}
        name={data.type}
        onChange={(e) => handleChange(e, index)}
        variant="standard"
        sx={{ width: '100%' }}
      />
      <Box py={3}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <Box>
              <Typography variant="h4">{previewData?.title}</Typography>
              <Typography variant="body2" mt={4}>
                {previewData?.description}
              </Typography>
              {previewData && (
                <Box mt={1}>
                  <Typography variant="caption">
                    <a
                      target="_blank"
                      href={data.value as string}
                      style={{ color: palette.text.secondary }}
                    >
                      {domain}
                    </a>
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <img src={previewData?.images[0]} alt="" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
