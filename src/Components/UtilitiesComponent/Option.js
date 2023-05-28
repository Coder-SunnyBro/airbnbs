import React from 'react'

const Option = ({ iconComponent ,title }) => {
  return (
    <div className="flex-1">
    <div className=" flex gap-2 items-center border p-6 rounded-xl text-2xl h-24">
      {iconComponent}
      <h3 className="text-base">{title}</h3>
    </div>
    
   
  </div>
  )
}

export default Option
