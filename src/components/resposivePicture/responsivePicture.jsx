import React from 'react'
import { Picture } from 'react-responsive-picture'

export default function ResponsivePicture({little, big}) {
   return (
      <Picture
        sources={[
          {
            srcSet: little,
            media: '(max-width: 1439px)',
          },
          {
            srcSet: big,
          },
          {
            srcSet: little,
            type: 'png',
          },
        ]}
      />
   )
}


