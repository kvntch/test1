import * as Icon from 'react-icons/fi'

interface props {
    close: () => void;
   
}


const AddFolderModal = ({close}:props) => {
       
  return (
      
    <div className=''>
        <div className='absolute inset-0 bg-black bg-opacity-40  flex justify-center items-center backdrop-blur-sm transition ease-in duration-700'>
            <div className='py-2 px-3 bg-gray-100 text-white rounded-lg  text-xl w-[720px] h-[460px] border'>
                <div className='flex justify-end mt-5  text-black cursor-pointer'onClick={close}>
                    <Icon.FiXCircle />
                </div>
                
                <div className='mt-4 text-black'>
                    <h1>My house is located in the midst of greenery with pure oxygen and free from pollution, 
                        facing 13th century monuments, lake, garden etc.
                            Hauz Khas Village is a must visit for foreign and Indian tourists visiting Delhi. 
                    </h1>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default AddFolderModal


            