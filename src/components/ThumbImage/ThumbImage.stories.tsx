/* eslint-disable */
import ThumbImage from './ThumbImage'
import React from 'react'

export default {
  title: 'ThumbImage',
}

export const Default = () => (
  <ThumbImage src={`/static/assets/images/moon.png`} title={`Image name`} />
)

Default.story = {
  name: 'default',
}
