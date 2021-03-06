import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/OnePlus/hdfc_bank_8_series_1500x250.jpg" 
                    alt=""
                />
                <div className="checkout__title">
                    <h1>Your shopping basket</h1>
                    {basket.map(item => (
                        <CheckoutProduct
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>    
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
