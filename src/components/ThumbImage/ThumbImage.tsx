import React, { FC } from 'react'
import styled from 'styled-components'

const ImageHandler = styled('figure')({
  margin: '0',
  width: '100%',
  '> img': {
    width: '100%',
    borderRadius: '1rem',
  },
})

interface ThumbImageProps {
  src: string
  title: string
}

const ThumbImage: FC<ThumbImageProps> = ({ src, title }) => (
  <ImageHandler>
    <img src={src} title={title} />
    <figcaption>{title}</figcaption>
  </ImageHandler>
)

export default ThumbImage
