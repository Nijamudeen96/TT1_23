import React from 'react'

const Accountitem = ({AccountID, AccountType, AccountBalance}) => {
  return (
    <table>
        <tr>
            {AccountID} {AccountType} {AccountBalance}
        </tr>
        
    </table>
  )
}

export default Accountitem