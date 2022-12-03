import React from 'react'

const Accountitem = ({AccountID, AccountType, AccountBalance}) => {
  return (
        <tr>
            <td>{AccountID} </td>
            <td>{AccountType}</td> 
            <td>{AccountBalance} SGD</td>
        </tr>
  )
}

export default Accountitem