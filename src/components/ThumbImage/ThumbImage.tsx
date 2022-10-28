import React, { FC } from 'react'

import { ImageHandler } from './styled'

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
