import * as Icon from 'react-icons/ai'


interface props {
    close: () => void;
   
}


const Price = ({close}:props) => {
       
  return (
      
    <div className=''>
        <div className='absolute inset-0  flex justify-center items-center transition ease-in duration-300 ml-80 mb-48'>
            <div className='flex flex-row py-2 px-5 bg-white rounded-lg  text-sm w-[450px] h-[80px] border'>
                <div className='flex justify-start mt-5  text-black cursor-pointer'onClick={close}>
                    <Icon.AiOutlineClose size={18} />
                </div>
                <div className='mt-5 ml-5 text-gray-500'>
                    <h1>
                    Average nightly rate is rounded.
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Price
