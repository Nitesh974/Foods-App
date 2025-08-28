import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');

  const handlePromoSubmit = () => {
    if (promoCode === 'ADMIN' || promoCode === 'FREEDEL') {
      setIsPromoApplied(true);
      setPromoMessage('Promo code applied successfully!');
    } else {
      setIsPromoApplied(false);
      setPromoMessage('Invalid Promo Code');
    }
    setTimeout(() => setPromoMessage(''), 5000);
  };

  const totalCartAmount = getTotalCartAmount();
  const finalDeliveryCharge = isPromoApplied ? 0 : deliveryCharge;
  const totalAmount = totalCartAmount + (totalCartAmount === 0 ? 0 : finalDeliveryCharge);

  return (
    <div className='cart'>
      {promoMessage && <div className='promo-message'>{promoMessage}</div>}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)} > - </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{totalCartAmount}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{totalCartAmount === 0 ? 0 : finalDeliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{totalAmount}</b></div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input
                type="text"
                placeholder='PROMOCODE'
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
