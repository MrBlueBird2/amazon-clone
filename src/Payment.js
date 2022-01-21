import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';
import axios from './axios'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate the special stripe which allows us to change a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `payments/create?total=${getBasketTotal(basket) * 74.52}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const paylod = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
             // paymentIntent = payment confirmation
             setSucceeded(true);
             setError(null);
             setProcessing(false);

             history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>
                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment Method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go!! */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
