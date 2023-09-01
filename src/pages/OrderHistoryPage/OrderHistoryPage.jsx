import React from 'react'
import { checkToken } from '../../utilities/users-service'

function OrderHistoryPage() {
    const handleCheckToken = async () => {
      const expDate = await checkToken();
      console.log(expDate);
    };

  return (
    <>
      <h1> Order History</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  )
}

export default OrderHistoryPage