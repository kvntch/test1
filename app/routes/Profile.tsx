import React from 'react'
import * as Icon from 'react-icons/bi'
function Profile() {
  return (
    <div className="lg:flex lg:flex-row flex-col justify-start lg:px-12 px-5 py-12 bg-gray-200 mx-auto">
        <div className=" lg:w-2/3 w-full flex mt-3">
           <div className=' border shadow-lg  w-[850px] h-[700px] rounded-lg bg-white'>
                <div className='px-8 py-8'>
                    <h1 className='text-xl font-bold'> Profile picture</h1>
                    <p className='text-gray-400'>Profile picture</p>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[750px] h-[420px] bg-gray-300'>
                        <h1 className='flex justify-center items-center mt-[200px] font-bold'>Your picture will appear here</h1>
                    </div>
                </div>
                <div className=''>
                    Progress bar
                </div>
                <div className='px-8 ml-4 mt-5 flex'>
                    <button className='border px-4 py-2 bg-indigo-500 text-white rounded-full flex'>
                        <Icon.BiUserCircle className='mt-1 mr-2'/>
                        Capture picture
                    </button>
                        
                    <button className='border px-4 py-2 border-indigo-500 text-indigo-500 rounded-full ml-3 flex'>
                        <Icon.BiCloudUpload className='mt-1 mr-2'/>Upload picture
                    </button>
                    <button className='border px-5 py-2 bg-indigo-500 text-white rounded-full ml-[320px]'>Save</button>
                </div>
           </div>
       </div>
       <div className='w-1/3 mt-3'>
           <div className='border rounded-lg shadow-sm w-[450px] h-[250px] bg-white'>
               <div className=' px-8 py-8'>
                   <h1 className='font-bold text-xl'>Profile picture Guide</h1>
                   <p className='text-gray-400 mt-3'>LIGHTNING -<span className='text-black font-semibold'>Face a window or add lamps</span></p>
                   <p className='text-gray-400'>LOCATION -<span className='text-black font-semibold'>Choose simple background</span></p>
                   <p className='text-gray-400'>HEIGHT - <span className='text-black font-semibold'> Position the camera at eye level.</span></p>
                   <p className='text-gray-400'>JUST YOU -<span className='text-black font-semibold'>No logos, links or text on the picture.</span></p>
                   <p className='text-gray-400'>POSE -<span className='text-black font-semibold'>Aim for a natural approach.</span></p>
               </div>

           </div>

       </div>

    </div>
  )
}

export default Profile