import { DateRangePicker, FocusedInputShape } from 'react-dates'
import 'react-dates/initialize';
import React, { useState, Fragment, useReducer} from "react";
import moment, { Moment } from 'moment'



export default function DateRange(){

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

    return (
        <div>
            <DateRangePicker
                startDate={startDate} // moment.Moment | null;
                startDateId="your_unique_start_date_id" // moment.Moment | null;
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // string;
                onDatesChange={handlendDatesChange} // (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
                focusedInput={focusedInput} // FocusedInputShape | null;
                onFocusChange={handleFocusChange} // (arg: FocusedInputShape | null) => void;
                numberOfMonths={1}
            /> 
        </div>
      )


}



