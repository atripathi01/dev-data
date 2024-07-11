import React from 'react'

type Props={
  children: any;
  className?: string;
}

const CardComponent = ({children, className}:Props) => {
  return (
    <div className={`${className}text-sm p-4 h-full min-h-fit my-2 rounded-lg bg-white border-[1px] border-solid border-gray-200`}>
        {children}
    </div>
  ) 
}

export default CardComponent