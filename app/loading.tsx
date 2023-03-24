import React from 'react'

const Loading = () => {
  return (
    <div role="status" className='flex justify-center items-center min-h-screen w-full'>
      <div className="w-14 h-14 rounded-full animate-spin border border-solid border-white border-t-transparent"></div>
    </div>
  )
}

export default Loading;
