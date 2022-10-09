import React, { useState, Fragment } from "react";
import Profile from '~/image/profile.jpeg'
import * as Icon from 'react-icons/bs'
import Logo from '~/image/logo.png'
import Learnmore from '~/modal/learnmore'
import Showmore from '~/modal/showmore'
import Parking from '~/image/icons8-parking-64.png'
import { Disclosure,} from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() {
  const [learnmore, setLearMore] = useState(false)
  const [showmore, setShowMore] = useState(false)
  return (
    <div className="lg:flex lg:flex-row flex-col justify-center lg:px-12 px-5 py-12">
    
        <div className=" lg:w-2/3 w-full">
          <div className="mr-10">
            <div className="flex justify-between ">
              <div className="justify-center">
                <h1 className="lg:text-2xl text-xl">Private room in condo hosted by Mange Ram</h1>
                <p className="mt-2 text-gray-500 font-light"> 2 guests 1 bedroom 1 bed 1.5 baths</p>
              </div>
              <div className="lg:mr-10 lg:mt-0 mt-3">
                <img src={Profile} alt="Profile" className=" rounded-full lg:w-16 w-[100px]"/>
              </div>
            </div>
          </div>
            <div className="mr-20">
              <div className="h-[1px] w-full bg-gray-400 mt-5 "></div>
            </div>
          <div className="mt-5">
            <div className=" flex">
              <img src={Parking} alt='Parking Sign' className="w-9 h-9"/>
              <label className="mt-2 ml-4">Park for free</label>
            </div>
              <p className="px-4 ml-9 text-gray-400 font-light">This is one of the few places int the area with free parking</p>
            <div className=" flex mt-8 mb-5">
              <Icon.BsCalendar3 className="w-8 h-8"/>
              <label className="mt-1 ml-4">Free Cancellation before Oct 11.</label>
            </div>
          </div>
          <div className="mr-20">
              <div className="h-[1px] w-full bg-gray-400 mt-5 "></div>
          </div>
          <div className=" mt-5">
            <div className="font-bold">
              <h1 className="text-red-500 text-2xl lg:text-4xl">air<span className="text-black text-2xl lg:text-4xl">cover</span></h1>
            </div>
              <h2 className="mt-4 lg:mr-20 mr-0 font-light lg:text-base text-sm">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in...</h2>
              <p className=" mt-3 underline font-semibold cursor-pointer ease-in duration-300" onClick={()=> setLearMore(true)}>Learn more</p>
          </div>
          {learnmore && <Learnmore close={() =>setLearMore(false)} />}
          <div className="mr-20">
              <div className="h-[1px] w-full bg-gray-400 mt-5 "></div>
          </div>
          <div className=" mt-5">
              <h1 className="mt-4 lg:mr-20 mr-0 font-light lg:text-base text-sm">My house is located in the midst of greenery with pure oxygen and free from pollution, facing 13th century 
              monuments, lake, garden etc. Hauz Khas Village is a must visit for foreign and Indian tourists visiting Delhi. 
              There are many great restaurants and bars in vicinity. Being in HKV is an unforgettable experience which stays with you life long. 
              South Delhi is the BEST area in Delhi and Hauz Khas Village is in the midst of South Delhi. Nearest Metro Station is 1 KM, airport 15 km from my place.....</h1>
              <p className=" mt-3 underline font-semibold cursor-pointer" onClick={()=> setShowMore(true)}>Show more</p>
          </div>
          {showmore && <Showmore close={() =>setShowMore(false)} />}
        </div>
        <div className="w-1/3 w-full">
          <div className="border-2  py-5 px-4 lg:w-96 w-[350px] h-[500px] rounded-xl shadow-lg lg:mt-0 mt-4">
            <div className=" flex justify-between px-4">
              <h1 className="text-2xl">$18 <span className="text-gray-500 text-base">night</span></h1>
              <div className="flex mt-2">
                <Icon.BsStarFill className=" w-4 h-4"/>
                <p className="text-sm  ml-1 ">4.42 <span className ='underline text-sm text-gray-500'>60 reviews</span></p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="w-80 h-32 border border-gray-400 rounded-lg">
              <Menu as="div" className=" text-left cursor-pointer">
                  <Menu.Button className="flex rounded-tl-lg ">
                    <div className="w-40 h-16 border-b border-r border-gray-400">
                      <div className=" px-2 py-3">
                        <h1 className="text-xs">CHECK-IN</h1>
                        <p className="text-sm font-light">10/10/2022</p>
                      </div>
                    </div>
                    <div className="w-40 h-16 border-b rounded-tr-lg border-gray-400">
                      <div className="px-2 py-3">
                        <h1 className="text-xs">CHECK-IN</h1>
                        <p className="text-sm font-light">10/10/2022</p>
                      </div>
                    </div>
                </Menu.Button>
                  <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                  >
                <Menu.Items className="absolute w-[800px] h-[400px] divide-y divide-gray-100 border rounded-md bg-gray-400 right-20">
                  <h1 className="px-4 py-5">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in...</h1>
                  
                </Menu.Items>
                  </Transition>
              </Menu>

                <dl className=" space-y-6 divide-y divide-gray-200 -mt-4">
                <Disclosure as="div"  className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between cursor-pointer ">
                          <div className="mt-4 flex justify-between w-80 h-16 border focus:border-green-500 rounded-b-lg">
                            <div className="px-2 py-4">
                                  <h1 className="text-xs">CHECK-IN</h1>
                                  <p className="text-sm font-light">10/10/2022</p>
                            </div>
                            <div className="px-3 py-5 mt-1 ml-48 cursor-pointer static">
                              <Icon.BsChevronDown  className={classNames(open ? 'rotate-180' : 'rotate-0', 'h-6 w-4 transform')}
                                aria-hidden="false"
                              />
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className='w-80 h-[350px] border border-gray bg-white rounder-lg px-3 py-4 absolute -ml-[1px] -mt-2 shadow-lg rounded-b-md'>
                          <h1 className="">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in...</h1>
                        </Disclosure.Panel>
                      </>
                      )}
                </Disclosure>
                </dl>
                
      
              </div>

              
            </div>
            <div className="flex justify-center mt-3">
              <button className="w-80 h-12 bg-rose-500 text-white rounded-lg hover:bg-rose-600">Reserve</button>
            </div>
            <p className="flex justify-center mt-3 text-gray-500 font-light text-base">You won't be charged yet</p>
            <div className="px-4 mt-4">
              <div className="flex justify-between mt-2">
                <h1 className="underline font-light">$20 x 9 nights</h1>
                <h2 className=""> $182</h2>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="underline font-light">Weekly discount</h1>
                <h2 className="text-green-900 font-light">-$18</h2>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="underline font-light">Service fee</h1>
                <h2 className="">$23</h2>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="h-[1px] w-80 bg-gray-400 mt-5 "></div>
            </div>
            <div className="flex justify-between mt-4 px-4">
              <h1 className="">Total before taxes</h1>
              <p className="">$187</p>
            </div>
            
          </div>
          <div className="">
            <div className="border rounded-xl lg:w-96 w-[350px] h-32 px-4 mt-5">
              <div className=" flex py-4 px-4">
                <div className="w-3/4">
                  <h1 className=" mt-3">This is a rare find. <span className='font-light'>Mange Ram's place on Airbnb is usually fully booked.</span></h1>
                </div>
                <div className="1/4 ">
                  <div className="flex justify-center  py-4 ml-12">
                    <img src={Logo} alt='' className="w-9 h-9"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
   </div>
  );
}
