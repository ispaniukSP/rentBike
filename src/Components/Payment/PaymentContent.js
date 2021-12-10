import React, {useState, useEffect} from 'react'
import { useRouteMatch } from 'react-router'
import { loadStripe } from '@stripe/stripe-js'
import { historySchema } from '../Auth/schema'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
import Calendar from './Calendar/Calendar'
import ruLocale from 'date-fns/locale/ru';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import * as Styled from './style'
import InfoBike from './InfoBike/InfoBike'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { AppLoader } from '../AppLoader'

const stripeKey = loadStripe('pk_test_51Jcol7DphoWPHqYkK2gqxuZADcnjVy3ElzfHuupRhyWMzGjPVotz3uRYnJpSS9e0vUiXjhVT5Iz9WwnhUpNrU4Kh00UZZYeDZi')
export default function PaymentContent() {
    const [load, setLoad] = useState(false);
    const [dateFrom, setValueDateFrom] = useState(Date.now());
    const [dateTo, setValueDateTo] = useState(null);
    const [center, setCenter] = useState(null)
    const match = useRouteMatch();

    useEffect(async() => {
        axios.get(`http://localhost:3002/centers/${match.params?.centerId}`).then(
            (response) => {
                setLoad(true)
                setCenter({...response.data})
            }
        )
    }, [])

    const PaymentCalculation = (countBike) => {
        console.log(countBike)
    }

    return (
        <Styled.PaymentWrapper>
            <Calendar>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                    <DateTimePicker
                        mask='__/__/____ __:__'
                        renderInput={(props) => <TextField {...props} />}
                        label="DateTimePicker"
                        value={dateFrom}
                        disablePast
                        onChange={(newValue) => {
                            setValueDateFrom(newValue);
                        }}
                    />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                    <DateTimePicker
                        mask='__/__/____ __:__'
                        renderInput={(props) => <TextField {...props} />}
                        disablePast
                        label="DateTimePicker"
                        value={dateTo}
                        onChange={(newValue) => {
                            setValueDateTo(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Calendar>


            <Formik
            initialValues={{
                countbike:'',
            }}
            validationSchema={historySchema}
            onSubmit={(values) => {
                PaymentCalculation(values.countbike)
                // return <PaymentCalculation
                //     data={center}
                //     timeTo={dateTo.getTime()}
                //     timeFrom={dateFrom}
                //     // userId
                //     countTakeBike={values.countbike}
                // />
            }}
            >
                {() => {
                    return load ? (
                        <Form>
                            <Styled.SendForm>
                                <InfoBike price={center?.price} bikes={center?.countBike} />
                                
                                <Styled.CountField>
                                    Input count of bikes:
                                    <Field
                                    as={Styled.CountBike}
                                    name='countbike' 
                                    type='number' 
                                    min='1' 
                                    max={center?.countBike}
                                    />
                                </Styled.CountField>

                                <Styled.PaymentButton type='submit'>Send</Styled.PaymentButton>
                            </Styled.SendForm>
                        </Form>
                    ) : <AppLoader color='#111' />;
                }}
            </Formik>
       </Styled.PaymentWrapper>

    )
}


                                {/* <Elements stripe={stripeKey}>
                                    <PaymentForm />
                                </Elements> */}