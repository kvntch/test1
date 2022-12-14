
import 'react-dates/initialize';
import React, { useState, Fragment, useReducer} from "react";
import Profile from '~/image/profile.jpeg'
import {FiStar, FiChevronDown,  FiChevronUp} from 'react-icons/fi'
import {BsCalendar2Event} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import Logo from '~/image/logo.png'
import Learnmore from '~/modal/learnmore'
import Showmore from '~/modal/showmore'
import Review from '~/modal/review'
import Button from '~/components/button'
import Parking from '~/image/icons8-parking-64.png'
import { Disclosure,} from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react';
// import { AiOutlinePlusCircle} from "react-icons/ai";
// import { Calendar, DateObject } from "react-multi-date-picker"
// import DatePicker from "react-multi-date-picker"
import type{Value} from "react-multi-date-picker"
import moment, { Moment } from 'moment'
import { DateRangePicker, FocusedInputShape } from 'react-dates'
import { IconChevron } from '~/Icons';
import Price from '~/modal/price';
import Discount from '~/modal/discount';
import Pets from '~/modal/pets';
import ServiceFee from '~/modal/serviceFee';
import Cal from '~/modal/DateRangePicker'
import ReactDOM from "react-dom";
// import { DateRangeInput } from "@datepicker-react/styled";
// import { ThemeProvider } from "styled-components";








function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export type CounterProps = {
  min?: number,
  max?: number,
  increment?: number,
  decrement?: number,
  min1?:number,
  max1?: number,
  min2?:number,
  max2?: number,
  onCountChange: (count: number) => void
} & React.HTMLAttributes<HTMLDivElement>



export default function Index({min = 1, 
  min1 = 0, 
  min2 = 0, 
  max = 2,
  max1 = 1,
  max2 = 5,
  increment = 1,
  decrement = 1,
  onCountChange}: CounterProps) {
  
  const [count, setCount] = useState(min)
  const [count1, setCount1] = useState(min1)
  const [count2, setCount2] = useState(min2)


  function handleClickAdd() {
    if (count < max) {
      setCount(count + increment)
      onCountChange(count + increment)
    }
  }
  function handleClickSubtract() {
    if (count > min) {
      setCount(count - decrement)
      onCountChange(count - decrement)
    }
  }

  function handleAddChildren() {
    if (count1 < max1) {
      setCount1(count1 + increment)
      onCountChange(count1 + increment)
    }
  }
  function handleMinuschildren() {
    if (count1 > min1) {
      setCount1(count1 - decrement)
      onCountChange(count1 - decrement)
    }
  }

  function handleAddInfants() {
    if (count2 < max2) {
      setCount2(count2 + increment)
      onCountChange(count2 + increment)
    }
  }
  function handleMinusInfants() {
    if (count2 > min2) {
      setCount2(count2 - decrement)
      onCountChange(count2 - decrement)
    }
  }
  
  const [startDate, setStartDate] = useState<Moment | null>(moment())
  const [endDate, setEndDate] = useState<Moment | null>(null)
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  )

 

  const handlendDatesChange = (arg: {
    startDate: Moment | null
    endDate: Moment | null
  }) => {
    setStartDate(arg.startDate)
    setEndDate(arg.endDate)
  }

  const handleFocusChange = (arg: FocusedInputShape | null) => {
    setFocusedInput(arg)
  }
  

   const [value, setValue] = useState<Value>(new Date());
  const [learnmore, setLearMore] = useState(false)
  const[service, setService] = useState(false)
  const [showmore, setShowMore] = useState(false)
  const [review, setReview] = useState(false)
  const [price, setPrice] = useState(false)
  const [discount, setDiscount] = useState(false)
  const [pets, setPets] = useState(false)

  const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  
  
  function reducer(state: any, action: { type: any; payload: any; }) {
    switch (action.type) {
      case "focusChange":
        return { ...state, focusedInput: action.payload };
      case "dateChange":
        return action.payload;
      default:
        throw new Error();
    }
  }


  //  const [startDate, setStartDate] = useState<Moment | null>(moment())
  // const [endDate, setEndDate] = useState<Moment | null>(null)
  // const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
  //   null
  // )

  // const handlendDatesChange = (arg: {
  //   startDate: moment.Moment | null
  //   endDate: moment.Moment | null
  // }) => {
  //   setStartDate(arg.startDate)
  //   setEndDate(arg.endDate)
  // }

  // const handleFocusChange = (arg: FocusedInputShape | null) => {
  //   setFocusedInput(arg)
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);

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
            <div className="mr-5 lg:mr-20">
              <div className="h-[1px] w-full bg-gray-400 mt-5"></div>
            </div>
          <div className="mt-5">
            <div className=" flex">
              <img src={Parking} alt='Parking Sign' className="w-9 h-9"/>
              <label className="mt-2 ml-4">Park for free</label>
            </div>
              <p className="px-4 ml-9 text-gray-400 font-light">This is one of the few places int the area with free parking</p>
            <div className=" flex mt-8 mb-5">
              <BsCalendar2Event className="w-8 h-8"/>
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
                <AiFillStar className=" w-4 h-4 mt-[1px]"/>
                <p className="text-sm  ml-1 ">4.42 <span className ='underline text-sm text-gray-500 cursor-pointer' onClick={()=> setReview(true)}>60 reviews</span></p>
              </div>
            </div>
            {review && <Review close={() =>setReview(false)} />}
            <div className="flex justify-center mt-5">
              <div className="w-80 h-32 border border-gray-400 rounded-lg ">
                  <div className="flex rounded-tl-lg ">
                    <div className="w-40 h-16 border-b border-r border-gray-400">
                      <div className=" px-2 py-3">
                        <h1 className="text-xs">CHECK-IN</h1>
                        
                      </div>
                    </div>
                    <div className="w-40 h-16 border-b rounded-tr-lg border-gray-400 ">
                      <div className="px-2 py-3">
                        <h1 className="text-xs">CHECK-OUT</h1>
                        
                      </div>
                    </div>
                  </div>
                  <div className='-mt-9 lg:block hidden'>
                   <DateRangePicker
                    startDate={startDate} // moment.Moment | null;
                    startDateId="your_unique_start_date_id" // moment.Moment | null;
                    endDate={endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // string;
                    onDatesChange={handlendDatesChange} // (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
                    focusedInput={focusedInput} // FocusedInputShape | null;
                    onFocusChange={handleFocusChange} // (arg: FocusedInputShape | null) => void;
                    numberOfMonths={2}
                    /> 
                </div>
                <div className='-mt-9 lg:hidden block'>
                  <Cal/>
                </div>
                <div className='mt-3'>
                  {/* <ThemeProvider
                      theme={{
                        breakpoints: ["32em", "48em", "64em"],
                        reactDatepicker: {
                          daySize: [36, 40],
                          
                          fontFamily: "system-ui, -apple-system",
                          colors: {
                            accessibility: "rgb(17 24 39)",
                            selectedDay: "rgb(156 163 175)",
                            selectedDayHover: "rgb(156 163 175)",
                            primaryColor: "rgb(17 24 39);"
                            
                          }
                        }
                      }}
                    >
                     
                      <DateRangeInput 
                        onDatesChange={data => dispatch({ type: "dateChange", payload: data })}
                        onFocusChange={focusedInput =>
                          dispatch({ type: "focusChange", payload: focusedInput })
                        }
                        startDate={state.startDate} // Date or null
                        endDate={state.endDate} // Date or null
                        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                        startDateInputId ={'Check-in'}
                        
                      />
                   
                    </ThemeProvider> */}
                    </div>
              {/* <Menu as="div" className=" text-left cursor-pointer">
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
                <Menu.Items className="absolute w-[800px] h-[400px] divide-y divide-gray-100 border rounded-md bg-white right-20"> */}
              
                    {/* <Calendar
                   value={value}
                  //  onChange={setDates}
                   multiple
                   numberOfMonths={2}
                    // onChange={setValue}
                    /> */}

                  {/* <DateRangePicker
                    startDate={startDate} // moment.Moment | null;
                    startDateId="your_unique_start_date_id" // moment.Moment | null;
                    endDate={endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // string;
                    onDatesChange={handlendDatesChange} // (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
                    focusedInput={focusedInput} // FocusedInputShape | null;
                    onFocusChange={handleFocusChange} // (arg: FocusedInputShape | null) => void;
                /> */}
                {/* </Menu.Items>
                  </Transition>
              </Menu> */}
            
             
                <dl className=" space-y-6 divide-y divide-gray-200 -mt-4">
                <Disclosure as="div"  className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between cursor-pointer ">
                          <div className="mt-4 flex justify-between w-80 h-16 border focus:border-green-500 rounded-b-lg">
                            <div className="px-2 py-4 w-80">
                                  <h1 className="text-xs">GUESTS</h1>
                                      <p className="text-sm font-light">{count} guests</p>
                                     
                            </div>
                            <div className="px-3 py-5 mt-1 ml-48 cursor-pointer static ">
                              {open? <FiChevronUp />: <FiChevronDown/>}
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className='w-80 h-[400px] border border-gray bg-white rounder-lg px-3 py-4 absolute -ml-[1px] -mt-2 shadow-lg rounded-b-md'>
                        {({ close }) => (
                         <div className="flex flex-col">
                            <div className="flex flex-row">
                                  <div className="flex flex-col"> 
                                    <p className="flex justify-start mt-3 text-black font-bold text-base">Adults</p>
                                    <p className="flex justify-start text-black font-light text-xs">Age 13+</p>
                                  </div>
                                  <div className="flex flex-col mt-3 justify-center px-36">
                                    <div className="flex flex-row">
                                      <div className="h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-pointer " onClick={handleClickSubtract}  >
                                          <p className="text-xl">-</p>
                                      </div>   
                                      <p className="px-3 text-base flex justify-center mt-1 ">{count}</p>
                                      <div className="bg-red h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-pointer " onClick={handleClickAdd}  >
                                          <p className="text-xl">+</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="flex flex-row py-2">
                                  <div className="flex flex-col"> 
                                    <p className="flex justify-start mt-3 text-black font-bold text-base">Children</p>
                                    <p className="flex justify-start text-black font-light text-xs">Ages 2-12</p>
                                  </div>
                                  <div className="flex flex-col mt-3 justify-center px-32">
                                    <div className="flex flex-row">
                                      <div className="h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-pointer " onClick={handleMinuschildren}  >
                                          <p className="text-xl">-</p>
                                      </div>   
                                      <p className="px-3 text-base flex justify-center mt-1 ">{count1}</p>
                                      <div className="bg-red h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-pointer " onClick={handleAddChildren}  >
                                          <p className="text-xl">+</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="flex flex-row py-2">
                                  <div className="flex flex-col -mr-1"> 
                                    <p className="flex justify-start mt-3 text-black font-bold text-base">Infants</p>
                                    <p className="flex justify-start text-black font-light text-xs">Under 2</p>
                                  </div>
                                  <div className="flex flex-col mt-3 justify-center px-36">
                                    <div className="flex flex-row">
                                      <div className="h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-pointer " onClick={handleMinusInfants}  >
                                          <p className="text-xl">-</p>
                                      </div>   
                                      <p className="px-3 text-base flex justify-center mt-1 ">{count2}</p>
                                      <div className="bg-red h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-pointer " onClick={handleAddInfants}  >
                                          <p className="text-xl">+</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="flex flex-row py-2">
                                  <div className="flex flex-col mr-1"> 
                                    <p className="flex justify-start mt-3 text-black font-bold text-base">Pets</p>
                                    <p className="flex justify-start text-black text-xs font-bold underline underline-offset-2 cursor-pointer" onClick={()=> setPets(true)}>Bringing a service animal?</p>
                                  </div>

                                  <div className="flex flex-col mt-3 justify-center pl-8">
                                    <div className="flex flex-row">
                                      <div className="h-[30px] w-[30px] border border-gray rounded-full flex justify-center cursor-not-allowed " >
                                          <p className="text-xl text-slate-500">-</p>
                                      </div>   
                                      <p className="px-3 text-base flex justify-center mt-1 ">0</p>
                                      <div className="h-[30px] text-slate-500 w-[30px] border border-gray rounded-full flex justify-center cursor-not-allowed" >
                                          <p className="text-xl">+</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <p className="text-[11px] text-gray-500 mt-5">
                              This place has a maximum of 2 guests, not including infants. Pets aren't allowed.
                              </p>
                              <div className="flex justify-end  mt-9 mr-3 cursor-pointer " onClick={() =>close()}  >
                                <p className="text-black text-md font-base underline underline-offset-2 ">Close</p>
                              </div>
                          </div>
                        )}</Disclosure.Panel>
                      </>
                      )}
                </Disclosure>
                </dl>
                
      
              </div>
              {pets && <Pets close={() =>setPets(false)} />}

              
            </div>
            <div className="flex justify-center mt-3">
            <Button size="lg" textColor="white" bgColor="red">Reserve</Button>
            </div>
            <p className="flex justify-center mt-3 text-gray-500 font-light text-base">You won't be charged yet</p>
            <div className="px-4 mt-4">
              <div className="flex justify-between mt-2 cursor-pointer " onClick={()=> setPrice(true)}>
                <h1 className="underline font-light">$20 x 9 nights</h1>
                <h2 className=""> $182</h2>
              </div>
          {price && <Price close={() => setPrice(false)} />}

              <div className="flex justify-between mt-2 cursor-pointer" onClick={()=> setDiscount(true)}>
                <h1 className="underline font-light">Weekly discount</h1>
                <h2 className="text-green-900 font-light">-$18</h2>
              </div>
          {discount && <Discount close={() =>setDiscount(false)} />}

              <div className="flex justify-between mt-2 cursor-pointer" onClick={()=> setService(true)}>
                <h1 className="underline font-light">Service fee</h1>
                <h2 className="">$23</h2>
              </div>
              {service && <ServiceFee close={() =>setService(false)} />}
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
