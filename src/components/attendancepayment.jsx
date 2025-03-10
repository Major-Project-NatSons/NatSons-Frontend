import React, { useState } from 'react';

const AttendancePayment = () => {
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const plans = [
    { name: 'Basic', price: '₹499/month', features: ['Track attendance', 'Generate reports','visual data'] },
    { name: 'Standard', price: '₹999/month', features: ['Track attendance', 'Generate reports', 'Export data'] },
    { name: 'Premium', price: '₹1999/month', features: ['All Standard features', 'Custom reports', 'Priority support'] }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '') {
      alert('Please enter a valid email');
      return;
    }
    alert('Logged in successfully');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentStatus('Processing');
    
    setTimeout(() => {
      setPaymentStatus('Payment Successful');
      alert('Payment Successful! You are now subscribed.');
    }, 2000);
  };

  return (
    <div className="bg-white w-full h-screen">

 
      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Choose Your Subscription Plan</h2>
          <p className="text-lg text-gray-700">Select the plan that best fits your needs. Get access to premium features with every plan!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">{plan.price}</p>
              <ul className="text-lg text-gray-700 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <button
                className={`py-2 px-6 rounded-full bg-blue-600 text-white ${selectedPlan === plan.name.toLowerCase() ? 'bg-blue-700' : ''}`}
                onClick={() => setSelectedPlan(plan.name.toLowerCase())}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 px-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Log In to Continue</h2>
          <p className="text-lg text-gray-700">Please enter your email to log in and complete your subscription.</p>
        </div>

        <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="py-3 px-6 border border-gray-300 rounded-lg text-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-600 text-white rounded-full text-lg"
          >
            Log In
          </button>
        </form>
      </section>

      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Proceed to Payment</h2>
          <p className="text-lg text-gray-700">Once you have selected your plan, proceed to payment to complete your subscription.</p>
        </div>

        <div className="flex justify-center items-center">
          <form onSubmit={handlePayment} className="w-full max-w-md space-y-8">
            <div className="text-center mb-8">
              <p className="text-xl font-semibold mb-4">You are about to pay for the {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan</p>
              <p className="text-lg text-gray-700">Please click below to complete the payment process.</p>
            </div>

            <div className="flex justify-center mb-8">
              <button
                type="submit"
                className="py-3 px-6 bg-yellow-600 text-white rounded-full text-lg w-full"
              >
                {paymentStatus === 'Processing' ? 'Processing Payment...' : 'Proceed to Payment'}
              </button>
            </div>

            {paymentStatus && (
              <div className="text-center text-lg font-semibold text-green-600">
                {paymentStatus}
              </div>
            )}
          </form>
        </div>
      </section>

 
    </div>
  );
};

export default AttendancePayment;
