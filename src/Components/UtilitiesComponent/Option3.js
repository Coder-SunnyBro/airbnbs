import React from 'react'

const Option3 = ({iconComponent, para}) => {
  return (
    <div className=' flex mt-4 gap-2'>
      <i className="font-gray-200">{iconComponent}</i>
      <p className='text-lg font-normal'>{para}</p>
    </div>
  )
}

export default Option3
