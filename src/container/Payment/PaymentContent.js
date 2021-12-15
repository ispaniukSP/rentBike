import React, {useState, useEffect} from 'react'
import { useRouteMatch } from 'react-router'
import { loadStripe } from '@stripe/stripe-js'
import Calendar from './Calendar/Calendar'
import ruLocale from 'date-fns/locale/ru';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Styled from './style'
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCenter } from '../../store/actions/center/center.action';

const stripeKey = loadStripe('pk_test_51Jcol7DphoWPHqYkK2gqxuZADcnjVy3ElzfHuupRhyWMzGjPVotz3uRYnJpSS9e0vUiXjhVT5Iz9WwnhUpNrU4Kh00UZZYeDZi')
export default function PaymentContent() {
    const [date, setDate] = useState(new Date());
    const [countHour, setCountHours] = useState('');
    const [countBike, setCountBike] = useState(0);
    const [result, setResult] = useState(0);
    const match = useRouteMatch();
    const getPlaceId = match.params.centerId;
    const dispatch = useDispatch();
    const center = useSelector(state => state.center.currentCenter)
    useEffect(() => {
        dispatch(getCurrentCenter(match.params.centerId))
    }, [])

    useEffect(() => {
        if(countHour || countBike){
            let sum = parseInt(countHour * countBike * (center?.price/100) * 100);
            setTimeout(() => setResult(sum), 1000);
        }
    }, [countBike, countHour])

    const timeChange = (event) => {
        setCountHours(event.target.value);
    };

    const dateChange = (newValue) => {
        setDate(newValue);
    };

    return (
        <Styled.PaymentWrapper>
            <Styled.PaymentContent>
                <Calendar>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                    <DateTimePicker
                        label="Date&Time picker"
                        value={date}
                        onChange={dateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Hours</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Hours"
                            value={countHour}
                            onChange={timeChange}
                            >
                            {new Array(24).fill(0).map((_, i) => (
                                <MenuItem key={i} value={i+1}>{i+1} hour</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </Box>
                </Calendar>
                <Styled.Consider>
                    <Styled.ConsiderItem>
                        <Styled.ConsiderTitle>
                            Count:
                        </Styled.ConsiderTitle>
                        <Styled.ConsiderField>
                            <Styled.ConsiderInput
                             id="number" 
                             type="number" 
                             min="1"
                             onChange={(val) => setCountBike(Number(val.target.value))}
                            >
                            </Styled.ConsiderInput>
                        </Styled.ConsiderField>
                    </Styled.ConsiderItem>
                    <Styled.ConsiderItem>
                        <Styled.ConsiderTitle>
                            Total ({(center?.price)/100 || 0} $/hours):
                        </Styled.ConsiderTitle>
                        <Styled.ConsiderField>
                            <Styled.ConsiderInput 
                                placeholder={`${center?.price || 0} $/hours`} 
                                value={result/100} 
                                id="number" 
                                type="number" 
                                min="1">
                            </Styled.ConsiderInput>
                        </Styled.ConsiderField>
                    </Styled.ConsiderItem>
                </Styled.Consider>
                <Elements stripe={stripeKey}>
                    <PaymentForm amount={result}/>
                </Elements>
                <Styled.ConsiderButtons>
                    <Styled.ConsiderButton to={`/center/${getPlaceId}`}>
                            Back
                    </Styled.ConsiderButton>
                </Styled.ConsiderButtons>
            </Styled.PaymentContent>
       </Styled.PaymentWrapper>

    )
}