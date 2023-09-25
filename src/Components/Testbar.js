import React, { useState } from 'react';
import '../Styles/Testbar.css';

function Testbar() {
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [criteria, setCriteria] = useState('20 - 25 sec');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Dynamic notification text based on the steps
  const notificationText =
    step === 1
      ? 'Enter the measured testing time below'
      : 'Enter the measured Pressure in bars below';

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError(''); // Clear any previous error message here..
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (inputValue >= 20 && inputValue <= 25) {
        setStep(2);
        setCriteria('60 - 80 bar');
        setInputValue(''); // Clear the input value..
      } else {
        setError('Input should be between 20 - 25 seconds.');
      }
    } else if (step === 2) {
      if (inputValue >= 60 && inputValue <= 80) {
        setSuccessMessage('Test run completed Successfully.');
        setInputValue(''); // Clear the input value..
      } else {
        setError('Input should be between 60 - 80 bars.');
      }
    }
  };

  return (
    <div className='Testbar'>
      <div className='TestNotification'>
        {successMessage ? (
          <p id='test-success'>{successMessage}</p>
        ) : (
          <p>{notificationText}</p>
        )}
      </div>
      <div className='TestInputbar'>
        <form onSubmit={handleSubmit}>
          {!successMessage ? (
            <>
              <input
                type='text'
                id='input-text'
                value={inputValue}
                placeholder={`Enter the measured testing time/pressure (${criteria})`}
                onChange={handleInputChange}
              />
              <button type='submit' id='input-check'>
                {successMessage ? '✔' : 'Enter'}
              </button>
              <span id='timer'>{`[${criteria}]`}</span>
            </>
          ):<p id='test-success'>{successMessage}</p>}
        </form>
        {error && <p className='error-message'>{error}</p>}
      </div>
    </div>
  );
}

export default Testbar;
