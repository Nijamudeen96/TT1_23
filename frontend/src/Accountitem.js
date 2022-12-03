import React from 'react'

const Accountitem = ({AccountID, AccountType, AccountBalance}) => {
  return (
    <div>
        <p>{AccountID}</p>
        <p>{AccountType}</p>
        <p>{AccountBalance}</p>
    </div>
  )
}

export default Accountitem