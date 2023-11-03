import React, { useState ,useContext} from 'react';
import toast from 'react-hot-toast';
import AppContext from '../context/AppContext/AppContext';

const PaymentForm = () => {
  let appContext = useContext(AppContext)
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success('Payment Succesfull')
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expiry" className="block text-gray-700">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cvv" className="block text-gray-700">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            placeholder="CVV"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <p className='text-lg py-3'>Total Amount: <span className='font-extrabold'>${Math.round(appContext.result*100)/100 }</span></p>

        <button type="submit" className="bg-blue-500  text-white py-3 px-6 rounded-md hover:bg-blue-700">
          Pay Amount
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
