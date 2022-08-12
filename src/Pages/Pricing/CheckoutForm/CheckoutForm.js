import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { stringify } from '@firebase/util';




const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transaction, setTransaction] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, organization, email, service } = booking;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
       
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: organization,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('')
            setTransaction(paymentIntent.id);
            setSuccess('Thanks, Your Payment is Successful.')
            //
            const payment= {
                service: service,
                serviceId:_id,
                transactionId : paymentIntent.id,
                organization: organization,
                price: price    
            }

            fetch(`http://localhost:5000/bookings/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ payment })
            })
            .then(res=>res.json())
            .then(data=>{
                setProcessing(false)
                console.log(data)
            })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary text-white font-bold hover:btn-info btn-sm mt-4 ' type="submit" disabled={!stripe }>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-600 font-bold'>
                    {success} 
                    <p className='text-black'>Transaction Id: <span className='text-purple-600 text-sm font-normal'>{transaction}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;