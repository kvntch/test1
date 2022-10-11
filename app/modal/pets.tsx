import * as Icon from 'react-icons/fi'

interface props {
    close: () => void;
   
}


const Pets= ({close}:props) => {
       
  return (
      
    <div className=''>
        <div className='absolute inset-0 bg-black bg-opacity-40  flex justify-center items-center backdrop-blur-sm transition ease-in duration-300'>
            <div className='py-2 px-3 bg-gray-100 text-white rounded-lg  text-xl w-[600px] h-[660px] border'>
                <div className='flex justify-start mt-5  text-black cursor-pointer'onClick={close}>
                    <Icon.FiXCircle />
                </div>
                
                <div className='mt-4 text-black'>
                    <h1>Service animals {'\n'}
                        Service animals aren’t pets, so there’s no need to add them here.
                        {'\n'}
                        Traveling with an emotional support animal? Check out our accessibility policy. 
                    </h1>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Pets
