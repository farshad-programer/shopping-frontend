import React from 'react'
import PostProduct from '../components/PostProduct'
import ExampleModal from '../components/ExampleModal'

const PostProductPage = () => {
  return (
    <div className="mt-12 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-10 items-center  justify-center w-full   ">
          <div
            className={`bg-white dark:bg-secondary-dark-bg flex justify-center items-center p-[2%]  z-10  w-5/6   rounded-2xl`}
          >
            <ExampleModal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostProductPage