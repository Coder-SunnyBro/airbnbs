import React from 'react'

const PlaceOffer = ({iconComponent, para}) => {
  return (
    <div>
        <div className='flex items-center gap-2 '>
            <span>{iconComponent}</span>
            <span className='font-normal'>{para}</span>
        </div>
    </div>
  )
}

export default PlaceOffer
